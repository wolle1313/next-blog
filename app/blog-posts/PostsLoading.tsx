import React from 'react';
import { motion } from 'framer-motion';
const PostsLoading = () => {
  const elements = [];
  for (let i = 0; i < 10; i++) {
    const randomNumber = Math.random() * 10;
    if (randomNumber < 4) {
      elements.push(85);
    } else if (randomNumber < 8) {
      elements.push(105);
    } else {
      elements.push(125);
    }
  }
  return (
    <div>
      {elements.map((element, index) => (
        <motion.div
          transition={{ delay: 0.2 * index }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          key={`${element}${index}`}
          className="bg-dark p-2 rounded-3 my-3 text-success"
          style={{ height: element }}
        />
      ))}
    </div>
  );
};
export default PostsLoading;
