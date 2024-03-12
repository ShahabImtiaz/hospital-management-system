import React from "react";
import "./MyButtons.css";

const MyButtonLg = ({ children, style, className, action }) => {
  return (
    <button
      onClick={action}
      className={`MyButtonLg   ${className}`}
      style={style}
    >
      {children}
    
    </button>
  );
};

export { MyButtonLg };
