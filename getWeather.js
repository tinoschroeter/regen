import geoip from "geoip-lite";
import weather from "weather-js";

const getWeather = (req, res) => {
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  const geo = geoip.lookup(ip);

  if (!geo) return res.json({ rain: "error", text: "Keine IP" });

  const search = { search: geo.city, degreeType: "C" };

  weather.find(search, (err, result) => {
    if (err) console.error(err);

    const rainy = result[0].current.skytext.match(/[rR]ain/g);
    const weather = result[0].current;

    const info = {
      text: rainy ? "Ja" : "Nein",
      rain: rainy ? true : false,
      city: geo.city,
      temperature: weather.temperature,
      humidity: weather.humidity,
      windspeed: weather.windspeed,
      skytext: weather.skytext
    };

    return res.json(info);

    res.json({ rain: "error", text: "Fehler" });
  });
};

export default getWeather;
