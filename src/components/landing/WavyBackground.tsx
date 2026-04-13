"use client";

import React, { useEffect, useRef } from "react";

export const WavyBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d", { alpha: true });
        if (!ctx) return;

        let w: number, h: number;
        const dpr = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1;

        const handleResize = () => {
            w = canvas.width = window.innerWidth * dpr;
            h = canvas.height = window.innerHeight * dpr;
            ctx.scale(dpr, dpr);
            canvas.style.width = window.innerWidth + 'px';
            canvas.style.height = window.innerHeight + 'px';
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        const strands = 30; // Further reduced for performance
        const speed = 0.0032; // Increased speed for more dynamic flow
        let nt = 0;

        const colors = ["#8B5CF6", "#D946EF", "#F97316", "#F59E0B", "#EC4899"];

        const drawStrand = (offset: number, opacity: number, width: number, t: number) => {
            const viewW = window.innerWidth;
            const viewH = window.innerHeight;

            const drawPath = (w_scale: number, o_scale: number) => {
                ctx.beginPath();
                ctx.lineWidth = width * w_scale;
                ctx.globalAlpha = opacity * o_scale;

                for (let x = -50; x < viewW + 100; x += 40) { // Large step for performance
                    const yBase = viewH / 2;
                    const frequency1 = 0.001;
                    const frequency2 = 0.002;
                    const amplitude = viewH * 0.12; // Focused vertical movement

                    const strandOffset = Math.sin(x * 0.002 + t + offset) * 30; // Tighter ribbon
                    const wave1 = Math.sin(x * frequency1 + t * 0.4) * amplitude;
                    const wave2 = Math.sin(x * frequency2 - t * 0.2) * (amplitude * 0.3);
                    
                    const y = yBase + wave1 + wave2 + strandOffset;

                    if (x === -50) {
                        ctx.moveTo(x, y);
                    } else {
                        ctx.lineTo(x, y);
                    }
                }
                ctx.stroke();
            };

            const gradient = ctx.createLinearGradient(0, 0, viewW, 0);
            gradient.addColorStop(0, colors[0]);
            gradient.addColorStop(0.25, colors[1]);
            gradient.addColorStop(0.5, colors[2]);
            gradient.addColorStop(0.75, colors[3]);
            gradient.addColorStop(1, colors[4]);
            
            ctx.strokeStyle = gradient;

            // Outer fuzzy stroke (hardware accelerated via CSS blur)
            drawPath(2.5, 0.4);
            // Inner sharp core
            drawPath(0.8, 1.0);
        };

        const render = () => {
            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
            nt += speed;

            for (let i = 0; i < strands; i++) {
                const depthFactor = Math.sin(i * 0.15 + nt * 2);
                const opacity = 0.1 + (Math.abs(depthFactor) * 0.25); 
                const width = 0.7 + (Math.abs(depthFactor) * 1.5);
                
                const strandShift = i * 0.12;
                drawStrand(strandShift, opacity, width, nt * 4);
            }

            requestAnimationFrame(render);
        };

        render();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
            <canvas
                ref={canvasRef}
                className="block"
                style={{ filter: "blur(1.5px)" }} // Applying blur here is much cheaper than shadowBlur
            />
        </div>
    );
};
