import fs from "fs";
import path from "path";
import grayMatter from "gray-matter";
import hljs from "highlight.js";
import { marked } from 'marked';

marked.setOptions({
    highlight: function (code, lang) {
        try {
            if (lang === "") return code;
            return hljs.highlight(code, { language: lang }).value;
        } catch (err) {
            console.error(err.message, { lang });
            return code;
        }
    },
});

export function loadMarkdown(filePath) {
    try {
        const parsed = grayMatter(fs.readFileSync(path.join(process.cwd(), filePath), 'utf8'));
        const { data, content } = parsed;
        return { data, content };
    } catch (err) {
        console.error(err.message);
        return { data: {}, content: "" };
    }
}

export function parseMarkdown(content, parseOptions = {}) {
    const options = {
        ...{
            externalLinks: false,
            imagesNewTab: false,
        }, ...parseOptions
    };

    const renderer = new marked.Renderer();
    if (options.externalLinks) {
        renderer.link = function (href, title, text) {
            const link = marked.Renderer.prototype.link.call(renderer, href, title, text);
            return link.replace("<a", "<a target='_blank'");
        };
    }
    if (options.imagesNewTab) {
        renderer.image = (href, title, text) => {
            const img = marked.Renderer.prototype.image.call(renderer, href, title, text);
            return `<a href="${href}" target="_blank" rel="noreferrer">${img}</a>`;
        };
    }
    marked.use({ renderer });
    return marked.parse(content);
}