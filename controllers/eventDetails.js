const eventModels = require('../models/events.js');

let event = null;

// Create a function which is a "controller", it
// handles a request, writing the response.
function details(request, response) {
    // response.send('this will be new event page');
    const contextData = {
        title: 'Event Details',
        header: 'Event Details',
        ev: '',
    };
    const id = {
        id: '',
    };
    // const i = document.querySelector(event);
    // console.log(i);
    event = eventModels.getById(2);
    // defines event id info returned by getById()
    // function above. For use in app.js to dynamically
    // adjust route/URL
    id.id = event.id;
    // eventID = event.id;
    console.log(id.id);
    contextData.ev = event;
    console.log(contextData);
    response.render('eventDetails', contextData);
}

module.exports = {
    details,
    event,
};
