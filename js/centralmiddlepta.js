$('#home').click(function (e) {
    console.debug('home was clicked.');
    e.preventDefault();
    $('#page-content').load('_home.html');
});

$('#volunteer').click(function (e) {
    console.debug('volunteer was clicked.');
    e.preventDefault();
    $('#page-content').load('_volunteer.html');
});

$('#resources').click(function (e) {
    console.debug('resources was clicked.');
    e.preventDefault();
    $('#page-content').load('_resources.html');
});

$('#clubs').click(function (e) {
    console.debug('clubs was clicked.');
    e.preventDefault();
    $('#page-content').load('_clubs.html');
});

$('#calendar').click(function (e) {
    console.debug('calendar was clicked.');
    e.preventDefault();
    $('#page-content').load('_calendar.html');
});

$('#minutes').click(function (e) {
    console.debug('minutes was clicked.');
    e.preventDefault();
    $('#page-content').load('_minutes.html');
});

$('#donate').click(function (e) {
    console.debug('donate was clicked.');
    e.preventDefault();
    $('#page-content').load('_donate.html');
});

$('#contact').click(function (e) {
    console.debug('contact was clicked.');
    e.preventDefault();
    $('#page-content').load('_contact.html');
});

$('#volunteer_link').click(function (e) {
    console.debug('volunteer_link was clicked.');
    e.preventDefault();
    $('#page-content').load('_volunteer.html');
});
