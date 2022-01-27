import * as React from "react";
import Head from "next/head";
import * as style from "@/styles/headv1.module.css";
import Link from "next/link";
import { MdKeyboardArrowDown, MdMenu } from "react-icons/md";

const HeadV1 = ({ pos, open, setOpen, title, root }) => {
  const [option1, setOption1] = React.useState(false);
  const [option2, setOption2] = React.useState(false);
  const [option3, setOption3] = React.useState(false);
  const [option4, setOption4] = React.useState(false);

  const closeAllOptions = () => {
    setOption1(false);
    setOption2(false);
    setOption3(false);
    setOption4(false);
  };

  React.useEffect(() => {
    closeAllOptions();
  }, [pos]);

  return (
    <div className={pos === "top" ? style.main : style.off}>
      <div className={pos === "top" ? style.navbar : style.navbarFixed}>
        <div className={style.navbar1}>
          <div className={style.tinylogoToken}>
            <a href="/">
              <img
                src="/Logo/rps-small.png"
                alt="logo"
                className={style.logo}
              />
            </a>
          </div>
        </div>

        <div className={style.navbar2}>
          <div className={style.buttonBox}>
            <h4 className={style.h4animate}>Home</h4>
          </div>

          <div
            className={style.buttonBox}
            onClick={() => {
              setOption3(!option3);
              setOption1(false);
              setOption2(false);
              setOption4(false);
            }}
          >
            <h4 className={style.h4animate}>Buy/Trade</h4>
            <MdKeyboardArrowDown style={{ color: "#fff" }} />
            <div className={option3 ? style.optionOpen : style.optionClose}>
              <Link href="/v1/setupcryptowallet">
                <h5 className={style.h5animate}>• How to Buy?</h5>
              </Link>
              <Link href="/v1/process">
                <h5 className={style.h5animate}>• How to Trade?</h5>
              </Link>
              <Link href="/v1/setupcryptowallet/metamask">
                <h5 className={style.h5animate}>• Download MetaMask</h5>
              </Link>
              <Link href="/v1/setupcryptowallet/binance">
                <h5 className={style.h5animate}>• Download BSC Wallet</h5>
              </Link>
            </div>
          </div>

          <div
            className={style.buttonBox}
            onClick={() => {
              setOption4(!option4);
              setOption1(false);
              setOption2(false);
              setOption3(false);
            }}
          >
            <h4 className={style.h4animate}>Play 2 Earn</h4>
            <MdKeyboardArrowDown style={{ color: "#fff" }} />
            <div className={option4 ? style.optionOpen : style.optionClose}>
              <Link href="https://hub.rpsaxess.io/">
                <h5 className={style.h5animate}>• RPSAXESS.IO</h5>
              </Link>
              <Link href="/v1/rckventures/rpsnftgame">
                <h5 className={style.h5animate}>• The RPS NFT GAME</h5>
              </Link>
              <Link href="/v1/rckventures/gamemechanics">
                <h5 className={style.h5animate}>• Game Mechanics</h5>
              </Link>
              <Link href="/v1/rckventures/rpsnftgame">
                <h5 className={style.h5animate}>• RPS AXESS Card</h5>
              </Link>
            </div>
          </div>

          <div
            className={style.buttonBox}
            onClick={() => {
              setOption1(!option1);
              setOption3(false);
              setOption2(false);
              setOption4(false);
            }}
          >
            <h4 className={style.h4animate}>Technology</h4>
            <MdKeyboardArrowDown style={{ color: "#fff" }} />
            <div className={option1 ? style.optionOpen : style.optionClose}>
              <Link href="/v1/abstractandbackdrop">
                <h5 className={style.h5animate}>• Blockchain</h5>
              </Link>
              <Link href="/v1/abstractandbackdrop#cryptocurrency">
                <h5 className={style.h5animate}>• Cryptocurrency</h5>
              </Link>
              <Link href="/v1/abstractandbackdrop#nft">
                <h5 className={style.h5animate}>• NFT</h5>
              </Link>
            </div>
          </div>
        </div>

        <div
          className={style.navbar3}
          onClick={() => {
            setOpen(!open);
          }}
        >
          <MdMenu className={style.menuIcon} />
        </div>
      </div>
    </div>
  );
};

export default HeadV1;
