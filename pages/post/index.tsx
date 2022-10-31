import type { NextPage } from "next";
import { useEffect, useState } from "react";
import axios from 'axios';
import usePosts from "hooks/usePosts";

type Post = {
  title: string;
  id: string;
  date: string;
};

const PostsIndex: NextPage = () => {

  const { isLoading, isEmpty, posts } = usePosts();

  return (
    <>
      <h2>Post Index</h2>
      {
        isLoading ?
          <div>加载中</div> : isEmpty ?
            <div>内容为空</div> :
            posts.map(post => <div>{post.id}</div>)
      }
    </>
  );
};

export default PostsIndex;