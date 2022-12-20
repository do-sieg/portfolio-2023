import { sendEmail } from "../../services/email";

export default async function handler(req, res) {
	try {
		const { from, subject, text } = req.body;
		const response = await sendEmail({ to: process.env.NODEMAILER_USER, from, subject, text });
		res.status(200).json(response);
	} catch (err) {
		console.error(err.message);
		res.status(500).json({ err: 'ERR_SERVER' });
	}
}
