import React from "react";
import Button from "../Button";

const HireMe = ({ className }) => {
  return (
    <div className={`${className} flex justify-center flex-wrap mob:flex-nowrap light link`}>
        <Button classes={"bg-white text-black"} onClick={() => window.open("mailto:pratikisawesom3@gmail.com")}>
            Hire Me
        </Button>
    </div>
  );
};

export default HireMe;
