var stand = {
    folder: 7,
    size: 32,
    madeIn: 'China'
};

var copy = {
    pages: 300,
    company: 'bashudhara',
    margin: 'yes'
};

// different ways to change value
copy.company = 'fresh';
copy['margin'] = 'no';

var marginProperty = 'margin';
var [marginProperty] = 'no';
