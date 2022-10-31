import { useState, useEffect } from "react";
import axios from 'axios';

type Post = {
  title: string;
  id: string;
  date: string;
};

const usePosts = () => {

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

  return { isEmpty, isLoading, posts, setIsEmpty, setIsLoading, setPosts };

};

export default usePosts;