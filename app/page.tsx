'use client';
import { motion } from 'framer-motion';
import LoginForm from './components/LoginForm';

export default function Home() {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1}}
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(189,39,66,1) 35%, rgba(0,212,255,1) 100%)",
                overflow: "hidden",
                color: "white",
                textAlign: "center",
            }}
        >
            {/* Animated Title */}
            <motion.h1
                initial={{y: -50, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{duration: 1, delay: 0.5}}
                className="text-3xl my-3"
            >
                Time to Sign In
            </motion.h1>
            <motion.div
                initial={{scale: 0}}
                animate={{scale: [1, 1.2, 1]}}
                transition={{
                    repeat: Infinity,
                    duration: 5,
                    ease: "easeInOut",
                }}
                style={{
                    position: "absolute",
                    top: "10%",
                    left: "20%",
                    width: "10%",
                    height: "20%",
                    background: "rgba(255, 255, 255, 0.2)",
                    borderRadius: "50%",
                    zIndex: 1,
                }}
            />
            <motion.div
                initial={{scale: 0}}
                animate={{scale: [1, 1.2, 1]}}
                transition={{
                    repeat: Infinity,
                    duration: 6,
                    delay: 1,
                    ease: "easeInOut",
                }}
                style={{
                    position: "absolute",
                    bottom: "15%",
                    right: "10%",
                    width: "200px",
                    height: "200px",
                    background: "rgba(255, 255, 255, 0.15)",
                    borderRadius: "50%",
                    zIndex: 1,
                }}
            />
            {/* Login Form */}
            <motion.div
                initial={{scale: 0.8, opacity: 0}}
                animate={{scale: 1, opacity: 1}}
                transition={{duration: 1, delay: 1}}
            >
                <LoginForm/>
            </motion.div>
        </motion.div>
    );
}
