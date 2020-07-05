import React, { useContext, useState } from "react";
import { SidebarContext } from "../SidebarContext";
import { HamburgerSlider } from "react-animated-burgers";

const Hamburger = () => {
  const [active, setActive] = useContext(SidebarContext);
  const [isActive, setIsActive] = useState(false);
  const toggleButton = () => {
    setIsActive(!isActive);
    setActive(!active);
  };

  return (
    <HamburgerSlider
      barColor="white"
      isActive={isActive}
      toggleButton={toggleButton}
      buttonWidth={30}
      className="d-xl-none"
    />
  );
};

export default Hamburger;
