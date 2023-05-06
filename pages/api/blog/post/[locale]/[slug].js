import { getPostData } from "../../../../../services/blog";

export default async function handler(req, res) {
	try {
		const post = getPostData(req.query.locale, req.query.slug);
		res.status(200).json({ post });
	} catch (err) {
		console.error(err.message);
		res.status(500).json({ err: 'ERR_SERVER' });
	}
}
