import { useState } from "react";

const useActive = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };
  return { toggle, handleClick, setToggle };
};

export default useActive;
