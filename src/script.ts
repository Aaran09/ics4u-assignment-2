import { drawGraph } from "@ics4u-assignment-02/utils";

const canvas = document.getElementById("graph") as HTMLCanvasElement;

const a = document.getElementById("a") as HTMLInputElement;
const b = document.getElementById("b") as HTMLInputElement;
const c = document.getElementById("c") as HTMLInputElement;
const d = document.getElementById("d") as HTMLInputElement;

const resetPage = () => {
  draw();
}

a.addEventListener("change", resetPage);
b.addEventListener("change", resetPage);
c.addEventListener("change", resetPage);
d.addEventListener("change", resetPage);

const draw = () => {
  drawGraph(
    {
      a: Number(a.value),
      b: Number(b.value),
      c: Number(c.value),
      d: Number(d.value),
    },
    {
      r1: { x: 0, y: 0 },
      r2: { x: 0, y: 0 },
      r3: { x: 0, y: 0 },
    },
    canvas,
  );
};


