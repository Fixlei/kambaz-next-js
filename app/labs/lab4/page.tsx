"use client";

import "@/app/labs/lab2/tailwind/utilities.css";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import CounterBroken from "./CounterBroken";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ProfileAlert from "./profile/ProfileAlert";
import ProfileFields from "./profile/ProfileFields";
import { Profile } from "./profile/profile";

export default function Lab4() {
  const sayHello = (msg: string) => {
    alert(msg);
  };
  return (
    <div id="wd-lab4">
      <h2>Lab 4</h2>
      <ClickEvent />
      <PassingDataOnEvent />
      <PassingFunctions message="Hello from Lab 4" theFunction={sayHello} />

      <PassingFunctions message="Hey Ming!" theFunction={sayHello} />
      <CounterBroken />
      <Counter />
      <BooleanStateVariables />
      <StringStateVariables />
      <DateStateVariable />
      <ObjectStateVariable />
      <ArrayStateVariable />
      <ProfileAlert
        id={""}
        submitted={false}
        errors={{
          firstName: undefined,
          lastName: undefined,
          password: undefined,
          dob: undefined,
          role: undefined,
          newsletter: undefined,
          topics: undefined,
          theme: undefined,
        }}
      />
      <ProfileFields
        prefix={""}
        profile={{
          firstName: "",
          lastName: "",
          password: "",
          dob: null,
          role: "",
          newsletter: false,
          topics: [],
          theme: "light",
        }}
        errors={{
          firstName: undefined,
          lastName: undefined,
          password: undefined,
          dob: undefined,
          role: undefined,
          newsletter: undefined,
          topics: undefined,
          theme: undefined,
        }}
        setProfile={function (profile: Profile): void {
          throw new Error("Function not implemented.");
        }}
      />
    </div>
  );
}
