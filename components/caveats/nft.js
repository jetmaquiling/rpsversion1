import * as React from "react"
import * as style from "@/styles/nft.module.css"
import Link from "next/link"
import mechanics from '@/data/GameMechanics.json'
import LazyLoad from 'react-lazyload';

const NFT = () => {
 

  return (
    <div className={style.main}>
        <div className={style.mainContainer}>

                <div className={style.contentContainer}>
                    <LazyLoad height={0}>
                        <h2 className={style.contentTitle}>NFT AXESS CARD</h2>  
                        <p className={style.text1}>Open lootboxes and receive the most innovative NFT's in the crypto space.</p>
                        <p className={style.text1}>BAS NFT's will provide people with a number of use-cases as individual pieces;
                            from APR returns on farming, to game advantages that ultimately provide utility to earn faster. 
                            These NFT's will be utilised across all of the various game modes and new models,
                            providing an enormous amount of utility to earn in a variety of ways.</p>
                        <p className={style.text1}>Players can interchange a variety of NFT's through a customisable player character   equip slot mechanism in our first game model. Collect various NFT's and complete outfits / sets that will award people with a variety of bonus use-cases.</p>
                        <p className={style.text1}>Some NFT's have a chance to evolve on the basis of challenging other players to a battle.</p>
                        <p className={style.text1}>Risk your rewards for the chance of boosting your use-case advantages; and visually upgrade to obtain the first ever VFX / animated 3D NFT's!</p>
                        <h4 className={style.buttonText}>BUY AXESS CARD NOW</h4>
                    </LazyLoad> 
                </div>

                <div className={style.imageContainer}>
                    <LazyLoad height={0}>
                        <div className={style.imageBox}>
                            <img src={`/Images/nftcard.png`} className={style.image}/>
                        </div>
                    </LazyLoad>
                </div>
   
        </div>

    </div>
  )
}

export default NFT;
