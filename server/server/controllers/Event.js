const Event = require('../models/Event')
const multer = require('multer');

const storage = multer.memoryStorage(); // Store images in memory as Buffer
const upload = multer({ storage: storage });

const addNewEvent = async (req, res) => {
    try {
        // Extract other form data
        const { Title, Description, StartDateTime, EndDateTime ,Category ,Location,Featured,Popular, Price,NumberOfAttendees } = req.body;
    
        // Handle image
        const image = {
          data: req.file.buffer,
          contentType: req.file.mimetype,
        };
    
        // Create a new event with the image data
        const newEvent = new Event({
          Title,
          Description,
          StartDateTime,
          EndDateTime ,
          Category,
          Location,
          Featured,
          Popular, 
          Price,
          NumberOfAttendees,
          Image: image,
        });
    
          await newEvent.save();
          res.status(201).json({message:'Event Added Successfully!', newEvent})
    } catch (err) {
        res.status(422).json({ message: 'Error Adding Event', error: err.message})
    }
}

const updateEvent = async (req, res) => {
    const { EventID } = req.params
    const eventDetails = req.body
    try {
        const updateEvent = await Event.findByIdAndUpdate(EventID, eventDetails, {new: true} )
        res.status(200).json({message: 'Event Updated Successfully!', updateEvent})
    } catch (err) {
        res.status(422).json({message: 'Error Updating Event', err: err.message})
    }
}
const getEventDetials = async(req,res)=>{
    const {id} = req.params;

    try
    {
      const findEvent = await Event.findById(id);
      res.json(findEvent)
    }
    catch(error)
    {
     return res.status(401).send({error: ' There is no Match, Please try again !'})
    }
}



const getEvents = async (_, res) => {
    try {
    
        const lstEvents = await Event.find({ EndDateTime: { $gt: new Date() } })
        .sort({ StartDateTime:  -1 }); // Sort by Start Date Time in descending order
        
             res.status(200).json({ message: 'List of Events Results', events: lstEvents });
 } 
 catch (err) {
     res.status(422).json({ message: 'Error while getting events list', error: err.message });
 }
}

const getPopularEvent = async (_, res) => {
    try {
    
        const popularEvents = await Event.find({ Poplar: true })
        .sort({ StartDateTime:  -1 }) // Sort by Start Date Time in descending order
        .limit(10); // Limit to 10 most popular events

             res.status(200).json({ message: 'Popular Events Results', events: popularEvents });
 } 
 catch (err) {
     res.status(422).json({ message: 'Error while getting poplar events', error: err.message });
 }
}

 const getFeaturedEvent = async (_, res) => {
    try {
    
        const featuredEvents = await Event.find({ Featured: true })
        .sort({ StartDateTime:  -1 }) // Sort by Start Date Time in descending order
        .limit(20); // Limit to 10 most featured events

             res.status(200).json({ message: 'Featured Events Results', events: featuredEvents });
 } catch (err) {
     res.status(422).json({ message: 'Error while getting featured events', error: err.message });
 }
 }

 const getSliderEvent = async (_, res) => {
    try {
    
        const sliderEvents = await Event.find({})
        .sort({ StartDateTime:  -1 }) // Sort by Start Date Time in descending order
        .limit(15); // Limit to 10 most slider events

             res.status(200).json({ message: 'Slider Events Results', events: sliderEvents });
 } catch (err) {
     res.status(422).json({ message: 'Error while getting slider events', error: err.message });
 }
 }
 
 const deleteaEvent = async (req,res,next)=>{
    try {
      await Event.findByIdAndDelete(req.params.id);
      res.status(200).json("Event has been deleted.");
    } catch (error) {
      return res.status(401).send({error: ' Can not Delelte The Event !'})
      next(err);
    }
  }
  
 module.exports = { addNewEvent, updateEvent,getEvents, getPopularEvent, getFeaturedEvent, getSliderEvent, getEventDetials,deleteaEvent}

