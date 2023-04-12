// import mongoose
const mongoose = require('mongoose')

//define connection string
mongoose.connect('mongodb://localhost:27017/exsea' , ()=>{
    console.log('MongoDB Connection Successful!!!');
}
)


// creating model 

// collection for users

const User = mongoose.model('User',{
    username:String,
    email:String,
    password:String
})

// collection for bookeddata

const Bookuser = mongoose.model('Bookuser',{
    itin:String,
    dur:String,
    dep:String,
     gst:Number,
     ctype:String,
     crs:String,
     fname:String,
     lname:String,
     add:String,
     email:String,
     phone:Number

}
)



// collection for cruises
 
const Cruise = mongoose.model('Cruise',{

    id: Number,
    title: String,
    capacity:Number,
    description:String,
    image:String

}
)

// collection for holidays packages

 
const Package = mongoose.model('Package',{

    id:Number,
    title:String,
    sub:String,
    date:String,
    guests:Number,
    days:String,
    price:Number,
    description:String,
    image:String,
    ship:String

}
)

// collection for booking
const Booking = mongoose.model('Booking',{

    
id:Number,
itinerary:String,
departure:String,
ship:String,
duration:String
})


// export model
module.exports={
    User,
    Cruise,
    Package,
    Booking,
    Bookuser
}