/* eslint-disable @next/next/link-passhref */
import React from 'react'
import Head from 'next/head'
import * as style from '@/styles/document.module.css'
import FootV1 from '@/components/footer/footv1';
import Link from 'next/link'
import HeadV2 from '@/components/header/headv2'
import NavigationV2 from '@/components/navigation/navigationv2';
import LinksButton from '@/components/caveats/links';

export default function Disclaimer() {
  

  return (
    <div className={style.main}>
      <Head>
        <title>RCK - Setup Crypto Wallet</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <HeadV2 title={"Documentation"} root={"/v1"}/>
      <div className={style.titleContainer}>
        <h2 className={style.titleText} >Setup Crypto Wallet</h2>
      </div>
      <div className={style.container}>
        <NavigationV2/>

        

        <div className={style.contentBox}>
          <h2 className={style.boldText}>
            Working In Progress
          </h2>


          <div className={style.previewContainer}>
            
            <Link href="/v1/gamemechanics">
              <div className={style.previewBox}>
                <h4 className={style.buttonText}>RPS Game Mechanics</h4> 
              </div>
            </Link>
              
            <Link href="/v1/tokenomiks">
              <div className={style.previewBox}>
                <h4 className={style.buttonText}>Tokenomics</h4> 
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
