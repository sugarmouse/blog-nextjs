import type { GetStaticProps, NextPage } from "next";
import getPosts from "lib/posts";

type Post = {
  title: string;
  id: string;
  date: string;
};

type Props = {
  posts: Post[];
};

/**
 * 直接拿到数据，不需要前端通过 AJAX 请求获取数据
 * @returns An object with a property called props.
 */
export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts();
  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts))
    }
  };
};

const PostsIndex: NextPage<Props> = (props) => {

  const {posts} = props
  return (
    <>
      <h2>Post Index</h2>
      {
        posts.map(post=><h1 key={post.id}>{post.title}</h1>)
      }
    </>
  );
};

export default PostsIndex;