const express = require("express");
const fetch = require("node-fetch");
const router = express.Router();

// -----------------------------------------------------------------------------
//                                  GET SINGLE
// -----------------------------------------------------------------------------
router.get("/:area", (req, res) => {
  let isError = false;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?zip=${req.params.area},us&appid=${process.env.WEATHER_API_KEY}`
  )
    .then(res => {
      if (res.status >= 400) isError = true;
      return res.json();
    })
    .then(data => {
      // The API documentation does not indicate possible errors so we categorize everything as a 400 for now.
      if (isError) {
        return res.status(400).json(data);
      } else {
        return res.status(200).json(data);
      }
    })
    .catch(error => {
      console.error("\nAPI ERROR", error, "\n");
      res.status(500).json({
        error:
          "Something went wrong with checking the weather. Open the console to review the error."
      });
    });
});

module.exports = { router };
