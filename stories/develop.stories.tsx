import * as React from 'react';

export default { title: 'Develop' };

export const withConsole = () => {
  const [isClicked, toggle] = React.useState(false);

  const handleClick = () => {
    toggle(!isClicked);
  };

  console.log(`Button state => ${isClicked}`);

  return (
    <button onClick={handleClick}>
      Hello Button {isClicked && 'clicked!'}
    </button>
  );
};
