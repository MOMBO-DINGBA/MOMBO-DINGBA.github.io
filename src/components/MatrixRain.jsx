import React, { useEffect, useRef } from 'react';

const MatrixRain = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Set canvas to full screen
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        // Matrix characters (Katakana + Latin + Numbers)
        const chars = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポ1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const charArray = chars.split('');

        const fontSize = 16;
        const columns = canvas.width / fontSize;

        // Array of drops - one per column
        const drops = [];
        for (let i = 0; i < columns; i++) {
            drops[i] = 1;
        }

        const draw = () => {
            // Semi-transparent black to create fade effect
            // Check if dark mode is active to adjust fade color
            const isDark = document.documentElement.classList.contains('dark');

            ctx.fillStyle = isDark ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Text color - Green or Blue depending on theme preference? 
            // Let's stick to a techy Matrix Green/Blue hybrid
            ctx.fillStyle = isDark ? '#0F0' : '#003300';
            // Or maybe Blue for a more modern look matching the site theme
            // ctx.fillStyle = '#3B82F6'; // Tailwind Blue-500

            // Let's make it match the site's primary blue/purple theme
            const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
            gradient.addColorStop(0, '#3B82F6'); // Blue
            gradient.addColorStop(1, '#8B5CF6'); // Purple
            ctx.fillStyle = gradient;

            ctx.font = fontSize + 'px monospace';

            for (let i = 0; i < drops.length; i++) {
                const text = charArray[Math.floor(Math.random() * charArray.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };

        const interval = setInterval(draw, 33);

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full opacity-30 dark:opacity-20 pointer-events-none"
        />
    );
};

export default MatrixRain;
