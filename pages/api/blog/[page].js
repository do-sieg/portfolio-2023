import { getAllPosts, getCategoryPosts, searchPosts } from "../../../services/blog";

export default async function handler(req, res) {
	try {
		const { page } = req.query;
		const { locale, currentCategory, perPage, searchTerm } = req.body;

		let response;
		if (searchTerm) {
			response = searchPosts(locale, currentCategory, searchTerm, parseInt(page), perPage);
		} else if (currentCategory) {
			response = getCategoryPosts(locale, currentCategory, parseInt(page), perPage);
		} else {
			response = getAllPosts(locale, parseInt(page), perPage);
		}
		const { posts, count } = response;
		
		res.status(200).json({ posts, count });
	} catch (err) {
		console.error(err.message);
		res.status(500).json({ err: 'ERR_SERVER' });
	}
}
