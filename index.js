// import express.js
const express = require('express')

// import cors
const cors = require('cors')

// import dataService
const dataService = require('./services/dataService')

//creating server application
const server = express()
server.use(cors({
    origin:'http://localhost:4200'
}))

//parse json data
server.use(express.json())

//setting  port no.
server.listen(3000,()=>{
    console.log('server is listening at port number 3000');
})

// exsea front end request resolving

// register api call resolving
server.post('/register',(req,res)=>{
    console.log('Inside register Api');
    console.log(req.body);
    dataService.register(req.body.name,req.body.email,req.body.pswd)
    .then((result)=>{

      res.status(result.statusCode).json(result)
    })

})


// login api call resolving
server.post('',(req,res)=>{
    console.log('Inside login Api');
    console.log(req.body);
    dataService.login(req.body.email,req.body.pswd)
    .then((result)=>{

      res.status(result.statusCode).json(result)
    })

})


// display cruise api

server.get('/cruises',(req,res)=>{
 dataService.allCruises()  
 .then((result)=>{
  res.status(result.statusCode).json(result)
 })
})

// /all-packages Api
server.get('/holiday',(req,res)=>{
  dataService.allPackages()
  .then((result)=>{
    res.status(result.statusCode).json(result)
  })
})

// booking api

server.get('/booknow',(req,res)=>{
  dataService.allBookings()
  .then((result)=>{
    res.status(result.statusCode).json(result)

  })
})


// register api call resolving
server.post('/booknow',(req,res)=>{
  console.log('Inside booking Api');
  console.log(req.body);
  dataService.bookData(req.body.itin,req.body.dur,req.body.dep, req.body.gst,req.body.ctype,req.body.crs,req.body.fname,req.body.lname,req.body.add,req.body.email,req.body.phone)
  .then((result)=>{

    res.status(result.statusCode).json(result)
  })

})