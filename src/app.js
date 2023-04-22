const { request, response } = require("express");
const express = require("express")
const hbs = require("hbs")
const app = express()
const mongoose = require("mongoose")
const bodyParser= require('body-parser')
const routes = require('./routes/main');
const Detail = require("./models/Detail")
const Slider = require("./models/Slider")
const Service = require("./models/Service")

app.use(bodyParser.urlencoded({
    extended:true
}))


///static/css/style.css
app.use('/static',express.static("public"))
app.use('',routes)



//template engine

app.set('view engine' ,'hbs')
app.set("views" , "views")

hbs.registerPartials("views/partials")

//db connection
mongoose.connect("mongodb://localhost/website_tut",()=>{
    console.log("db connected")

    // Service.create([
    //     {
    //     icon:'fab fa-behance',
    //     title: 'Provide best courses',
    //     description:'We provide courses that help our student in learning about business',
    //     linkText:'https:/www.bussiness.com',
    //     link:'Check'
    //     },

    //     {
    //         icon:'fas fa-building',
    //         title: 'Learn how to business',
    //         description:'We provide courses that help our student in learning about business',
    //         linkText:'https:/www.bussiness.com',
    //         link:'learn'
    //         },

    //         {
    //            icon:'fas fa-building',
    //             title: 'Learn how to business',
    //             description:'We provide courses that help our student in learning about business',
    //             linkText:'https:/www.bussiness.com',
    //             link:'learn'
    //             }
    

    // ])



//     Slider.create([  
//     {
//         title:'Learn Java in very easy manner',
//         subTitle: 'Java is one  of the most popular programming language.',
//         imageUrl: "/static/images/s1.jpg"
//     },
//     {
//         title:'Why we need to learn programming language?',
//         subTitle: 'Programming is very usefull to understand for your carrier',
//         imageUrl: "/static/images/s2.jpg"
//     },
//     {
//         title:'What about node js ?',
//         subTitle: 'Node js is run time envoirment to execute javascript outside browser ',
//         imageUrl: "/static/images/s3.jpg"
//     },
    
//  ])
//      Detail.create({
//          brandName:"Prakhar's Tech",
//         brandIconUrl:"https://cdn-icons-gif.flaticon.com/7211/7211797.gif",
//          links:[
//             {
//                 label: "Home",
//                 url:"/"
//             },
//             {
//                label: "Services",
//                url: "/services"
//            },
//            {
//            label :"Gallery",
//              url : "/gallery"
//              },

//              {
//              label :"About",
//              url : "/about"
//              },
//              {
//              label :"Contact Us",
//              url : "/contact-us"
             
//             },


//          ]
//      })
 })
mongoose.con

app.listen(process.env.PORT | 5556,()=>{
    console.log("Server Started");

});