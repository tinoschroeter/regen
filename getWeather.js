import geoip from "geoip-lite";
import weather from "weather-js";
import morgan from "morgan";

const getWeather = (req, res) => {
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  //const ip = "31.16.210.209";
  const geo = geoip.lookup(ip);

  if (!geo) return res.json({ rain: "error", text: "Keine IP" });

  const search = { search: geo.city, degreeType: "C" };

  weather.find(search, (err, result) => {
    if (err) console.log(err);

    const weatherTxt = result[0].current.skytext;
    const rainy = weatherTxt.match(/[rR]ain/g);

    if (rainy) {
      return res.json({ rain: true, text: "Ja", city: geo.city });
    } else {
      return res.json({ rain: false, text: "Nein", city: geo.city });
    }

    res.json({ rain: "error", text: "Fehler" });
  });
};

export default getWeather;
