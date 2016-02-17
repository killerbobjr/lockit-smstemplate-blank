var	ejs = require('ejs');

module.exports = function(options, next)
{
	// Format the sms content
	next(undefined, undefined, ejs.render('<%- content %>', options));
};
