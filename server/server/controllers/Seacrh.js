const User = require('../models/User');
const Event = require('../models/Event');

const searchEventsByLocationAndDateAndAttendees = async (req, res) => {
    const { location, startDate, endDate, NumberOfAttendees, Category, minPrice, maxPrice } = req.query;

    const query = {
        location: { $regex: location, $options: 'i' },
    };

    if (startDate) {
        query.startDate = { $gte: new Date(startDate) };
    }

    if (endDate) {
        query.endDate = { $lte: new Date(endDate) };
    }

    if (NumberOfAttendees) {
        query.NumberOfAttendees = { $eq: parseInt(NumberOfAttendees) };
    }

    if (Category) {
        query.Category = { $regex: Category, $options: 'i' };
    }

    if (minPrice !== undefined && maxPrice !== undefined) {
        query.price = { $gte: parseFloat(minPrice), $lte: parseFloat(maxPrice) };
    } else if (minPrice !== undefined) {
        query.price = { $gte: parseFloat(minPrice) };
    } else if (maxPrice !== undefined) {
        query.price = { $lte: parseFloat(maxPrice) };
    }

    try {
        const events = await Event.find(query);
        res.json(events);
    } catch (error) {
        res.status(401).json({ error: "No valid Search Event !" });
    }
};

module.exports = {
    searchEventsByLocationAndDateAndAttendees,
};
