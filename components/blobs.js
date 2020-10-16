import React from 'react';
import blobStyles from '../styles/blob.module.css'
import { motion } from 'framer-motion';

export default function Blobs(){
    return(
            <motion.div 
              initial={{ opacity: 0.1 }} 
              animate={{ opacity: 1 }}
              exit={{opacity:0.1}}
              transition={{ type: "spring", duration: 2}}
              > 
                <div className={blobStyles.outerDiv}>
                  <div className={blobStyles.innerOrangeDiv}>
                    <img  src='/images/orangeBlob.svg' className={blobStyles.orangeBlob} alt='blob' />
                  </div>
                  <div className={blobStyles.innerPurpleDiv}>
                    <img  src='/images/purpleBlob.svg' className={blobStyles.purpleBlob} alt='blob' />
                  </div>
                  <div className={blobStyles.innerGreenDiv}>
                    <img  src='/images/greenBlob.svg' className={blobStyles.greenBlob} alt='blob' />
                  </div>
                  <div className={blobStyles.innerBlueDiv}>
                    <img  src='/images/blueBlob.svg' className={blobStyles.blueBlob} alt='blob' />
                  </div>
                </div>
              </motion.div>
    )
}
