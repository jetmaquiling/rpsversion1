/* eslint-disable @next/next/link-passhref */
import React from 'react'
import Head from 'next/head'
import * as style from '@/styles/document.module.css'
import FootV1 from '@/components/footer/footv1'
import Link from 'next/link'
import HeadV2 from '@/components/header/headv2'
import NavigationV2 from '@/components/navigation/navigationv2'
import LinksButton from '@/components/caveats/links'
import ScrollButton from '@/components/buttons/scroll'


export default function Disclaimer() {


  return (
    <div className={style.main}>
      <ScrollButton/>
      <Head>
        <title>Welcome to RCK | Rock Token
        </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeadV2 title={"Documentation"} root={"/v1"} />


      <div className={style.titleContainer}>
        <h1 className={style.titleText}  >titleText</h1>
      </div>

      <div className={style.container}>
        <NavigationV2/>

        

        <div className={style.contentBox}>
          <h2 className={style.titleText}>
            title1Text
          </h2>
          <h2 className={style.title1Text}>
            title1Text
          </h2>
          <h2 className={style.title2Text}>
            title2Text
          </h2>
          <h2 className={style.titleText}>
            titleText
          </h2>
          <h2 className={style.subText}>
            subText
          </h2>
          <p className={style.subText2}>
            subText2
          </p>
          <p className={style.headlineText}>
            headlineText
          </p>

          <p className={style.tabText}>
            tabText
          </p>
          <p className={style.tab2Text}>
            tab2Text
          </p>

          <p className={style.normalText}>
            normalText
          </p>
          <p className={style.boldText}>
            boldtext
          </p>
          <p className={style.buttonText}>
            buttonText
          </p>
          <p className={style.listText}>
            listText
          </p>
         
          <div className={style.imageBox1}>
            <img src="/Images/Binance/Slide1.JPG" className={style.image1}/>
          </div>

          <div className={style.imageBox2}>
            <img src="/Images/Binance/Slide1.JPG" className={style.image1}/>
          </div>
          

          <div className={style.previewContainer}>
            
            <Link href="/v1/gamemechanics">
              <div className={style.previewBox}>
                <h4 className={style.buttonText}>{"< Homepage"}</h4> 
              </div>
            </Link>
              
            <Link href="/v1/rckventures">
              <div className={style.previewBox}>
                <h4 className={style.buttonText}>{"Our Ventures >"}</h4> 
              </div>
            </Link>

          </div>

          <LinksButton/>
          
          
        </div>

      </div>

      <FootV1/>
    </div>
  )
}
