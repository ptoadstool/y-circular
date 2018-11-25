const eventModels = require('../models/events.js');

// Create a function which is a "controller", it
// handles a request, writing the response.
function index(request, response) {
    /* Creates array of event info to display */
    const allEvents = eventModels.all;
    const display = [];
    // https://stackoverflow.com/questions/7196212/how-to-create-dictionary-and-add-key-value-pairs-dynamically
    for (let i = 0; i < allEvents.length; i += 1) {
        display[allEvents[i].title] = allEvents[i].date;
        // display[allEvents[i].date] = allEvents[i].title;
    }
    const contextData = {
        title: 'All event',
        salutation: 'Hello Event Makers, Goers, and Funders!',
        header: 'All Events',
        display,
    };
    console.log(display);
    response.render('index', contextData);
}

module.exports = {
    index,
};
