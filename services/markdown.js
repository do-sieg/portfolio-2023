import fs from "fs";
import path from "path";
import grayMatter from "gray-matter";
// import { marked } from 'marked';
// const markdown = marked.parse(fs.readFileSync(path.join(process.cwd(), filePath), 'utf8'));

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