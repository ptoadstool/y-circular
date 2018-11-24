const eventModels = require('../models/events.js');

let theEvent = null;

// Create a function which is a "controller", it
// handles a request, writing the response.
function newEvent(request, response) {
    // response.send('this will be new event page');
    const contextData = {
        title: 'New Event',
        header: 'New Event Form',
        errors: [],
    };
    if (request.method === 'POST') {
        console.log('This is a POST request');
        const errors = [];
        theEvent = request.body;
        theEvent.id = eventModels.getMaxId() + 1;
        if (!theEvent.title || !theEvent.title.length > 50) {
            errors.push('Invalid or Missing Title');
        }
        if (!theEvent.location) {
            errors.push('Location cannot be blank.');
        }
        if (!theEvent.image) {
            errors.push('Image cannot be blank.');
        }
        // is image .jpg, .png, or .gif?
        // https://stackoverflow.com/questions/5873810/how-can-i-get-last-characters-of-a-string-using-javascript
        const ext = theEvent.image.substr(theEvent.image.length - 4);
        console.log(ext);
        if (ext !== '.jpg' && ext !== '.png' && ext !== '.gif') {
            errors.push('Image must either be .jpg, .png, or .gif format.');
        }
        // IF URL INVALID ERROR - NEED TO FIGURE OUT HOW TO TEST THIS
        if (errors.length === 0) {
            console.log('The new events is ', theEvent);
            eventModels.all.push(theEvent);
            return response.redirect(`/events/${theEvent.id}`);
        }
        contextData.errors = errors;
    }
    return response.render('newEvent', contextData);
}

module.exports = {
    newEvent,
    theEvent,
};
