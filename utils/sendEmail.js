const nodemailer = require('nodemailer');
const nodemailerConfig = require('./nodeMailerConfig');

const sendEmail = async ({ to, subject, html }) => {
	let testAccount = await nodemailer.createTestAccount();

	const transporter = nodemailer.createTransport(nodemailerConfig);

	return transporter.sendMail({
		from: '"Oreo Ataya" <dontrichpeopledifficulut@gmail.com>',
		to,
		subject,
		html,
	});
};

module.exports = sendEmail;
