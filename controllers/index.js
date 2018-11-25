const eventModels = require('../models/events.js');

// Create a function which is a "controller", it
// handles a request, writing the response.
function index(request, response) {
    const contextData = {
        title: 'All events',
        salutation: 'Hello Event Makers, Goers, and Funders!',
        header: 'All Events',
        eventData: [],
    };
    /* Creates array of event info to display */
    const allEvents = eventModels.all;
    // https://stackoverflow.com/questions/7196212/how-to-create-dictionary-and-add-key-value-pairs-dynamically
    const eventData = [];
    for (let i = 0; i < allEvents.length; i += 1) {
        // event={} must be inside loop to clear it each iteration
        // because when it was outside, pushing to eventData was
        // overriding previous pushes
        // https://stackoverflow.com/questions/19054997/push-is-overwriting-previous-data-in-array
        const event = {};
        event.id = allEvents[i].id;
        event.title = allEvents[i].title;
        event.date = allEvents[i].date;
        eventData.push(event);
    }
    contextData.eventData = eventData;
    // console.log(contextData);
    return response.render('index', contextData);
}

module.exports = {
    index,
};
