//3.4.11 JavaScript Objects
//An object groups named properties; values can be numbers, strings, arrays, or objects.

export default function House() {
  const house = {
    bedrooms: 4,
    bathrooms: 2.5,
    squareFeet: 2000,
    address: {
      street: "Via Roma",
      city: "Roma",
      state: "RM",
      zip: "00100",
      country: "Italy",
    },
    owners: ["Alice", "Bob"],
    yearBuilt: 1991,
    // With AI: sample nested garage object
    garage: { cars: 2 },
  };
  console.log(house);
  console.log(house.owners);
  // With AI: sample extra log
  console.log(house.address.city);
  return (
    <div id="wd-house">
      <h4>House</h4>
      <h5>bedrooms</h5>
      {house.bedrooms}
      <h5>bathrooms</h5>
      {house.bathrooms}
      <h5>houseowner</h5>
      {house.owners.join(", ")}
      <h5>Year Built</h5>
      {house.yearBuilt}
      <h5>garage cars</h5>
      {house.garage.cars}
      <h5>Data</h5>
      <pre>{JSON.stringify(house, null, 2)}</pre>
      <hr />
    </div>
  );
}
