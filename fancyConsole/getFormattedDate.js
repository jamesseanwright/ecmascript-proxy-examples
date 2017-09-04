'use strict';

const { Intl } = global;

const formatter = new Intl.DateTimeFormat('en-GB', {
    hour12: false,
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
});

const getFormattedDate = () => formatter.format(new Date());

module.exports = getFormattedDate;
