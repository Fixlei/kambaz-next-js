//First, the functions can be imported as the single Math object that contains
// references to all the functions as import Math from "./Math", then accessed
// as Math.add(), Math.subtract(), and so on. An alternative is import * as
// Matematica from "./Math", where Matematica is a custom local object name,
// so you invoke Matematica.add() and Matematica.subtract(). Finally, the functions
// can be imported individually by destructing the exported functions as import
// { add, subtract, multiply, divide } from "./Math". Implement the Math.ts library
// and the DestructingImports component, import them in Lab 3, and confirm the
// table renders as shown:


import Math, { add, subtract, multiply, divide, remainder } from "./Math";
import * as Matematica from "./Math";

export default function DestructingImports() {
  return (
    <div id="wd-destructuring-imports">
      <h2>Destructing Imports</h2>
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr>
            <th>Math</th>
            <th>Matematica</th>
            <th>Functions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Math.add(2, 3) = {Math.add(2, 3)}</td>
            <td>Matematica.add(2, 3) = {Matematica.add(2, 3)}</td>
            <td>add(2, 3) = {add(2, 3)}</td>
          </tr>
          <tr>
            <td>Math.subtract(5, 1) = {Math.subtract(5, 1)}</td>
            <td>Matematica.subtract(5, 1) = {Matematica.subtract(5, 1)}</td>
            <td>subtract(5, 1) = {subtract(5, 1)}</td>
          </tr>
          <tr>
            <td>Math.multiply(3, 4) = {Math.multiply(3, 4)}</td>
            <td>Matematica.multiply(3, 4) = {Matematica.multiply(3, 4)}</td>
            <td>multiply(3, 4) = {multiply(3, 4)}</td>
          </tr>
          <tr>
            <td>Math.divide(8, 2) = {Math.divide(8, 2)}</td>
            <td>Matematica.divide(8, 2) = {Matematica.divide(8, 2)}</td>
            <td>divide(8, 2) = {divide(8, 2)}</td>
          </tr>
          <tr>
            <td>Math.add(10, 20)={Math.add(10, 20)}</td>
            <td>Matematica.add(10, 20)={Matematica.add(10, 20)}</td>
            <td>add(10, 20)={add(10, 20)}</td>
          </tr>
          {/* With AI: remainder row */}
          <tr>
            <td>Math.remainder(10, 3) = {Math.remainder(10, 3)}</td>
            <td>Matematica.remainder(10, 3) = {Matematica.remainder(10, 3)}</td>
            <td>remainder(10, 3) = {remainder(10, 3)}</td>
          </tr>
        </tbody>
      </table>
      <hr />
    </div>
  );
}