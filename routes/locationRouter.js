const express = require("express");
const fetch = require("node-fetch");
const router = express.Router();

// -----------------------------------------------------------------------------
//                                  GET SINGLE
// -----------------------------------------------------------------------------
router.get("/:zipcode", (req, res) => {
  fetch(
    `https://www.zipcodeapi.com/rest/${process.env.LOCATION_API_KEY}/info.json/${req.params.zipcode}/radians`
  )
    .then(res => res.json())
    .then(data => {
      if (data && data.error_code) {
        res.status(data.error_code).json(data);
      } else if (data) {
        res.status(200).json(data);
      }
    })
    .catch(error => {
      console.error("\nAPI ERROR", error, "\n");
      res.status(500).json({
        error:
          "Something went wrong with checking the zip code. Open the console to review the error."
      });
    });
});

module.exports = { router };
