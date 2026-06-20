import { useEffect, useRef } from "react";

export const BackgroundNetwork = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let particles = [];
    
    // Subtler config for premium feel
    const particleCount = 80;
    const connectionDistance = 180;
    const particleSpeed = 0.6;
    
    let mouse = {
      x: null,
      y: null,
      radius: 200,
    };

    const handleMouseMove = (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    };

    const handleMouseOut = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseOut);

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * particleSpeed;
        this.vy = (Math.random() - 0.5) * particleSpeed;
        this.radius = Math.random() * 1.5 + 0.5;
        this.color = [34, 211, 238]; // Cyan base
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
        if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;

        // Gentle mouse repulsion
        if (mouse.x != null && mouse.y != null) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < mouse.radius) {
            if (distance === 0) distance = 0.1;
            const force = (mouse.radius - distance) / mouse.radius;
            this.x -= (dx / distance) * force * 2;
            this.y -= (dy / distance) * force * 2;
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        // Cyber blue glow
        ctx.shadowBlur = 10;
        ctx.shadowColor = "rgba(34, 211, 238, 0.8)";
        ctx.fillStyle = "rgba(34, 211, 238, 0.6)";
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    const init = () => {
      resize();
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            const opacity = 1 - distance / connectionDistance;
            // Cyber blue connection lines
            ctx.strokeStyle = `rgba(34, 211, 238, ${opacity * 0.25})`;
            ctx.lineWidth = 1.0;
            ctx.stroke();
          }
        }
        
        // Lines to mouse
        if (mouse.x != null && mouse.y != null) {
          let dx = mouse.x - particles[i].x;
          let dy = mouse.y - particles[i].y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < connectionDistance * 1.2) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            const opacity = 1 - distance / (connectionDistance * 1.2);
            // Brighter blue line to mouse
            ctx.strokeStyle = `rgba(56, 189, 248, ${opacity * 0.4})`;
            ctx.lineWidth = 1.5;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none">
      {/* Background radial gradients for cyber blue glow */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-cyan-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-sky-500/10 rounded-full blur-[120px]" />
      <div className="absolute top-[40%] right-[20%] w-[30%] h-[30%] bg-blue-500/5 rounded-full blur-[100px]" />
      
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ opacity: 0.9 }}
      />
    </div>
  );
};
