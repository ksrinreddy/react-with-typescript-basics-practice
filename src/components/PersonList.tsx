import React from "react";
import { Name } from "./Person.types";
// working with prop type array of objects ( applies also to array of strings, numbers, etc.)

// type PersonListProps = {
//   names: {
//     first: string;
//     last: string;
//   }[];
// };

type PersonListProps = {
  names: Name[];
};

const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.names.map((name) => {
        return (
          <h2 key={name.first}>
            {name.first} {name.last}
          </h2>
        );
      })}
    </div>
  );
};

export default PersonList;
