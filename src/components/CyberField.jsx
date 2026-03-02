import React, { useEffect, useRef } from 'react';

const CyberField = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        let frame = 0;

        const draw = () => {
            const isDark = document.documentElement.classList.contains('dark');
            ctx.fillStyle = isDark ? '#000000' : '#ffffff';
            // Fade effect for trails? No, crisp for grid.
            ctx.clearRect(0, 0, canvas.width, canvas.height); // or fillRect with opacity

            // Perspective Grid
            const cx = canvas.width / 2;
            const cy = canvas.height / 2;
            const horizon = cy * 0.2; // Horizon line height
            const speed = 2;
            const offset = (frame * speed) % 100;

            ctx.strokeStyle = isDark ? 'rgba(56, 189, 248, 0.3)' : 'rgba(37, 99, 235, 0.2)'; // Light Blue
            ctx.lineWidth = 1;

            // Vertical lines (converging to center)
            for (let i = -1000; i < 2000; i += 100) {
                const x = i;
                ctx.beginPath();
                ctx.moveTo(x, canvas.height);
                ctx.lineTo(cx, horizon);
                // This is a simple radial perspective.
                // Better: simple vertical lines that spread out? 
                // Let's stick to true simplified perspective:

                // Keep it simple: flat grid moving towards viewer (or away)
            }

            // Let's do a "Retro Wave" style grid
            // Vertical lines
            const fov = 300;
            const viewDist = 20;

            ctx.beginPath();
            for (let i = -canvas.width; i < canvas.width * 2; i += 50) {
                // simple verticals
                // To make them converge, we need a 3D projection logic, which is complex for a quick canvas.
                // let's do a cheat: just lines radiating from center center-top
                ctx.moveTo(i, canvas.height);
                ctx.lineTo(cx, horizon);
            }
            ctx.stroke();

            // Horizontal lines (moving down)
            for (let y = 0; y < canvas.height; y += 40) {
                // Creates the movement
                const yPos = y + offset;
                if (yPos > canvas.height) continue;
                if (yPos < horizon) continue;

                // Scale line width by distance from horizon (optional)

                ctx.beginPath();
                ctx.moveTo(0, yPos);
                ctx.lineTo(canvas.width, yPos);
                ctx.stroke();
            }

            // Glowing Particles rising
            // ... (optional)

            frame++;
            requestAnimationFrame(draw);
        };

        const animationId = requestAnimationFrame(draw);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
        />
    );
};

export default CyberField;
