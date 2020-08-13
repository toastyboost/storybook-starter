import * as React from "react";

type ComponentProps = {
  index?: number;
};

export const Component: React.FC<ComponentProps> = ({ children }) => {
  const [counter, setActiveIndex] = React.useState<number>(0);

  return (
    <div onClick={() => setActiveIndex(counter + 1)}>
      {children} &rarr; {counter}
    </div>
  );
};
