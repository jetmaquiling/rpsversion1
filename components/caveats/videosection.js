import * as React from "react";
import Head from "next/head";
import * as style from "@/styles/videosection.module.css";
import Link from "next/link";

const VideoSection = () => {
  const [cover1, setCover1] = React.useState(false);
  const [cover2, setCover2] = React.useState(false);
  const [cover3, setCover3] = React.useState(false);

  return (
    <div className={style.main}>
      <div
        className={style.videoBox}
        onClick={() => {
          setCover1(true);
        }}
        onMouseEnter={() => {
          setCover1(true);
        }}
        onMouseLeave={() => {
          setCover1(false);
        }}
      >
        <div className={style.videoContainer}>
          <img
            src="/Images/cover/Slide1.jpg"
            className={cover1 ? style.coverUp : style.coverDown}
          />
          <iframe
            src="https://drive.google.com/file/d/1gY-sCHNCOfba7_2HM_xBDGEX6v1OLEtn/preview"
            className={style.video}
            allow="autoplay"
            poster="/Thumbnail/ebuddyThumbnail.png"
          ></iframe>
        </div>
      </div>

      <div
        className={style.videoBox}
        onClick={() => {
          setCover2(true);
        }}
        onMouseEnter={() => {
          setCover2(true);
        }}
        onMouseLeave={() => {
          setCover2(false);
        }}
      >
        <div className={style.videoContainer}>
          <img
            src="/Images/cover/Slide2.jpg"
            className={cover2 ? style.coverUp : style.coverDown}
          />
          <iframe
            src="https://drive.google.com/file/d/1-BZOrXUzgN0XKQIVB8nBBMeHoKFX87kE/preview"
            className={style.video}
            allow="autoplay"
            poster="/Thumbnail/ebuddyThumbnail.png"
          ></iframe>
        </div>
      </div>

      <div
        className={style.videoBox}
        onClick={() => {
          setCover3(true);
        }}
        onMouseEnter={() => {
          setCover3(true);
        }}
        onMouseLeave={() => {
          setCover3(false);
        }}
      >
        <div className={style.videoContainer}>
          <img
            src="/Images/cover/Slide3.jpg"
            className={cover3 ? style.coverUp : style.coverDown}
          />
          <iframe
            src="https://drive.google.com/file/d/11ebJHkt6-VuQpKNpproJOJmXBUa4mb5Z/preview"
            className={style.video}
            allow="autoplay"
            poster="/Thumbnail/ebuddyThumbnail.png"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
