// Create a function which is a "controller", it
// handles a request, writing the response.
function about(request, response) {
    const contextData = {
        title: 'About',
        salutation: "We're a group of quirky pseudonyms who love events for some reason.",
        header: 'Meet our Team',

    };
    response.render('about', contextData);
}

module.exports = {
    about,
};
