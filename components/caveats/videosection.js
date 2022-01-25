import * as React from "react";
import Head from "next/head";
import * as style from "@/styles/videosection.module.css";
import Link from "next/link";

const VideoSection = () => {
  return (
    <div className={style.main}>
      <video
        autoPlay
        muted
        loop
        className={style.video}
        poster="/Thumbnail/ebuddyThumbnail.png"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoSection;
