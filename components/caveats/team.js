import * as React from "react";
import * as style from "@/styles/team.module.css";
import Link from "next/link";
const Team = () => {
  return (
    <div className={style.main}>
      <h2>Support Team</h2>
      <div className={style.profileContainer}>
        <div className={style.profileBox}>
          <div className={style.profileImage}>
            <img src="/Images/profile.png" />
          </div>
          <p>ChainX Back-End & Blockchain Developer</p>
        </div>

        <div className={style.profileBox}>
          <div className={style.profileImage}>
            <img src="/Images/profile.png" />
          </div>
          <p>Website Developer</p>
        </div>

        <div className={style.profileBox}>
          <div className={style.profileImage}>
            <img src="/Images/profile.png" />
          </div>
          <p>NFT Artist</p>
        </div>

        <div className={style.profileBox}>
          <div className={style.profileImage}>
            <img src="/Images/profile.png" />
          </div>
          <p>Graphics</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
