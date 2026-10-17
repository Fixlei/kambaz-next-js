//The functions add, subtract, multiply, and divide are all exported 
//with the export keyword so that they can be imported individually.
//The Math constant declares an object containing references to the local functions.

export function add(a: number, b: number): number {
  return a + b;
}
export function subtract(a: number, b: number): number {
  return a - b;
}
export function multiply(a: number, b: number): number {
  return a * b;
}
export function divide(a: number, b: number): number {
  return a / b;
}
// With AI: sample remainder export
export function remainder(a: number, b: number): number {
  return a % b;
}
const Math = {
  add,
  subtract,
  multiply,
  divide,
  remainder,
};
export default Math;