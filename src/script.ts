import type { Coefficients, Coordinate, Results } from "@ics4u-assignment-02/types";
import { drawGraph } from "@ics4u-assignment-02/utils";

const canvas = document.getElementById("graph") as HTMLCanvasElement;
const form = document.getElementById("form") as HTMLFormElement;
const history = document.getElementById("history") as HTMLDivElement;
const aInput = document.getElementById("a") as HTMLInputElement;
const bInput = document.getElementById("b") as HTMLInputElement;
const cInput = document.getElementById("c") as HTMLInputElement;
const dInput = document.getElementById("d") as HTMLInputElement;

const formatNumber = (value: number): string => {
  return value.toFixed(4);
};

const formatCoordinate = (value: Coordinate): string => {
  let x = value.x;
  let y = value.y;

  if (typeof x === "number") {
    x = formatNumber(x);
  }

  if (typeof y === "number") {
    y = formatNumber(y);
  }

  return `x: ${x} | y: ${y}`;
};

const setText = (id: string, value: string): void => {
  const element = document.getElementById(id);
  if (element !== null) {
    element.textContent = value;
  }
};

const getCoefficients = (): Coefficients => ({
  a: Number(aInput.value),
  b: Number(bInput.value),
  c: Number(cInput.value),
  d: Number(dInput.value),
});

const polynomialTerm = (coefficient: number, variable: string): string => {
  if (coefficient === 0) {
    return "";
  }

  if (coefficient < 0) {
    return ` - ${String(Math.abs(coefficient))}${variable}`;
  }

  return ` + ${String(coefficient)}${variable}`;
};

const solveCubic = ({ a, b, c, d }: Coefficients): Results => {
  const none: Coordinate = { x: "N/A", y: "N/A" };
  const results: Results = {
    discriminant: 0,
    equation: "N/A",
    factored: "No real factorization",
    firstDerivative: "N/A",
    maximum: none,
    minimum: none,
    p: 0,
    q: 0,
    r1: none,
    r2: none,
    r3: none,
    roots: "N/A",
    secondDerivative: "N/A",
  };

  results.equation = `${String(a)}x³${polynomialTerm(b, "x²")}${polynomialTerm(c, "x")}${polynomialTerm(d, "")}`;
  results.firstDerivative = `${String(3 * a)}x²${polynomialTerm(2 * b, "x")}${polynomialTerm(c, "")}`;
  results.secondDerivative = `${String(6 * a)}x${polynomialTerm(2 * b, "")}`;

  const h = -b / (3 * a);
  const p = (3 * a * c - b * b) / (3 * a * a);
  const q = (27 * a * a * d - 9 * a * b * c + 2 * b * b * b) / (27 * a * a * a);
  const discriminant = (q / 2) ** 2 + (p / 3) ** 3;

  results.p = p;
  results.q = q;
  results.discriminant = discriminant;

  if (discriminant < 0) {
    const theta = Math.acos(-q / (2 * Math.sqrt(-((p / 3) ** 3)))) / 3;
    const rootFormula = 2 * Math.sqrt(-p / 3);
    const roots = [
      rootFormula * Math.cos(theta) + h,
      rootFormula * Math.cos(theta + (2 * Math.PI) / 3) + h,
      rootFormula * Math.cos(theta + (4 * Math.PI) / 3) + h,
    ];

    results.r1 = { x: roots[0], y: 0 };
    results.r2 = { x: roots[1], y: 0 };
    results.r3 = { x: roots[2], y: 0 };
    results.roots = "3 real roots, 0 complex roots";
    results.factored = `(x - ${formatNumber(roots[0])})(x - ${formatNumber(roots[1])})(x - ${formatNumber(roots[2])})`;
  } else if (discriminant > 0) {
    // Cardano for the real root other 2 are complex
    const discriminantRoot = Math.sqrt(discriminant);
    const realRoot = Math.cbrt(-q / 2 + discriminantRoot) + Math.cbrt(-q / 2 - discriminantRoot) + -b / (3 * a);

    results.r1 = { x: realRoot, y: 0 };
    results.r2 = { x: "Complex Number", y: "Complex Number" };
    results.r3 = { x: "Complex Number", y: "Complex Number" };
    results.roots = "1 real root, 2 complex roots";
  } else if (p === 0 && q === 0) {
    //Cardano gives the triple root
    const tripleRoot = Math.cbrt(-q / 2) + Math.cbrt(-q / 2) + -b / (3 * a);

    results.r1 = { x: tripleRoot, y: 0 };
    results.r2 = { x: tripleRoot, y: 0 };
    results.r3 = { x: tripleRoot, y: 0 };
    results.roots = "3 real roots, 0 complex roots";
    results.factored = `(x - ${formatNumber(tripleRoot)})³`;
  } else {
    // Cardano gives the double root
    const doubleRoot = -Math.cbrt(-q / 2) - b / (3 * a);
    const singleRoot = -Math.cbrt(4 * q) - b / (3 * a);

    results.r1 = { x: doubleRoot, y: 0 };
    results.r2 = { x: doubleRoot, y: 0 };
    results.r3 = { x: singleRoot, y: 0 };
    results.roots = "3 real roots, 0 complex roots";
    results.factored = `(x - ${formatNumber(doubleRoot)})²(x - ${formatNumber(singleRoot)})`;
  }

  const derivativeDiscriminant = 4 * b * b - 12 * a * c;
  if (derivativeDiscriminant > 0) {
    const root = Math.sqrt(derivativeDiscriminant);
    const x1 = (-2 * b - root) / (6 * a);
    const x2 = (-2 * b + root) / (6 * a);
    const pointOne: Coordinate = {
      x: x1,
      y: a * x1 ** 3 + b * x1 ** 2 + c * x1 + d,
    };
    const pointTwo: Coordinate = {
      x: x2,
      y: a * x2 ** 3 + b * x2 ** 2 + c * x2 + d,
    };

    results.maximum = a > 0 ? pointOne : pointTwo;
    results.minimum = a > 0 ? pointTwo : pointOne;
  }

  return results;
};

