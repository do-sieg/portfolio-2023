import { getCategoryPagePosts, getPagePosts } from "../../../services/blog";

export default async function handler(req, res) {
	try {
		const { page } = req.query;
		const { locale, currentCategory, perPage } = req.body;

		let response;
		if (currentCategory) {
			response = getCategoryPagePosts(locale, currentCategory, parseInt(page), perPage);
		} else {
			response = getPagePosts(locale, parseInt(page), perPage);
		}
		const { posts, count } = response;
		res.status(200).json({ posts, count });
	} catch (err) {
		console.error(err.message);
		res.status(500).json({ err: 'ERR_SERVER' })
	}
}
