import fs, { promises as fsPromise } from 'fs';
import path from "path";
import matter from 'gray-matter';

/**
 * It reads the markdown directory, gets the file names, and then maps over the file names to create an
 * array of objects that contain the id, title, and date of each post
 * @returns An array of objects with the id, title, and date of each post.
 */
const getPosts = async () => {
  const markdownDir = path.join(process.cwd(), 'markdown');
  const fileNames = await fsPromise.readdir(markdownDir);
  const posts = fileNames.map(fileName => {
    const fullPath = path.join(markdownDir, fileName);
    const id = fileName.replace(/\.md$/g, '');
    const text = fs.readFileSync(fullPath, 'utf-8');
    const { data: { title, date }, content } = matter(text);
    return { id, title, date };
  });
  return posts;
};

export default getPosts;