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



const itemList = document.getElementById("item-list");
const addBtn = document.getElementById("add-btn");
const clearBtn = document.getElementById("clear-btn");

let count = 0;

const addItem = () => {
    count++;
    const li = document.createElement("li");
    li.className = "flex items-center gap-2";
    li.innerHTML = `
        <button class="flex-1 text-left p-3 rounded-xl bg-slate-800/40 border border-slate-700 hover:bg-slate-800/70 transition">
        <div class="grid grid-cols-4 font-mono text-slate-200 text-sm"</div>
      `;

    history.appendChild(li);
}

itemList.addEventListener("click", (e) => {
    const target = e.target;
    if (target.classList.contains("delete-btn")) {
        target.closest("li")?.remove();
    }
});

addBtn.addEventListener("click", addItem);

clearBtn.addEventListener("click", () => {
    itemList.innerHTML = "";
    count = 0;
})