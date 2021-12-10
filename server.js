const express = require('express');
const app = express();
const path = require('path');

app.use("/static",express.static(path.join(__dirname,"public")));

const router = require('./scripts/router.js');
//All API requests that need to be handled
router.handleAllArtists(app);
router.handleAllGalleries(app);
router.handleAllPaintings(app);
router.handleByGalleryCountry(app);
router.handleByArtistCountry(app);
router.handleByPaintingId(app);
router.handleByPaintingGalleryId(app);
router.handleByPaintingArtistId(app);
router.handleByPaintingYearMinMax(app);
router.handleByPaintingTitleText(app);
router.handleByPaintingColorName(app);
//Works for local host and online hosting
let port = process.env.PORT || 8080;
app.listen(port,() => {
    console.log(`Server is running on port ${port}`);
});