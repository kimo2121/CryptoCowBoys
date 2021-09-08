import React from "react";
import "./ourTeam.css";
import TeamMember from "./TeamMember";
import lucas from "../../assets/images/lucas.png";
import vladimir from "../../assets/images/vladimir.png";
import ekaterina from "../../assets/images/ekaterina.png";
import saurabh from "../../assets/images/saurabh.png";

const OurTeam: React.FC = () => {
  return (
    <div id="our-team-members" className="our-team">
      <h1>Our Team</h1>
      <div>
        <TeamMember
          className="each-member"
          name={"Lucas"}
          img={lucas}
          role={"MARKETER"}
        >
          6 years in social media marketing and community management. He’s been
          involved in crypto since 2017.
        </TeamMember>
        <TeamMember
          className="each-member"
          name={"Vladimir"}
          img={vladimir}
          role={"DESIGNER"}
        >
          Excellent web designer. He has a passion for creating inspiring and
          influential designs.
        </TeamMember>
        <TeamMember
          className="each-member"
          name={"Ekaterina"}
          img={ekaterina}
          role={"ARTIST"}
        >
          Fashion designer and obsessed with NFTs. Came out of the closet in
          2018.
        </TeamMember>
        <TeamMember
          className="each-member"
          name={"Saurabh"}
          img={saurabh}
          role={"DEV"}
        >
          Expert in solidity and got REKT hard in the last bull market. He knows
          cryptography, but doesn’t know cryptocurrency.
        </TeamMember>
      </div>
    </div>
  );
};

export default OurTeam;
