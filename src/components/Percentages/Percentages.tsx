import React from "react";
import "./percentages.css";
import { dataTypes } from "./types";

const Percentages: React.FC<dataTypes> = ({
  className,
  percent,
  title,
  children,
}) => {
  return (
    <div className={className}>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <h1>{percent}</h1>
    </div>
  );
};

export default Percentages;
