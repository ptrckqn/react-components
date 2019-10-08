import React, { useState } from "react";
import Toggle from "./toggle";

const ToggleWrapper = () => {
  const [value, setValue] = useState(false);
  return (
    <Toggle
      isOn={value}
      handleToggle={() => setValue(!value)}
      colour="#06d6a0"
    />
  );
};

export default ToggleWrapper;
