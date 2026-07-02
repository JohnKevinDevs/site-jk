"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "@/lib/theme/use-theme";

type Point = {
  x: number;
  y: number;
  vx: number;
  vy: number;
};

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function ConstellationCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const hostRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = hostRef.current;
    const context = canvas?.getContext("2d");

    if (!canvas || !host || !context) {
      return;
    }

    const canvasElement = canvas;
    const hostElement = host;
    const canvasContext = context;
    const reduceMotion = prefersReducedMotion();
    const mouse = { x: -9999, y: -9999 };
    let width = 0;
    let height = 0;
    let dpr = 1;
    let points: Point[] = [];
    let frame = 0;
    let isDisposed = false;

    function createPoints() {
      const total = Math.max(28, Math.min(78, Math.round((width * height) / 16000)));
      points = Array.from({ length: total }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
      }));
    }

    function resize() {
      const rect = hostElement.getBoundingClientRect();
      dpr = Math.min(2, window.devicePixelRatio || 1);
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      canvasElement.width = Math.floor(width * dpr);
      canvasElement.height = Math.floor(height * dpr);
      canvasElement.style.width = `${width}px`;
      canvasElement.style.height = `${height}px`;
      canvasContext.setTransform(dpr, 0, 0, dpr, 0, 0);
      createPoints();
    }

    function draw() {
      const isLight = document.documentElement.dataset.theme === "light";
      const line = isLight ? "37,99,235" : "96,165,250";
      const dot = isLight ? "37,99,235" : "147,197,253";

      canvasContext.clearRect(0, 0, width, height);

      for (const point of points) {
        if (!reduceMotion) {
          point.x += point.vx;
          point.y += point.vy;
        }

        if (point.x < 0 || point.x > width) point.vx *= -1;
        if (point.y < 0 || point.y > height) point.vy *= -1;
      }

      for (let i = 0; i < points.length; i += 1) {
        for (let j = i + 1; j < points.length; j += 1) {
          const a = points[i];
          const b = points[j];
          const distance = Math.hypot(a.x - b.x, a.y - b.y);

          if (distance < 132) {
            canvasContext.strokeStyle = `rgba(${line},${0.15 * (1 - distance / 132)})`;
            canvasContext.lineWidth = 1;
            canvasContext.beginPath();
            canvasContext.moveTo(a.x, a.y);
            canvasContext.lineTo(b.x, b.y);
            canvasContext.stroke();
          }
        }
      }

      for (const point of points) {
        const mouseDistance = Math.hypot(point.x - mouse.x, point.y - mouse.y);

        if (mouseDistance < 170) {
          canvasContext.strokeStyle = `rgba(${dot},${0.42 * (1 - mouseDistance / 170)})`;
          canvasContext.lineWidth = 1;
          canvasContext.beginPath();
          canvasContext.moveTo(point.x, point.y);
          canvasContext.lineTo(mouse.x, mouse.y);
          canvasContext.stroke();
        }

        canvasContext.fillStyle = `rgba(${dot},0.85)`;
        canvasContext.beginPath();
        canvasContext.arc(point.x, point.y, 1.7, 0, Math.PI * 2);
        canvasContext.fill();
      }

      if (!reduceMotion && !isDisposed) {
        frame = window.requestAnimationFrame(draw);
      }
    }

    function handlePointerMove(event: PointerEvent) {
      if (event.pointerType === "touch") {
        return;
      }

      const rect = canvasElement.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
    }

    function handlePointerLeave() {
      mouse.x = -9999;
      mouse.y = -9999;
    }

    const observer = new ResizeObserver(() => {
      resize();
      draw();
    });

    observer.observe(hostElement);
    resize();
    draw();

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      isDisposed = true;
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [theme]);

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0" ref={hostRef}>
      <canvas className="h-full w-full opacity-75" ref={canvasRef} />
    </div>
  );
}
