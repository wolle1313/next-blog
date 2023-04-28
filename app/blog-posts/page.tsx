'use client';

import React, { useEffect, useState } from 'react';
import ErrorComponent from '../components/ErrorComponent';
import { Post } from '../types/Post';
import PostItem from './PostItem';
import PostsLoading from './PostsLoading';

const BlogPosts = () => {
  const [posts, setPosts] = useState<Post[] | undefined>();
  const [fetchState, setFetchState] = useState({
    loading: false,
    error: false,
  });

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchPosts = async () => {
      try {
        setFetchState({ loading: true, error: false });
        const postsData = await fetch(
          'https://jsonplaceholder.typicode.com/posts',
          { signal }
        ).then((response) => response.json());
        setPosts(postsData);
        setFetchState({ loading: false, error: false });
      } catch (err) {
        setFetchState({ loading: false, error: true });
      }
    };
    fetchPosts();

    return () => {
      controller.abort();
    };
  }, []);
  console.log(posts);
  if (fetchState.error) return <ErrorComponent />;
  if (fetchState.loading) return <PostsLoading />;

  return (
    <div>
      {posts?.map((post, index) => (
        <PostItem key={post.id} index={index} post={post} />
      ))}
    </div>
  );
};
export default BlogPosts;
