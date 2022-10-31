// 只在nodejs中运行的代码
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import getPosts from "lib/posts";

const Posts: NextApiHandler = async (request: NextApiRequest, response: NextApiResponse) => {
  const posts = await getPosts();
  response.statusCode = 200;
  response.setHeader('Content-type', 'application/json');
  response.write(JSON.stringify(posts));
  response.end();
};

export default Posts;