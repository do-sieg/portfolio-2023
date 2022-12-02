import nodemailer from "nodemailer";

async function sendEmail(mailOptions) {
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

export default async function handler(req, res) {
	try {
		const { from, subject, text } = req.body;
		console.log(req.body);
		const response = await sendEmail({ to: process.env.NODEMAILER_USER, from, subject, text });
		res.status(200).json(response);
	} catch (err) {
		console.error(err.message);
		res.status(500).json({ err: 'ERR_SERVER' })
	}
}
