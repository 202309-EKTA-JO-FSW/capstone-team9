const User = require('../models/User')
const event = require('../models/Event')


const searchEventsByLocationAndDateAndAttendees = async(req,res)=>{
    const { location, startDate, endDate, numberOfAttendees ,Category,minPrice,maxPrice} = req.query;

    const query = {
        location: { $regex: location, $options: 'i' },
    };

    if (startDate) {
        query.startDate = { $gte: new Date(startDate) };
    }

    if (endDate) {
        query.endDate = { $lte: new Date(endDate) };
    }

    if (numberOfAttendees) {
        query.numberOfAttendees = { $eq: parseInt(numberOfAttendees) };
    }
     if (Category){
        query.Category = {$regex: Category, $options:'i'};
     }

     if(minPrice !== undefined ){
        query.price = {$gte: parseFloat(minPrice)};
     }
     if (maxPrice !==undefined){
        query.price = { ...query.price , $lte:parseFloat(maxPrice)};
     }
 try
 {
    const events = await Event.find(query);
    res.json(events)

 }
 catch(error)
 {
    res.status(401).json({error : "No vaild Search Event !"})
 }
}



module.exports={
    searchEventsByLocationAndDateAndAttendees,
       
}