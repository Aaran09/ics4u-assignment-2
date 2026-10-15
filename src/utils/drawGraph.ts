import type { Coefficients, Results } from "@ics4u-assignment-02/types";

export const drawGraph = ({ a, b, c, d }: Coefficients, { r1, r2, r3 }: Partial<Results>, canvas: HTMLCanvasElement) => {
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    return;
  }

  const w = canvas.width;
  const h = canvas.height;
  const scale = 40;
  let first = true;

  ctx.clearRect(0, 0, w, h);
  ctx.save();
  ctx.translate(w / 2, h / 2);

  // grid
  ctx.strokeStyle = "#334155";

  for (let i = -w; i < w; i += scale) {
    ctx.beginPath();
    ctx.moveTo(i, -h);
    ctx.lineTo(i, h);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(-w, i);
    ctx.lineTo(w, i);
    ctx.stroke();
  }

  // axes
  ctx.strokeStyle = "#e2e8f0";
  ctx.lineWidth = 2;

  ctx.beginPath();
  ctx.moveTo(-w, 0);
  ctx.lineTo(w, 0);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(0, -h);
  ctx.lineTo(0, h);
  ctx.stroke();

  // curve
  ctx.strokeStyle = "#6366f1";
  ctx.beginPath();

  if (a !== 0) {
    for (let x = -10; x <= 10; x += 0.01) {
      const y = a * x ** 3 + b * x ** 2 + c * x + d;

      if (first) {
        ctx.moveTo(x * scale, -y * scale);
        first = false;
      } else {
        ctx.lineTo(x * scale, -y * scale);
      }
    }
  }

  ctx.stroke();

  // roots
  ctx.fillStyle = "#ef4444";

  [r1, r2, r3].forEach((r) => {
    if (typeof r?.x === "number") {
      ctx.beginPath();
      ctx.arc(r.x * scale, 0, 5, 0, Math.PI * 2);
      ctx.fill();
    }
  });

  ctx.restore();
};
