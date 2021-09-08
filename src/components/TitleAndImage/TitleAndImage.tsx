import React, { useEffect, useState } from "react";
import "./TitleAndImage.css";
import { ImageTitleType } from "./types";

const TitleAndImage: React.FC<ImageTitleType> = ({
  className,
  img,
  children,
  header,
  paragraph,
  id,
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const setFromEvent = (e: any) => {
      // let rect = e.target.getBoundingClientRect();
      setPosition({
        x: e.screenX - window.innerWidth / 2,
        y: e.screenY - window.innerHeight / 2,
      });
      // console.log(rect);
    };
    window.addEventListener("mousemove", setFromEvent);

    return () => {
      window.removeEventListener("mousemove", setFromEvent);
    };
  }, []);

  const useStyles = {
    transform:
      `translateX(${position.x / 100}px)translateY( ${position.y / 100}px)` +
      `rotateX(${position.x / 80}deg)` +
      `rotateY(${position.y / 80}deg)`,
  };

  return (
    <div id={id} className={`${className}`}>
      <h1>{header}</h1>
      <p>{children}</p>
      <img style={useStyles} src={img} alt="" />
      <p>{paragraph}</p>
    </div>
  );
};

export default TitleAndImage;
