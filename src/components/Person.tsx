import React from "react";
// working with prop type object

import { PersonProps } from "./Person.types";

const Person = (props: PersonProps) => {
  return (
    <div>
      {props.name.first} {props.name.last}
    </div>
  );
};

export default Person;
