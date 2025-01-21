import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";

// Memoized Button component with displayName and PropTypes
const Button = React.memo(({ handleClick, label }) => {
  console.log(`${label} Button Rendered`);
  return <button onClick={handleClick}>{label}</button>;
});

Button.displayName = "Button";

Button.propTypes = {
  handleClick: PropTypes.func.isRequired, // Prop validation
  label: PropTypes.string.isRequired,    // Prop validation
};

const Call = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => setCount((prev) => prev + 1), []);

  return (
    <div>
      <h1>useCallback</h1>
      <p>Count: {count}</p>
      <Button handleClick={increment} label="Increment" />
    </div>
  );
};

export default Call;