const updatePage = (): void => {
  const coefficients = getCoefficients();
  const results = solveCubic(coefficients);

  setText("p", formatNumber(results.p));
  setText("q", formatNumber(results.q));
  setText("discriminant", formatNumber(results.discriminant));
  setText("root-one", formatCoordinate(results.r1));
  setText("root-two", formatCoordinate(results.r2));
  setText("root-three", formatCoordinate(results.r3));
  setText("minimum", formatCoordinate(results.minimum));
  setText("maximum", formatCoordinate(results.maximum));
  setText("equation", results.equation);
  setText("first-derivative", results.firstDerivative);
  setText("second-derivative", results.secondDerivative);
  setText("roots", results.roots);
  setText("factored", results.factored);

  drawGraph(
    { a: coefficients.a, b: coefficients.b, c: coefficients.c, d: coefficients.d },
    {
      r1: results.r1,
      r2: results.r2,
      r3: results.r3,
    },
    canvas,
  );
};

const addItem = (coefficients: Coefficients): void => {
  const valueA = coefficients.a;
  const valueB = coefficients.b;
  const valueC = coefficients.c;
  const valueD = coefficients.d;

  const li = document.createElement("li");
  li.className = "flex items-center gap-3 bg-transparent";
  li.innerHTML = `
    <div class="flex-1 flex justify-around p-4 rounded-xl border border-slate-800 bg-[#0b0f19] text-white font-mono">
      <span>${valueA}</span>
      <span>${valueB}</span>
      <span>${valueC}</span>
      <span>${valueD}</span>
    </div>
  `;
  history.appendChild(li);
};

form.addEventListener("submit", (event: SubmitEvent) => {
  event.preventDefault();
  addItem(getCoefficients());
});

aInput.addEventListener("input", updatePage);
bInput.addEventListener("input", updatePage);
cInput.addEventListener("input", updatePage);
dInput.addEventListener("input", updatePage);

updatePage();
