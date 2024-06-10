module.exports = {
	host: 'smtp.gmail.com',
	port: 465,
	auth: {
		user: process.env.GMAIL_USERNAME,
		pass: process.env.GMAIL_APP_PASSWORD,
	},
};

// host: 'smtp.gmail.com',
// port: 465,
// auth: {
// 	user: process.env.GMAIL_USERNAME,
// 	pass: process.env.GMAIL_APP_PASSWORD,
