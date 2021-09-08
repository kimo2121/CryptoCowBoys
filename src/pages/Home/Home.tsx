import React from "react";
import Mint from "../../components/Mint/Mint";
import TitleAndImage from "../../components/TitleAndImage/TitleAndImage";
import image1 from "../../assets/images/image1.jpg";
import image2 from "../../assets/images/image2.jpg";
import Gif from "../../assets/images/Gif.gif";
import "./home.css";
import Percentages from "../../components/Percentages/Percentages";
import tesla from "../../assets/images/tesla-image.png";
import OurTeam from "../../components/OurTeam/OurTeam";
const Home: React.FC = () => {
  return (
    <div className="home">
      <Mint />
      <TitleAndImage
        img={image1}
        className={"first-iamge-title"}
        header={"What are Crypto Cowboys?"}
      >
        Crypto Cowboys are the first collection for those who got REKT in
        crypto. 11,111 Cowboys are randomly generated and stored as an ERC-721
        token on the Ethereum blockchain. All Ghosts will be minted on opensea
        for a fixed price of 0.04 ETH + gas.
      </TitleAndImage>
      <TitleAndImage
        img={image2}
        className={"second-iamge-title"}
        header={"The story of Crypto Cowboys"}
        paragraph={"WHO WANTS A MOONCAR?"}
      >
        The crypto world isn’t always a nice and safe place. Every day people
        are getting REKT by shitcoins, scams, hacks, rug pulls and leverage
        trading. These people then turn into various outlaws wandering the wild
        west that is the crypto world. And you may be one of them. The main
        utility idea of Crypto Cowboys is to help people especially new comers
        better understand the risk in the crypto world and stay safe.
      </TitleAndImage>
      <TitleAndImage
        img={Gif}
        className={"third-iamge-title"}
        header={"Roadmap"}
        id="road-map"
      >
        As we meet the following milestones for our launch, we will release new
        updates on each of the corresponding goals! Each milestone refers to the
        percentage of total NFTs sold. (Out of 11,111, among which 111 Ghosts
        are reserved for minting giveaways and marketing.)
      </TitleAndImage>
      <Percentages
        className={"percent-10"}
        percent={"10%"}
        title={"Giveaway Time"}
      >
        Every 1000 primary sales, <span>10 random Ghost NFT</span> owners will
        be picked and each will get a Ghost for free!
      </Percentages>
      <Percentages className={"percent-10"} percent={"25%"} title={"Donation"}>
        2.5% of all primary sales will be donated to sales,
        <span>homeless charity.</span>
      </Percentages>
      <Percentages
        className={"percent-10"}
        percent={"50%"}
        title={"The Ghosts Fund"}
      >
        The CryptoCowb will be used to offer aid to those who suffer severe
        financial loss in crypto!
        <span> 10% of all primary sales to be allocated to the Fund.</span>
      </Percentages>
      <Percentages
        className={"percent-10"}
        percent={"50%"}
        title={"The Ghosts Store"}
      >
        The
        <span> unique Ghost Merch Store </span>
        will be launched, featuring limited edition T-shirts, caps and other
        accessories!
      </Percentages>
      <Percentages
        className={"percent-10 last-percent"}
        percent={"100%"}
        title={"The Ghosts Store"}
      >
        When all 10,000 Ghosts are sold out, a random Ghost NFT owner will win a
        <span> Tesla Model Y. </span>The more NFT owned, the bigger the chance.
      </Percentages>
      <img className="tesla-car" src={tesla} alt="" />
      <OurTeam />
      <div className="discord-url">
        <p>THE HAUNTED NIGHT IS ABOUT TO START!</p>
        <a href="https://discord.com/invite/DWZ96Uf2" className="discord-link">
          JOIN DISCORD
        </a>
      </div>
    </div>
  );
};

export default Home;
