import React from "react";

type ContainerProps = {
  styles: React.CSSProperties;
};

const Container = (props: ContainerProps) => {
  return (
    // hardcoding styles(inline)
    <div style={props.styles}>Text content goes here</div>
  );
};

export default Container;
