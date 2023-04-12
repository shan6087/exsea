//import db.js
const db = require('./db')

// register
const register =(name,email,pswd)=>{
    console.log('inside register function');
    //check email is in mongodb- db.users.findOne()
    return db.User.findOne({
        email
    }).then((result)=>{

       console.log(result);
       if(result){
        // account already exist
        return{
            statusCode:401,
            message:'Account already exist!!!!'
        }
       }
       else{
        // to add new user
        const newUser = new db.User({
            username:name,
            email,
            password:pswd
        })
        // to save new user in mongodb use save()
        newUser.save()
        return {
            statusCode:200,
            message:'registration successfull'
        }
       }

    })
}

// login
const login = (email,pswd)=>{
console.log('inside login function body');
// check email,pswd in mongodb
return db.User.findOne({
    email,
    password:pswd
}).then(
    (result)=>{
        if(result){
            return{
                statusCode:200,
                message:'login successfull'

            }
        }
        else{
            return{
                statusCode:404,
                message:'invalid Account/password'
            }
        }
    }
)
}


// cruises
const allCruises = ()=>{
   return db.Cruise.find().then(
    (result)=>{
        if(result){
            return{
                statusCode:200,
                cruises:result
            }
        }
        else{
            return{
                statusCode:404,
                message:"No data available"
            }
        }
    }
   )

}

// all packages
const allPackages = ()=>{
    return db.Package.find().then(
        (result)=>{
            if(result){
                return{
                    statusCode:200,
                    packages:result
                }
            }
            else{
                return{
                    statusCode:400,
                    message:"no data available"
                }
            }
        }
    )
}

// bookings 

const allBookings = ()=>{
    return db.Booking.find().then(
        (result)=>{
            if(result){
                return{
                    statusCode:200,
                    bookings:result
                }
            }
            else{
                return{
                    statusCode:400,
                    message:"no data available"
                }
            }

    })
}

// register
const bookData =(itin,dur,dep, gst,ctype,crs,fname,lname,add,email,phone)=>{
    console.log('inside booking function');
    //check email is in mongodb- db.users.findOne()
    return db.Bookuser.findOne(
        {
           
             add
             
        }
      
       
    ).then((result)=>{

       console.log(result);
       if(result){
        // account already exist
        return{
            statusCode:401,
            message:'booking error'
        }
       }
       else{
        // to add new user
        const newUser = new db.Bookuser({
            itin,
            dur,
            dep,
            gst,
            ctype,
            crs,
            fname,
            lname,
            add,
            email,
            phone
        })
        // to save new user in mongodb use save()
        newUser.save()
        return {
            statusCode:200,
            message:'booking successfull'
        }
       }

    })
}



// export
module.exports={
    register,
    login,
    allCruises,
    allPackages,
    allBookings,
    bookData
}