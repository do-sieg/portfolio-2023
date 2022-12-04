import nodemailer from "nodemailer";

export async function sendEmail(mailOptions = { from, to, subject, text }) {
	return new Promise((resolve, reject) => {
		const transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: process.env.NODEMAILER_USER,
				pass: process.env.NODEMAILER_PASS,
			}
		});
		transporter.sendMail(mailOptions, (err, info) => {
			if (err) {
				reject(err);
			} else {
				resolve({ message: "Email sent: " + info.response });
			}
		});
	});
}
