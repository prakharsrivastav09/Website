const { request, response } = require('express')
const express = require('express')

const {route } = require('express/lib/application')
const contact = require('../models/contact')
const Detail = require('../models/Detail')
const Service = require('../models/Service')
const Slider = require('../models/Slider')
// const Detail = require('../models/Detail')
// const Detail = require('../models/Detail')

// const Detail = require("../models/Detail")

//by the help of this router you can make another routes

const routes=express.Router()

routes.get("/", async (req, res)=>{
  const details = await Detail.findOne({"_id":"640da3c807b8a08920d42d86"})
  const slides = await Slider.find()
  //console.log(details)
  //console.log(slides)
  const services=await Service.find()

  res.render("index",{
    details: details,
    slides:slides,
    services:services

  });
});
//this for another page
routes.get('/gallery',async (req,res)=>{
  const details = await Detail.findOne({"_id":"640da3c807b8a08920d42d86"})
    res.render("gallery",{
      details:details,
    });
});

routes.post("/process-contact-form",async(request,response)=> {
  console.log("this form is submitted")
  console.log(request.body)
  //save the data to db
try{

  const data = await contact.create(request.body)
  console.log(data)
  response.redirect("/")


} catch(e)
{
  console.log(e)
  response.redirect("/")
}

})
module.exports = routes;
