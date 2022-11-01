import { getPost, getPostIds } from "lib/posts";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage } from "next";

type Props = {
  post: Post;
};


const PostsShow: NextPage<Props> = (props) => {
  const { post } = props;

  return (
    <>
      <div>文章详情</div>
      <h1>{post.title}</h1>
      <h2>{post.date}</h2>
      <article>
        {post.content}
      </article>
    </>
  );
};

export default PostsShow;

export const getStaticPaths: GetStaticPaths = async () => {
  const idList = await getPostIds();
  return {
    paths: idList.map(id => ({ params: { id: id } })),
    fallback: false,
  };
};



export const getStaticProps: GetStaticProps = async (context: any) => {
  const id = context.params.id;
  const post = await getPost(id);
  return {
    props: {
      post: JSON.parse(JSON.stringify(post))
    }
  };
};