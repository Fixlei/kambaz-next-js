//Build a new array inside the loop rather than mutating the source. 
//To practice with for loops, implement a new component called ForLoops based on the code below

export default function ForLoops() {
    //eslint-disable-next-line prefer-const
  let stringArray1 = ["string1", "string3"];
  //eslint-disable-next-line prefer-const
  let stringArray2: string[] = [];
  //eslint-disable-next-line prefer-const
  let stringArray3 = [];
  // With AI: sample lengths array
  const stringLengths: number[] = [];
  for (let i = 0; i < stringArray1.length; i++) {
    const string1 = stringArray1[i];
    stringArray2.push(string1.toUpperCase());
    stringArray3.push(string1.toLowerCase());
    stringLengths.push(string1.length);
  }
  return (
    <div id="wd-for-loops">
      <h4>Looping through arrays</h4>
      stringArray2 = {stringArray2}
      <br />
      stringLengths = {stringLengths}
      <br />
      stringArray3 = {stringArray3}
      <hr />
    </div>
  );
}