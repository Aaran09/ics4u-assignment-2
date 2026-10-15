export type Coefficients = {
  a: number;
  b: number;
  c: number;
  d: number;
};

export type Coordinate = {
  x: number | string;
  y: number | string;
};

export type Results = {
  p: number;
  q: number;
  discriminant: number;
  r1: Coordinate;
  r2: Coordinate;
  r3: Coordinate;
  minimum: Coordinate;
  maximum: Coordinate;
  equation: string;
  firstDerivative: string;
  secondDerivative: string;
  roots: string;
  factored: string;
};

export type History = Coefficients[];
