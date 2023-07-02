import React from "react";
import Greet from "../Greet";

// extracting and reusing a component's prop types in another component

const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
  return <div>{props.name}</div>;
};

export default CustomComponent;
