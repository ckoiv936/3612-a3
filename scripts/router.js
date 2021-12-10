//Implement base cases: /paintings /artists /galleries

const artistdata = require('./artistProvider.js');
const handleAllArtists = app => {
    app.get('/artists',(req,resp) => {
        resp.json(artistdata);
    });
}

const gallerydata = require('./galleryProvider.js');
const handleAllGalleries = app => {
    app.get('/galleries',(req,resp) => {
        resp.json(gallerydata);
    });
}

const paintingdata = require('./paintingProvider.js');
const handleAllPaintings = app => {
    app.get('/paintings',(req,resp) => {
        resp.json(paintingdata);
    });
}
//Implement all functionality 
const handleByArtistCountry = app => {
    app.get('/artists/:id',(req,resp)=>{

        const matches = data.filter(a => a.Nationality == req.params.id);
        if(matches.length > 0)
        {
            resp.json(matches);
        }
        else{
            resp.json({"mesage" : "no artists for provided Country"});
        }
    });
}

const handleByGalleryCountry = app => {
    app.get('/galleries/:id',(req,resp)=>{

        const matches = gallerydata.filter(g => g.Nationality == req.params.id);
        if(matches.length > 0)
        {
            resp.json(matches);
        }
        else{
            resp.json({"mesage" : "no galleries for provided Country"});
        }
    });
}

const handleByPaintingId = app => {
    app.get('/painting/:id',(req,resp)=>{

        const matches = paintingdata.filter(p => p.paintingID == req.params.id);
        if(matches.length > 0)
        {
            resp.json(matches);
        }
        else{
            resp.json({"mesage" : "no painting ID for provided painting"});
        }
    });
}

const handleByPaintingGalleryId = app => {
    app.get('/painting/gallery/:id',(req,resp)=>{

        const matches = paintingdata.filter(p => p.gallery.galleryID == req.params.id);
        if(matches.length > 0)
        {
            resp.json(matches);
        }
        else{
            resp.json({"mesage" : "no galleries ID for provided painting"});
        }
    });
}

const handleByPaintingArtistId = app => {
    app.get('/painting/artist/:id',(req,resp)=>{

        const matches = paintingdata.filter(p => p.artist.artistID == req.params.id);
        if(matches.length > 0)
        {
            resp.json(matches);
        }
        else{
            resp.json({"mesage" : "no galleries for provided Country"});
        }
    });
}

const handleByPaintingTitleText = app => {
    app.get('/painting/title/:id',(req,resp)=>{

        const matches = paintingdata.filter(p=> p.title.includes(req.params.id));
        if(matches.length > 0)
        {
            resp.json(matches);
        }
        else{
            resp.json({"mesage" : "no paintings for provided name"});
        }
    });
}

const handleByPaintingColorName = app => {
    app.get('/painting/color/:id',(req,resp)=>{
    
    const matches = paintingdata.filter(p => { 
        for(i of p.details.annotation.dominantColors)
        {
        if(i.name.toLowerCase() == req.params.id.toLowerCase())
        {
            return p;
        }
        }});

    if(matches.length > 0)
    {
        resp.json(matches);
    }
    else{
        resp.json({"mesage" : "no paintings found for provided color"});
    }
});
}

const handleByPaintingYearMinMax = app => {
    app.get('/painting/year/:min/:max',(req,resp)=>{
        const matches = paintingdata.filter(p => {
            if(p.yearOfWork >= req.params.min && p.yearOfWork<=req.params.max)
            {
                return p;
            }

        });
        if(matches.length > 0)
        {
            resp.json(matches);
        }
        else{
            resp.json({"mesage" : "no painings found for provided year range"});
        }
    });
}
module.exports = {
    handleAllArtists,handleAllGalleries,handleAllPaintings,handleByArtistCountry,handleByGalleryCountry,handleByPaintingId,
    handleByPaintingGalleryId,handleByPaintingArtistId,handleByPaintingYearMinMax,handleByPaintingTitleText,handleByPaintingColorName
};