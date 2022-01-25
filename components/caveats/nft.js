import * as React from "react";
import * as style from "@/styles/nft.module.css";
import Link from "next/link";
import mechanics from "@/data/GameMechanics.json";
import LazyLoad from "react-lazyload";

const NFT = () => {
  return (
    <div className={style.main}>
      <div className={style.mainContainer}>
        <div className={style.contentContainer}>
          <LazyLoad height={0}>
            <h2 className={style.contentTitle}>NFT AXESS CARD</h2>
            <p className={style.text1}>
              Buy now RPS Axess Card and Activate It, Get the chance to unlock
              unique arts with random play count.
            </p>

            <p className={style.text1}>
              Players can interchange a variety of NFT's through a customisable
              player character equip slot mechanism in our first game model.
              Collect multiple various NFT's with cool and unique outfits /
              sets..
            </p>
            <p className={style.text1}>
              Some NFT's have a chance to be replicated and can be activated as
              an Axess Card to play.
            </p>
            <p className={style.text1}>
              Use your claimed points for the chance of replicating your NFT
              Axess Card; and visually obtain new NFT Axess Card.
            </p>
            <div className={style.buttonContainer}>
              <h4 className={style.buttonText}>BUY AXESS CARD </h4>
            </div>
          </LazyLoad>
        </div>

        <div className={style.imageContainer}>
          <LazyLoad height={0}>
            <div className={style.imageBox}>
              <img src={`/Images/axesscard.png`} className={style.image} />
            </div>
          </LazyLoad>
        </div>
      </div>
    </div>
  );
};

export default NFT;
