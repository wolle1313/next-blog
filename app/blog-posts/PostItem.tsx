import React from 'react';
import { Post } from '../types/Post';
import { motion } from 'framer-motion';

interface Props {
  post: Post;
  index: number;
}

const PostItem = ({ post, index }: Props) => {
  return (
    <motion.div
      transition={{ delay: 0.2 * index }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="bg-dark p-2 rounded-3 my-3 text-success"
    >
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </motion.div>
  );
};
export default PostItem;
