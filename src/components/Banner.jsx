import React from 'react';
import { motion } from "motion/react";
import '../components/Banner.css';
import { easeOut } from 'motion';
import reactlogo from '../assets/React.png'


const Banner = () => {
    return (
        <div className='banner-bg w-10/12 h-5/6 mt-16 rounded-xl'>
            <div  className='w-7/12 text-slate-300'>
                <motion.h1 initial={{ scale: 1 }} animate={{scale: 1.5, x: 240}}
            transition={{ duration: 3, delay: 1, ease: easeOut}} className='text-6xl mt-6'>HASSAN KH SALAR</motion.h1>
                <motion.h3 initial={{ scale: 1 }} animate={{scale: 1.8, x: 70}}
            transition={{ duration: 4, delay: 1, ease: easeOut}} className='text-3xl text-end mt-4'>FULL STACK DEVELOPER</motion.h3>
            </div>

            <motion.div initial={{ scale: 1 }} animate={{scale: 1.1, y: 80, x:-75 }}
                transition={{ duration: 3, delay: 1, ease: easeOut }} className=' flex justify-end'>
                <img className='w-5/12 ' src={reactlogo} alt="" />
            </motion.div>
            <motion.div
                animate={{ y: 80 }}
                transition={{ duration: 3, delay: 1, ease: easeOut }}
            >
                <div className="w-10/12 bg-slate-900 opacity-60 p-6 rounded-3xl backdrop-blur-lg">
                    <h1 className="text-white text-3xl opacity-100">
                        Hi! I am a Full Stack developer with a passion for crafting engaging user experiences with great performance.
                    </h1>
                </div>
            </motion.div>
            
        </div>
    );
};

export default Banner;