import React from "react";

type ButtonProps = {
  //   handleClick: () => void;
  //   handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

const Button = (props: ButtonProps) => {
  return (
    //   <button onClick={props.handleClick}>Click</button>
    // <button onClick={props.handleClick}>Click</button>
    <button onClick={(event) => props.handleClick(event, 1)}>Click</button>
  );
};

export default Button;
