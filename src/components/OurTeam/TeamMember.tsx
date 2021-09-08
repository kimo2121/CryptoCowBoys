import React from "react";
import "./ourTeam.css";
import { MemberType } from "./types";

const TeamMember: React.FC<MemberType> = ({
  className,
  summary,
  img,
  name,
  role,
  children,
}) => {
  return (
    <div className={className}>
      <img src={img} alt="" />
      <h2>{name}</h2>
      <p>{role}</p>
      {children}
    </div>
  );
};

export default TeamMember;
