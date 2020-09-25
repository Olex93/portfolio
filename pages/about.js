import React from 'react';
import Head from 'next/head';
import styles from "../styles/about.module.css";
import { motion } from "framer-motion";


export default function about() {


  return (
    <div>
      <Head>
        <title>Alex Foster - Web Development Portfolio</title>
      </Head>
        <div className={styles.CustomBody}>
          <motion.h1
            initial={{opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            This is the about page.
          </motion.h1>
        </div>
    </div>
  )
}
