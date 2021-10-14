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



export default function Home() {



  return (
    <div className={style.main}>
      <Head>
        <title>RCK•ROCK Token - Providing unchartered opportunities with the adoption and utilization of blockchain technologies.</title>
        <meta name="description" content="Providing unchartered opportunities with the adoption and utilization of blockchain technologies."/>
        <meta property="og:type"               content="website" />
        <meta property="og:title"              content="Providing unchartered opportunities with the adoption and utilization of blockchain technologies." />
        <meta property="og:description"        content="Developing a compelling ventures for RCK Token users that harness blockchain technology that touches gaming, NFT, marketing and DeFi and other social applications." />
        <meta property="og:image"              content='./Thumbnail/thumbnail.jpg' />
      </Head>
      <ScrollButton/>
      <Head>
        <title>RCK Rock Ventures</title>
      </Head>
      <div className={`${style.section} ${style.section1}`}>

        <HeadV2/>
        
        <div className={`${style.mainBody} ${style.mainBody1}`}>
            <div className={`${style.bodyImage} ${style.bodyImage1}`}>
              <img src='/Images/homepage/left-banner.png'  alt="Token"  className={`${style.image} ${style.imagebanner}`} />
            </div>

            <div className={`${style.bodyContent} ${style.bodyContent1}`}>
              <h1 className={style.titleBody}>PLAY TO EARN</h1>
              <img src='/Images/homepage/game.png'  alt="Token"  className={`${style.image} ${style.image1}`} />
              <p className={style.textBody}>Play the simplest Play to Earn Game.<br/> Powered by Blockchain Technology.<br/> Get Your Axess Card Now!</p>

              <Link href='/Files/RCK Whitepaper.pdf'>
                <div  className={`${style.buttonBox} ${style.buttonBox1}`} >
                  <h4 className={style.h4animate}>Get Started </h4>
                </div>
              </Link>

              <img src='/Images/homepage/versus.png'  alt="Token"  className={`${style.image} ${style.imagemiddlebanner}`} />

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
                <h1 className={style.titleBody2}>About RCK (ROCK TOKEN)</h1>
                <p className={style.textBody2}>A Rock is connotes formidability and stability that is the bedrock of mountains or temple.</p>
                <p className={style.textBody2}>This is the spirit behind the Rock Token.</p>
                <p className={style.textBody2}>Rock refer to the overall eco-system with initiatives called “projects” exclusively using ROCK Token or RCK Token.</p>
                  <Link href='/v1'>
                    <div  className={`${style.buttonBox} ${style.buttonBox2}`} >
                      <h4 className={style.h4animate}>Read Documentation</h4><MdArrowForward   className={style.icon}/>
                    </div>
                  </Link>
              </div>
              
              <div className={style.documentContainer}>
                <div className={style.documentBox}>
                    <h1 className={style.titleBody2}>How It Works?</h1>
                    <p className={style.textBody2}>Blockchain is a peer-to-peer computer process used to secure and verify RCK transactions—payments from one user to another on a decentralized network.</p>
                    <div  className={style.buttonContainer} >
                      <Link href='/v1'>
                        <div  className={`${style.buttonBox} ${style.buttonBox2}`} >
                          <h4 className={style.h4animate}>Let's Start</h4><MdArrowForward   className={style.icon}/>
                        </div>
                      </Link>
                    </div>

                </div>
                
                <div className={style.documentBox}>
                   
                    <h1 className={style.titleBody2}>  <MdCloudUpload className={style.symbol} style={{color:'#001f47'}}/> Download a Wallet </h1>
                    <p className={style.textBody2}>RCK Token is received, stored, and sent using software known as a Binance Smart Chain Wallet and MetaMask. Download the official Binance Smart Chain Wallet and MetaMask for free.</p>
                    <br/>
                   
                    <h1 className={style.titleBody2}>  <MdShoppingCart className={style.symbol} style={{color:'#001f47'}}/> Buy & Sell</h1>
                    <p className={style.textBody2}>RCK Token works with exchange partners all around the world to make buying cryptocurrencies in your wallet both a seamless and secure experience.</p>
                </div>

                <div className={style.documentBox}>
                    
                    <h1 className={style.titleBody2}> <MdLock className={style.symbol} style={{color:'#001f47'}}/>Safe & Secure</h1>
                    <p className={style.textBody2}>We take careful measures to ensure that your RCK Token is as safe as possible. Offline storage provides an important security measure against theft or loss.</p>
                    <br/>
                    <h1 className={style.titleBody2}> <MdVideogameAsset className={style.symbol} style={{color:'#001f47'}}/> Play To Earn</h1>
                    <p className={style.textBody2}>RCK Token has projects most other tokens don't have. But if you don't play, you can earn through several other ways on top of RCK Token projects.</p>
                </div>
              </div>

              
          </div>
          </LazyLoad>
      </div>

      {/* <LazyLoad height={100}>
        <Countdown/>
      </LazyLoad> */}

      <div className={`${style.section} ${style.section3}`}>
        <LazyLoad height={100}>
          <div className={`${style.mainBody} ${style.mainBody3}`}>

              <div className={style.bodyContent3}>
                <h1 className={style.titleBody3}>Tokenomics</h1>
                <img src='/Images/Tokenomics.jpg' alt="Tokenomics"  className={style.tokenomiksImage}  />
              </div>

              <div className={style.bodyContent3}>
                <h1 className={style.titleBody3}>Initial Funds And Use</h1>
                <img src='/Images/FundsandUse.jpg' alt="Initial Funds And Use"  className={style.tokenomiksImage}  />
              </div>

          </div>
        </LazyLoad>
      </div>
      
      <Events/>
      <FootV1/>
      
    </div>
  )
}
