import React from "react";
import "../assets/home.scss";
import HeroLogo from "../assets/images/hero-logo.png";
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

  const renderTokenInfo = () => {
    const infos = [
      {
        title: "ECOSYSTEM",
        description: `SHIH TZU is an experiment in decentralized spontaneous community building. SHIH token is one of first token that allows users to hold Billions or even Trillions of them.  Nicknamed the SHIBA Inu KILLER, this ERC-20 ONLY token can remain well under a penny and still outpace Dogecoin and SHIB in a small amount of time (relatively speaking).   

     We locked the 50% of the total supply to Uniswap. 
     The remaining 50% was burned to Vitalik Buterin and we are one of the first project following this path, so everyone has to buy on the open market, ensuring a fair and complete distribution where devs don't own team tokens they can dump on the community.`,
      },
      {
        title: "COMMUNITY",
        description:
          "SHIH is an experiment in decentralized community driven. No founders, no team tokens. This groups purpose is to allocate skills within the community to appropriate roles in Shih Tzu development and collectively agree on decisions for SHIH future.",
      },
      {
        title: "MEME-Based",
        description:
          "Like crypto, memes were born on the internet and have journeyed from the fringes to the mainstream. They’re used to drive adoption of cryptocurrency, signal bullishness or bearishness on certain assets or coins by traders and even boost the value of tokens.",
      },
    ];

    return (
      <div id="TokenInfo">
        <div className="container">
          {infos.map(({ title, description }) => {
            return (
              <div className="info-container">
                <div className="info-title">{title}</div>
                <div className="info-description">{description}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderTokenMetrics = () => {
    const metrics = [
      {
        title: "TOTAL SUPPLY",
        subHeading: "1,000,000,000 SHIH",
        lastHeading: "",
      },

      {
        title: "50% of Total Supply",
        subHeading: "Vitalik Buterin's Wallet",
        lastHeading:
          "50% of the supply was sent to Vitalik Buterin’s wallet, that Equal to burn",
      },

      {
        title: "50% of the Supply",
        subHeading: "Locked in Uniswap Pool",
        lastHeading: "We locked 50% of the total supply to the Uniswap Pool",
      },
    ];

    return (
      <div id="TokenMetrics">
        <div className="token-metrics-container">
          <div className="title">TOKENMETRICS</div>
          {renderWhiteLineSeparator()}
          <div className="token-metrics-row">
            {metrics.map(({ title, subHeading, lastHeading }) => {
              return (
                <div className="container">
                  <div className="title">{title}</div>
                  <div className="subHeading">{subHeading}</div>
                  <div className="lastHeading">{lastHeading}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  const renderWhereToBuy = () => {
    return (
      <div id="WhereToBuy">
        <div className="where-to-buy-title">WHERE TO BUY</div>
        <div className="exchange-container">
          <img
            src="https://static.wixstatic.com/media/60e4d6_067c4063696340e3b906b4874027646a~mv2.png/v1/fill/w_375,h_95,al_c,q_85,usm_0.66_1.00_0.01/uniswap.webp"
            alt=""
          />
          <img
            src="https://static.wixstatic.com/media/60e4d6_440b972f0ba6437ebfa7602baef84ae8~mv2.png/v1/fill/w_225,h_110,al_c,q_85,usm_0.66_1.00_0.01/1inch.webp"
            alt=""
          />
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

  const renderSocialMedia = () => {
    const socialMediLinks = [
      {
        imageUrl:
          "https://static.wixstatic.com/media/60e4d6_427c8c0408434415b14fbc4acbb263a4~mv2.png/v1/crop/x_702,y_0,w_2455,h_2400/fill/w_70,h_70,al_c,q_85,usm_0.66_1.00_0.01/telegram.webp",
        link: "telegram.com",
      },
      {
        imageUrl:
          "https://static.wixstatic.com/media/60e4d6_71b2fdffe46644d0b607527c2221af27~mv2.jpeg/v1/fill/w_65,h_65,al_c,q_80,usm_0.66_1.00_0.01/tik-tok.webp",
        link: "tiktok.com",
      },
      {
        imageUrl:
          "https://static.wixstatic.com/media/60e4d6_f3ddad7a9d9346f9afe8c1c31aba743f~mv2.png/v1/crop/x_610,y_0,w_2619,h_2160/fill/w_81,h_65,al_c,q_85,usm_0.66_1.00_0.01/Twitter-Symbol.webp",
        link: "twitter.com",
      },

      {
        imageUrl:
          "https://static.wixstatic.com/media/60e4d6_d91d13b9b303471b834d207ab384f907~mv2.png/v1/fill/w_65,h_65,al_c,q_85,usm_0.66_1.00_0.01/med.webp",
        link: "medium.com",
      },
      {
        imageUrl:
          "https://static.wixstatic.com/media/60e4d6_314a7bc3f7684d89ac350a174a4f461c~mv2.png/v1/fill/w_65,h_65,al_c,q_85,usm_0.66_1.00_0.01/ig.webp",
        link: "instagram.com",
      },
    ];
    return (
      <div id="SocialMedia">
        <div className="social-media-title">SOCIAL MEDIA</div>
        <div className="social-media-message">
          Please join our social platforms to get updates using the links below.
        </div>
        <div className="social-media-row-container">
          <div className="social-media-row">
            {socialMediLinks.map(({ imageUrl, link }) => {
              return (
                <div className="social-media-icon">
                  <img src={imageUrl} alt="" />
                </div>
              );
            })}
          </div>
          <div className="social-media-message">Email: admin@pugtoken.io</div>
          <div className="developer-tag">Developed by Pug Token Team 2021</div>
          <div className="doggos">
            <img
              src="https://static.wixstatic.com/media/60e4d6_5354d894b04b4157a7a70d85106fcce8~mv2.png/v1/crop/x_0,y_91,w_600,h_128/fill/w_600,h_129,al_c,lg_1,q_85/dreamstime_l_139719331.webp"
              alt=""
            />
          </div>
        </div>
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
      {renderTokenInfo()}
      {renderWhiteLineSeparator()}
      {renderTokenMetrics()}
      {renderWhereToBuy()}
      {renderWhiteLineSeparator()}
      {renderSocialMedia()}
    </div>
  );
}
