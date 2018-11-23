// Create a function which is a "controller", it
// handles a request, writing the response.
function index(request, response) {
    const contextData = {
        title: 'All Events',
        salutation: 'Hello Event Makers, Goers, and Funders!',
        header: 'All Events',

    };
    response.render('index', contextData);
}

module.exports = {
    index,
};
