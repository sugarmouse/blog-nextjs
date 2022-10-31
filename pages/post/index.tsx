import type { NextPage } from "next";
import { useEffect, useState } from "react";
import axios from 'axios';

type Post = {
  title: string;
  id: string;
  date: string;
};

const PostsIndex: NextPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  useEffect(() => {
    setIsLoading(true);
    axios.get('/api/v1/posts').then(response => {
      setPosts(response.data);
      response.data.length === 0 ? setIsEmpty(true) : setIsEmpty(false);
      setIsLoading(false);
    }, () => {
      setIsLoading(false);
    });
  }, []);

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