import React, { useEffect, useState } from "react";

export default function CursorGlow() {
  const [coords, setCoords] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setCoords({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check if mouse is over interactive components (buttons, links, etc.)
      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = 
          target.closest("button") || 
          target.closest("a") || 
          target.closest("[role='button']") ||
          target.style.cursor === "pointer";
        setIsHovering(!!isInteractive);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", updatePosition, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* 1. Large Ambient Electric Glow Orb Following Mouse with Delay */}
      <div
        className="pointer-events-none fixed top-0 left-0 z-0 w-[400px] h-[400px] rounded-full mix-blend-screen opacity-45 select-none"
        style={{
          transform: `translate(${coords.x - 200}px, ${coords.y - 200}px)`,
          background: "radial-gradient(circle, rgba(0, 80, 255, 0.15) 0%, rgba(0, 80, 255, 0.04) 50%, transparent 100%)",
          transition: "transform 0.5s cubic-bezier(0.1, 0.8, 0.2, 1.0)",
        }}
      />

      {/* 2. Micro Electric Blue Follower Dot (Precise & Fast) */}
      <div
        className="pointer-events-none fixed top-0 left-0 z-50 rounded-full"
        style={{
          left: `${coords.x}px`,
          top: `${coords.y}px`,
          width: isHovering ? "12px" : "8px",
          height: isHovering ? "12px" : "8px",
          transform: "translate(-50%, -50%)",
          backgroundColor: isHovering ? "#10b981" : "#0050ff",
          boxShadow: isHovering ? "0 0 15px rgba(16, 185, 129, 0.7)" : "0 0 15px rgba(0, 80, 255, 0.7)",
          transition: "transform 0.05s ease-out, width 0.2s ease-out, height 0.2s ease-out, background-color 0.2s ease-out, box-shadow 0.2s ease-out",
        }}
      />

      {/* 3. Outer Premium Geometric Halo */}
      <div
        className="pointer-events-none fixed top-0 left-0 z-50 rounded-full border"
        style={{
          left: `${coords.x}px`,
          top: `${coords.y}px`,
          width: isHovering ? "40px" : "28px",
          height: isHovering ? "40px" : "28px",
          transform: "translate(-50%, -50%)",
          borderColor: isHovering ? "rgba(16, 185, 129, 0.45)" : "rgba(0, 80, 255, 0.35)",
          transition: "transform 0.2s cubic-bezier(0.1, 0.8, 0.2, 1.0), width 0.25s ease-out, height 0.25s ease-out, border-color 0.2s ease-out",
        }}
      />
    </>
  );
}
