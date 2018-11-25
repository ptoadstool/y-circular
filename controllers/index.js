const eventModels = require('../models/events.js');

// Create a function which is a "controller", it
// handles a request, writing the response.
function index(request, response) {
    const contextData = {
        title: 'event',
        salutation: 'Hello Event Makers, Goers, and Funders!',
        header: 'All Events',
        eventData: [],
    };
    /* Creates array of event info to display */
    const allEvents = eventModels.all;
    // const display = [];
    // https://stackoverflow.com/questions/7196212/how-to-create-dictionary-and-add-key-value-pairs-dynamically
    const eventData = [];
    for (let i = 0; i < allEvents.length; i += 1) {
        const event = {};
        event.id = allEvents[i].id;
        event.title = allEvents[i].title;
        event.date = allEvents[i].date;
        // contextData[`title${j}`] = allEvents[i].title;
        // contextData[`date${j}`] = allEvents[i].date;
        // j += 1;
        // console.log(event);
        eventData.push(event);
    }
    contextData.eventData = eventData;
    console.log(contextData);
    return response.render('index', contextData);
}

module.exports = {
    index,
};
