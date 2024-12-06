'use client';
import { Box, Typography } from '@mui/material';
import LoginForm from './components/LoginForm';

// Basic styled Box components for animation using CSS
export default function Home() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(189,39,66,1) 35%, rgba(0,212,255,1) 100%)',
                overflow: 'hidden',
                color: 'white',
                textAlign: 'center',
                animation: 'fadeIn 1s ease-in-out',
                '@keyframes fadeIn': {
                    '0%': { opacity: 0 },
                    '100%': { opacity: 1 },
                },
            }}
        >
            {/* Animated Title */}
            <Typography variant="h4" sx={{ marginBottom: '1rem' }}>
                Time to Sign In
            </Typography>

            {/* Animated Circles */}
            <Box
                sx={{
                    position: 'absolute',
                    background: 'rgba(255, 255, 255, 0.2)',
                    borderRadius: '50%',
                    zIndex: 1,
                    top: '10%',
                    left: '20%',
                    width: '10%',
                    height: '20%',
                    animation: 'scaleAnimation 5s infinite ease-in-out',
                    '@keyframes scaleAnimation': {
                        '0%': { transform: 'scale(0)' },
                        '50%': { transform: 'scale(1.2)' },
                        '100%': { transform: 'scale(0)' },
                    },
                }}
            />

            <Box
                sx={{
                    position: 'absolute',
                    bottom: '15%',
                    right: '10%',
                    width: '200px',
                    height: '200px',
                    background: 'rgba(255, 255, 255, 0.15)',
                    borderRadius: '50%',
                    zIndex: 1,
                    animation: 'scaleAnimationLarge 6s infinite ease-in-out',
                    '@keyframes scaleAnimationLarge': {
                        '0%': { transform: 'scale(0)' },
                        '50%': { transform: 'scale(1.2)' },
                        '100%': { transform: 'scale(0)' },
                    },
                }}
            />

            {/* Login Form */}
            <Box
                sx={{
                    transform: 'scale(0.8)',
                    opacity: 1,
                    animation: 'scaleUp 1s ease-in-out 1s forwards',
                }}
            >

                <LoginForm />
            </Box>
        </Box>
    );
}
