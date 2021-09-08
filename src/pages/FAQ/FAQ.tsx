import React from "react";
import { data } from "./data";
import "./FAQ.css";

const FAQ: React.FC = () => {
  return (
    <div className="faq">
      <h1>FAQ</h1>
      {data.map((item, index) => (
        <div key={index}>
          <h3>{item.title}</h3>
          <p>{item.paragraph}</p>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
