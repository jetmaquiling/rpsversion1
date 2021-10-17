/* eslint-disable @next/next/link-passhref */
import React from 'react'
import Head from 'next/head'
import * as style from './home.module.css'
import FootV1 from '@/components/footer/footv1';
import Link from 'next/link'
import HeadV2 from '@/components/header/headv2'
import Events from './../components/caveats/events';
import Countdown from '@/components/caveats/countdown'
import LazyLoad from 'react-lazyload';

import { MdArrowForward,MdCloudUpload,MdShoppingCart,MdLock,MdVideogameAsset, MdKeyboardArrowUp} from "react-icons/md";
import ScrollButton from '@/components/buttons/scroll';
import GameMechanics from '@/components/caveats/gamemechanics';



export default function Home() {



  return (
    <div className={style.main}>
      <Head>
        <title>RPS - Play To Earn - Play the simplest Play to Earn Game. Powered by Blockchain Technology. Get Your Axess Card Now!</title>
        <meta name="description" content="Providing unchartered opportunities with the adoption and utilization of blockchain technologies."/>
        <meta property="og:type"               content="website" />
        <meta property="og:title"              content="RPS - Play To Earn Blockchain Game" />
        <meta property="og:description"        content="Play the simplest Play to Earn Game. Powered by Blockchain Technology. Get Your Axess Card Now!" />
        <meta property="og:image"              content='./Thumbnail/rps.JPG' />
      </Head>
      <ScrollButton/>
      <div className={`${style.section} ${style.section1}`}>

        <HeadV2/>
        
        <div className={`${style.mainBody} ${style.mainBody1}`}>
            <div className={`${style.bodyImage} ${style.bodyImage1}`}>
              <img src='/Images/homepage/left-banner.png'  alt="Token"  className={`${style.image} ${style.imagebanner}`} />
            </div>

            <div className={`${style.bodyContent} ${style.bodyContent1}`}>
              <img src='/Images/homepage/game.png'  alt="Token"  className={`${style.image} ${style.image1}`} />
              <h1 className={style.titleBody}>PLAY TO EARN</h1>
              <p className={style.textBody}>Play the simplest Play to Earn Game.<br/> Powered by Blockchain Technology.<br/> Get Your Axess Card Now!</p>

              <Link href='/Files/RCK Whitepaper.pdf'>
                <div  className={`${style.buttonBox} ${style.buttonBox1}`} >
                  <h4 className={style.h4animate}>Get Started </h4>
                </div>
              </Link>
              <img src='/Images/homepage/versus.png'  alt="Token"  className={`${style.image} ${style.imagemiddlebanner}`} />
              <div  className={style.mobileImage}>
                <img src='/Images/homepage/left-banner.png'  alt="Token"  className={`${style.image} ${style.mobileImageItem}`} />
                <img src='/Images/homepage/versus.png'  alt="Token"  className={`${style.image} ${style.mobileImageItem}`} />
                <img src='/Images/homepage/right-banner.png'  alt="Token"  className={`${style.image} ${style.mobileImageItem}`} />
              </div>
            </div>

            <div className={`${style.bodyImage} ${style.bodyImage1}`}>
              <img src='/Images/homepage/right-banner.png'  alt="Token"  className={`${style.image} ${style.imagebanner}`} />
            </div>
        </div>
        
      </div>
      
      
      <div className={`${style.section} ${style.section2}`}>
      <LazyLoad height={100}>
          <div className={`${style.mainBody} ${style.mainBody2}`}>
          
              <div className={`${style.bodyContent} ${style.bodyContent2}`}>
                <h1 className={style.titleBody2}>INTRODUCTION</h1>
                <p className={style.textBody2}>ROCK-PAPER-SCISSORS — The most universal and simplest game known to everyone dating back as far as 206 BC. We believe that a recognizable, easy, low cost and engaging game would be strategic intro to the blockchain world. </p>
                <p className={style.textBody2}>RPS Platform — The most simplest Play To Earn Ecosystem, built on Binance Smart Chain. Incorporation Gaming, NFTs and DeFi together into exciting, diverse, and rewarding opportunities.</p>

                <p className={style.textBody2}>RPS Game will be tied directly to the BAS token and NFT reward marketplace, allowing infinite strategies for users, players, and investors to earn.</p>

                <p className={style.textBody2}>The RPS Model will revolutionize the blockchain gaming space and what people
                can do with their cryptocurrency forever.</p>

                  <Link href='/v1'>
                    <div  className={`${style.buttonBox} ${style.buttonBox2}`} >
                      <h4 className={style.h4animate}>Learn more</h4>
                    </div>
                  </Link>
              </div>

              
          </div>
          </LazyLoad>
      </div>
      <GameMechanics/>
      {/* <LazyLoad height={100}>
        <Countdown/>
      </LazyLoad> */}
      
      <FootV1/>
      
    </div>
  )
}
