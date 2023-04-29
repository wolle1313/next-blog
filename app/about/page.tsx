'use client';

import React from 'react';

import { motion } from 'framer-motion';

import text from '../texts';

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      transition={{ delay: 0.2 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="mx-5 text-center"
    >
      <h2 className="mb-5">{text.about.title}</h2>
      <p className="fs-5" style={{ fontWeight: 700 }}>
        {text.about.description}
      </p>
      <p className="fs-5" style={{ fontWeight: 700 }}>
        {text.about.description2}
      </p>
    </motion.div>
  );
};

export default AboutPage;
