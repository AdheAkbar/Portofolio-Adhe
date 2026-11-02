import React, { useEffect, useRef } from 'react';

interface SignalCanvasProps {
  activeMode: string;
}

export const SignalCanvas: React.FC<SignalCanvasProps> = ({ activeMode }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    // Subtle floating nodes
    const nodeCount = 30;
    const nodes: Array<{ x: number; y: number; vx: number; vy: number; radius: number }> = [];
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 1.5 + 1
      });
    }

    let time = 0;

    const render = () => {
      time += 0.015;
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Clean Light Studio Canvas Clear
      ctx.fillStyle = '#F5F6F8';
      ctx.fillRect(0, 0, width, height);

      // Color scheme based on activeMode (Subtle high-end light tones)
      let primaryColor = 'rgba(16, 185, 129, '; // Emerald
      let secondaryColor = 'rgba(100, 116, 139, '; // Slate
      let waveCount = 3;

      if (activeMode === 'software-web') {
        primaryColor = 'rgba(14, 165, 233, '; // Sky
        secondaryColor = 'rgba(79, 70, 229, ';
        waveCount = 3;
      } else if (activeMode === 'it-network') {
        primaryColor = 'rgba(16, 185, 129, '; // Emerald
        secondaryColor = 'rgba(13, 148, 136, ';
        waveCount = 3;
      } else if (activeMode === 'creative-media') {
        primaryColor = 'rgba(236, 72, 153, '; // Pink
        secondaryColor = 'rgba(244, 63, 94, ';
        waveCount = 3;
      } else if (activeMode === 'data-operations') {
        primaryColor = 'rgba(245, 158, 11, '; // Amber
        secondaryColor = 'rgba(217, 119, 6, ';
        waveCount = 3;
      }

      // Draw subtle background radial glow at mouse
      const gradient = ctx.createRadialGradient(mouseX, mouseY, 10, mouseX, mouseY, Math.max(width, height) * 0.45);
      gradient.addColorStop(0, primaryColor + '0.035)');
      gradient.addColorStop(0.6, secondaryColor + '0.012)');
      gradient.addColorStop(1, 'transparent');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Draw Sine Waves (The "Signal Waves" in minimal light grey/accent)
      for (let w = 0; w < waveCount; w++) {
        ctx.beginPath();
        ctx.lineWidth = w === 0 ? 1.5 : 0.8;
        ctx.strokeStyle = primaryColor + (0.12 - w * 0.02).toFixed(2) + ')';

        const waveOffset = (w * Math.PI) / 3;
        for (let x = 0; x < width; x += 6) {
          const distanceToMouse = Math.abs(x - mouseX);
          const mouseFactor = Math.max(0, 1 - distanceToMouse / (width * 0.4));
          const waveHeight = (25 + mouseFactor * 35) * Math.sin(time + x * 0.003 + waveOffset);
          const y = height * (0.3 + w * 0.18) + waveHeight;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      // Draw gentle connected nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0) node.x = width;
        if (node.x > width) node.x = 0;
        if (node.y < 0) node.y = height;
        if (node.y > height) node.y = 0;

        // Connect nearby nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            ctx.strokeStyle = 'rgba(0, 0, 0, ' + (0.04 * (1 - dist / 100)).toFixed(3) + ')';
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        }

        // Draw node
        ctx.fillStyle = 'rgba(0, 0, 0, 0.12)';
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [activeMode]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80 transition-opacity duration-700"
    />
  );
};
