import * as React from "react";

import { Component } from "../src";

export default {
  title: "Develop",
  component: Component,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export const Console = (args: any) => {
  const [isClicked, toggle] = React.useState(false);

  const handleClick = () => {
    toggle(!isClicked);
  };

  console.log(args);

  return (
    <button onClick={handleClick} style={{ ...args }}>
      <Component>{args.label}</Component>
    </button>
  );
};

Console.args = {
  label: "hello",
};
