const User = require('../models/User');
const Event = require('../models/Event');

const searchEventsByLocationAndDateAndAttendees = async (req, res) => {
    try {
        const { Title,Location, StartDateTime, EndDateTime ,NumberOfAttendees,Category, minPrice, maxPrice} = req.query;
    
        // Check if at least one of location, startDate, or endDate is provided
      //  if (!Location && !StartDateTime && !EndDateTime && !NumberOfAttendees && !Category && !minPrice  &&  !maxPrice) {
        //  return res.status(400).json({ message: "Please provide at least one of location, startDate, ,NumberOfAttendees ,Category, or endDate." });
       // }
    
        // Build the query based on the provided criteria
        const query = {};
    
        if (Title) {
          query.Title = Title;
        }
        if (Location) {
          query.Location = Location;
        }
    
        if (StartDateTime) {
          query.StartDateTime = { $gte: new Date(StartDateTime) };
        }
    
        if (EndDateTime) {
          query.EndDateTime = { $lte: new Date(EndDateTime) };
        }
        if (NumberOfAttendees) {
            query.NumberOfAttendees = { $eq: parseInt(NumberOfAttendees) };
        }

        if (Category) {
          query.Category = { $regex: Category, $options: 'i' };
      }
   if (minPrice && maxPrice) {
      query.Price = { $gte: parseInt(minPrice), $lte: parseInt(maxPrice) };
    } else if (minPrice) {
      query.Price = { $gte: parseInt(minPrice) };
    } else if (maxPrice) {
      query.Price = { $lte: parseInt(maxPrice) };
    }
        // Query events based on the combined criteria
        const events = await Event.find(query);
    
        res.json(events);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    };
module.exports = {
    searchEventsByLocationAndDateAndAttendees,
};

