import React, { useEffect, useRef } from 'react';

const NeuralNetwork = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let particles = [];
        let animationFrameId;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 1.5;
                this.vy = (Math.random() - 0.5) * 1.5;
                this.size = Math.random() * 2 + 1; // Variable size
                // Different colors for particles: Blue, Purple, Cyan
                const colors = ['#3B82F6', '#8B5CF6', '#06B6D4'];
                this.color = colors[Math.floor(Math.random() * colors.length)];
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                // Bounce off edges
                if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();

                // Add glow effect
                ctx.shadowBlur = 10;
                ctx.shadowColor = this.color;
            }
        }

        const initParticles = () => {
            particles = [];
            const particleCount = Math.min(window.innerWidth / 10, 100); // Responsive count
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        initParticles();
        window.addEventListener('resize', initParticles); // Re-init on resize to adjust density

        // Mouse interaction
        let mouse = { x: null, y: null };
        window.addEventListener('mousemove', (e) => {
            mouse.x = e.x;
            mouse.y = e.y;
        });

        const animate = () => {
            // Theme adaptation
            const isDark = document.documentElement.classList.contains('dark');
            ctx.fillStyle = isDark ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.2)';
            // Use clearRect or fillRect with opacity for trail effect? 
            // clearRect is cleaner for sharp lines. fillRect is better for trails.
            // Let's use clearRect for crisp 'tech' look
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((particle) => {
                particle.update();
                particle.draw();

                // Connect particles close to mouse
                const dxMouse = mouse.x - particle.x;
                const dyMouse = mouse.y - particle.y;
                const distanceMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

                if (distanceMouse < 200) {
                    // Pull particle slightly towards mouse
                    const forceDirectionX = dxMouse / distanceMouse;
                    const forceDirectionY = dyMouse / distanceMouse;
                    const force = (200 - distanceMouse) / 200;
                    const directionX = forceDirectionX * force * 0.5;
                    const directionY = forceDirectionY * force * 0.5;
                    particle.vx += directionX * 0.05;
                    particle.vy += directionY * 0.05;

                    ctx.beginPath();
                    ctx.strokeStyle = particle.color;
                    ctx.lineWidth = 1;
                    ctx.globalAlpha = (200 - distanceMouse) / 200; // Face out
                    ctx.moveTo(particle.x, particle.y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.stroke();
                    ctx.globalAlpha = 1;
                }

                // Connect particles to each other
                particles.forEach((otherParticle) => {
                    const dx = particle.x - otherParticle.x;
                    const dy = particle.y - otherParticle.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 100) {
                        ctx.beginPath();
                        ctx.strokeStyle = isDark ? 'rgba(100, 116, 139, 0.15)' : 'rgba(100, 116, 139, 0.1)'; // Subtle connection color
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(otherParticle.x, otherParticle.y);
                        ctx.stroke();
                    }
                });
            });

            // Limit speed
            particles.forEach((particle) => {
                const speed = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy);
                if (speed > 2) {
                    particle.vx = (particle.vx / speed) * 2;
                    particle.vy = (particle.vy / speed) * 2;
                }
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('resize', initParticles);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
        />
    );
};

export default NeuralNetwork;
