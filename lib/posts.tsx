import fs, { promises as fsPromise } from 'fs';
import path from "path";
import matter from 'gray-matter';
import { marked } from 'marked';

const MARKDOWN_DIR = path.join(process.cwd(), 'markdown');


/**
 * It reads the markdown directory, gets the file names, and then maps over the file names to create an
 * array of objects that contain the id, title, and date of each post
 * @returns An array of objects with the id, title, and date of each post.
 */
const getPosts = async () => {
  const fileNames = await fsPromise.readdir(MARKDOWN_DIR);
  const posts = fileNames.map(fileName => {
    const fullPath = path.join(MARKDOWN_DIR, fileName);
    const id = fileName.replace(/\.md$/g, '');
    const text = fs.readFileSync(fullPath, 'utf-8');
    const { data: { title, date }, content } = matter(text);
    return { id, title, date };
  });
  return posts;
};

export default getPosts;


export const getPost = async (id: string) => {
  const fullPath = path.join(MARKDOWN_DIR, id + '.md');
  const text = fs.readFileSync(fullPath, 'utf-8');
  const { data: { title, date }, content } = matter(text);
  const htmlContent = marked(content);
  return { id, title, date, content, htmlContent };
};

export const getPostIds = async () => {
  const fileNames = await fsPromise.readdir(MARKDOWN_DIR);
  return fileNames.map(fileName => fileName.replace(/\.md$/g, ''));
};