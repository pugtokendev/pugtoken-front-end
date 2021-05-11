import React from "react";
import "../assets/home.scss";
import HeroLogo from "../assets/images/hero-logo.png";
import ToTheMoon from "../assets/images/to-the-moon.png";
import PugOnMoon from "../assets/images/pug-on-moon.png";

export default function Home() {
  const renderNavBar = () => {
    return (
      <div id="NavBar">
        <li>
          <div className="col">
            <img src={HeroLogo} />
          </div>
          <div className="col pug-token-text">Pug Token</div>
        </li>
        <li>Home</li>
        <li>Ecosystem</li>
        <li>Tokenmetrics</li>
        <li>Community</li>
        <li className="white-paper-text">WHITEPAPER</li>
      </div>
    );
  };

  const renderContentHeader = () => {
    return (
      <div id="ContentHeader">
        <div className="col">
          <div className="row">
            <div className="row">SHIH TZU(SHIH) シーズー</div>
            <div className="row">Decentralized Meme Token</div>
          </div>
        </div>
        <img src={PugOnMoon} className="pug-on-moon" />
      </div>
    );
  };

  const renderActionButtons = () => {
    return (
      <div id="ActionButtons">
        <div className="row">
          <button className="buy-now">BUY UNISWAP</button>
          <button className="dex-tool">DEXTOOL</button>
        </div>
      </div>
    );
  };

  const renderShoutOut = () => {
    return (
      <div id="ShoutOut">
        <div className="col">Powered by</div>
        <img
          className="shoutout-image"
          src="https://scontent.fceb2-1.fna.fbcdn.net/v/t1.15752-9/184580019_1713613812159725_7958705107471564542_n.png?_nc_cat=101&ccb=1-3&_nc_sid=ae9488&_nc_eui2=AeGCnC_3ZEWpA4rQcuxXf99uUaSqaS94DDFRpKppL3gMMd441ckVMqR2A7ap_koKn_ihoLfJ06dRdk2XzcDll9at&_nc_ohc=_p-z6Gg7ZykAX8uIgZp&_nc_ht=scontent.fceb2-1.fna&oh=9949df9353c518dc8af6346fc8326247&oe=60C02DD6"
        />
      </div>
    );
  };

  const renderUseCase = () => {
    return (
      <div id="UseCase">
        <div className="header">
          <div className="row">Meme + NFT</div>
          <div className="row use-case">Use Case</div>
          <div className="use-case-definition-row">
            <div className="number">1</div>
            <div className="col">
              SHIH TZU project is a meme based that has determined to pursue NFT
              artwork focused based on animal lover artist and advocate of
              animal rights including supporting animal shelter and animal with
              disability shelter.
            </div>
          </div>
          <div className="use-case-definition-row">
            <div className="number">2</div>
            <div className="col">
              We are the next NEXT GENERATION of ANIMAL LOVERS NFT COLLECTIBLES!
              THOSE WHO CARED FOR ANIMAL WITH DISABILITY AND ANIMAL SHELTERS!
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderNFT = () => {
    const nftArt = [
      {
        title: "s",
      },
      {
        title: "s",
      },
      {
        title: "s",
      },
      {
        title: "s",
      },
      {
        title: "s",
      },
      {
        title: "s",
      },
    ];

    return (
      <div id="NftCollection">
        <div className="row">
          <div className="col collections">
            {/* /**
    SEPARATED DOGS in LINE :: COLLECTIONS
     */}
            {nftArt.slice(0, 4).map((art) => {
              return <div className="nft-item"></div>;
            })}
          </div>
          <div className="col">
            <div className="nft-item"></div>
          </div>
        </div>
      </div>
    );
  };

  const renderInspiration = () => {
    const inspiration = [
      {
        name: "SHIBA INU",
        image:
          "https://static.wixstatic.com/media/60e4d6_c56f420039dc4c72a9c5816518d26242~mv2.png/v1/fill/w_106,h_105,al_c,q_85,usm_0.66_1.00_0.01/shiba.webp",
      },
      {
        name: "AKITA INU",
        image:
          "https://static.wixstatic.com/media/60e4d6_604638b2bd0e4d878c04e351131ae92c~mv2.png/v1/fill/w_136,h_135,al_c,q_85,usm_0.66_1.00_0.01/akita.webp",
      },
      {
        name: "Dogecoin",
        image:
          "https://static.wixstatic.com/media/60e4d6_5f4dc36bad4e4dc6bfef47047bb8ad51~mv2.png/v1/fill/w_260,h_170,al_c,q_85,usm_0.66_1.00_0.01/dogee_edited.webp",
      },
    ];
    return (
      <div id="Inspiration">
        <div className="title-row">Inspired by</div>
        <br />
        <div className="title-row">SHIBA, AKITA and Dogecoin</div>
        <br />
        <div className="inspiration-row">
          {inspiration.map(({ image, name }) => {
            return (
              <div className="inpiration-item">
                <div
                  className="image-container"
                  style={{
                    backgroundImage: `url(${image})`,
                  }}
                ></div>
                <div className="token-name">{name}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderWhiteLineSeparator = () => {
    return (
      <div>
        <hr className="white-line-separator" /> .
      </div>
    );
  };

  return (
    <div>
      {renderNavBar()}
      {renderContentHeader()}
      {renderActionButtons()}
      {renderShoutOut()}
      {renderWhiteLineSeparator()}
      {renderUseCase()}
      {renderWhiteLineSeparator()}
      {renderNFT()}
      {renderWhiteLineSeparator()}
      {renderInspiration()}
      {renderWhiteLineSeparator()}
    </div>
  );
}
