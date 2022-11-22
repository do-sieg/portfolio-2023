import fs from "fs";
import path from "path";
import grayMatter from "gray-matter";
import hljs from "highlight.js";
import { marked } from 'marked';

marked.setOptions({ highlight: (code, lang) => hljs.highlight(code, { language: lang }).value });

export function mdLoad(filePath) {
    try {
        const parsed = grayMatter(fs.readFileSync(path.join(process.cwd(), filePath), 'utf8'));
        const { data, content } = parsed;
        return { data, content };
    } catch (err) {
        console.log(err.message);
        return { data: {}, content: "" };
    }
}

export function parseMd(content) {
    return marked.parse(content);
}