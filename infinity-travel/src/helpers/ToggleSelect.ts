import { useState } from "react";

export default function ToggleSelect() {
  const [toggle, setToggle] = useState(false);

  function handleTogle() {
    setToggle(!toggle);
  }

  return {
    toggle,
    handleTogle,
  };
}
