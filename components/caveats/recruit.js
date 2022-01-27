import * as React from "react";
import * as style from "@/styles/recruit.module.css";
import Link from "next/link";
import mechanics from "@/data/GameMechanics.json";
import LazyLoad from "react-lazyload";
import {
  FaTwitter,
  FaFacebookF,
  FaDiscord,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";

const Recruit = () => {
  return (
    <div className={style.main}>
      <div className={style.mainContainer}>
        <LazyLoad height={0}>
          <h2 className={style.contentTitle}>Join The Community</h2>
          <p className={style.text1}>
            Through our Work With Us platform, we are actively working with game
            creators and studios to bring new game offerings to the RPS
            ecosystem <br /> This will enable a diverse suite of playable games
            that interact directly with the play to earn model, for potentially
            infinite available earning strategies.
          </p>
          <p className={style.text1}>
            Some NFT's have a chance to evolve on the basis of replicating other
            Axess Card.
          </p>
          <p className={style.text1}>
            We are actively looking to expand our team; Contact Us, let's help
            each other bring blockchain solutions to the RPS game <br /> -
            inquire below!
          </p>
          <div className={style.buttonContainer}>
            <a href="">
              <h4 className={style.buttonText}>
                <FaTwitter className={style.icon} />
              </h4>
            </a>

            <h4 className={style.buttonText}>
              <FaFacebookF className={style.icon} />
            </h4>
            <h4 className={style.buttonText}>
              <FaDiscord className={style.icon} />
            </h4>
            <h4 className={style.buttonText}>
              <FaInstagram className={style.icon} />
            </h4>
            <h4 className={style.buttonText}>
              <FaPinterestP className={style.icon} />
            </h4>
          </div>
        </LazyLoad>
      </div>
    </div>
  );
};

export default Recruit;
