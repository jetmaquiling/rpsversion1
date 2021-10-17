import * as React from "react"
import * as style from "@/styles/gamemechanics.module.css"
import Link from "next/link"

const mechanics = {
    title : "Get Axess Card",
    dir: "/Mechanics/Guide1/",
    images: ["Slide1.JPG","Slide2.JPG","Slide3.JPG","Slide4.JPG"],
    steps: [
        {
            note:'You need to get your hands on the Axess Card (That’s an NFT by the way!). You can only get an Axess Card from the Initial Launch or the RPS marketplace. In both places, you would need to buy using our RCK Token.',
            trigger: 0
        },
        {
            note: 'Activate Axess Card',
            trigger: 1
        },  
        {
            note: 'Each Axess Card will generate a random Play Count - certain allowable number of plays that refreshes every [4] hours.',
            trigger: 2
        },
        {
            note: 'Note: At the Initial Launch, only LIMITED no. of Axess Cards will be distributed! Axess Cards will be distributed at a limited time and quantity. Thereafter, players would need to buy Axess Cards in the RPS marketplace, at perhaps a higher price.',
            trigger: 3
        }
    ]
}



const GameMechanics = () => {
    const [guide1 , setGuide1] = React.useState(0)
    const [guide2 , setGuide2] = React.useState(0)
    const [guide3 , setGuide3] = React.useState(0)
    const [guide4 , setGuide4] = React.useState(0)
    const [guide5 , setGuide5] = React.useState(0)



    const toggleForward = () => {
        if(mechanics.images.length - 1 === guide1){
            setGuide1(0)
        }else{
            setGuide1(guide1 + 1)
        }
        
    }

    const toggleBackward = () => {
        if(guide1 == 0){
            setGuide1(mechanics.images.length - 1)
        }else{
            setGuide1(guide1 - 1)
        }
    }



  return (
    <div className={style.main}>
        <div className={style.mainTitleBox}>
            <h1 className={style.mainTitle}>How It All Works?</h1>
        </div>
        
        {/* FIRST SECTION GET AXESS CARD **********************************/}
        <div className={style.mainContainer1}>
            <div className={style.carouselContainer}>

                <div className={style.imageBox}>
                    <img src={`${mechanics.dir}${mechanics.images[guide1]}`} className={style.image}/>
                    <div className={style.imageButtonContainer}>
                    <h4 onClick={toggleBackward} className={style.imageButton}>{"<"}</h4>
                    <h4 onClick={toggleForward} className={style.imageButton}>{">"}</h4>
                </div>
                </div>
                
            </div>

            <div className={style.contentContainer}>
                <h2 className={style.contentTitle}>{mechanics.title}</h2>

                {mechanics.steps.map((data)=>{
                    return (
                        <p className={data.trigger == guide1 ? style.text2 : style.text1}>{data.note}</p>
                    )
                })}    
            </div>
        </div>

        {/* SECOND SECTION Start Playing **********************************/}
        <div className={style.mainContainer2}>
            <div className={style.carouselContainer}>

                <div className={style.imageBox}>
                    <img src={`/Images/ventures/Slide1.JPG`} className={style.image}/>
                    <div className={style.imageButtonContainer}>
                    <h4 className={style.imageButton}>{"<"}</h4>
                    <h4  className={style.imageButton}>{">"}</h4>
                </div>
                </div>
                
            </div>

            <div className={style.contentContainer}>
                <h2 className={style.contentTitle}>Start Playing</h2>
                <p className={style.text1}>Each play round or battle consist of
                three (3) trays where you will choose
                the element for each tray: rock, paper
                or scissors,</p>
                <p className={style.text1}>The opponent’s elements shows
                whether you win or lose each tray </p>
                <p className={style.text1}>Each tray that is won will have a
                corresponding Point should you win
                (Example: 2 wins and 1 loss = 2 Points). </p>
                <p className={style.text1}>Each battle regardless of the
                outcome will have a corresponding
                Point.  </p>
                
            </div>
        </div>


        {/* Third SECTION GET AXESS CARD **********************************/}
        <div className={style.mainContainer1}>
            <div className={style.carouselContainer}>

                <div className={style.imageBox}>
                    <img src={`/Images/ventures/Slide1.JPG`} className={style.image}/>
                    <div className={style.imageButtonContainer}>
                    <h4 className={style.imageButton}>{"<"}</h4>
                    <h4  className={style.imageButton}>{">"}</h4>
                </div>
                </div>
                
            </div>

            <div className={style.contentContainer}>
                <h2 className={style.contentTitle}>Earn Points</h2>
                <p className={style.text1}>When you have enough Points, you can choose to:  Convert Points to RCK or Replicate your Axess Card</p>
                <p className={style.text1}>Now with RCK you have access to RCK Ventures or trade in the DEX. </p>
            </div>
        </div>

        {/* Forth SECTION Use Points to Replicate or buy Special Axess Card **********************************/}
        <div className={style.mainContainer2}>
            <div className={style.carouselContainer}>

                <div className={style.imageBox}>
                    <img src={`/Images/ventures/Slide1.JPG`} className={style.image}/>
                    <div className={style.imageButtonContainer}>
                    <h4 className={style.imageButton}>{"<"}</h4>
                    <h4  className={style.imageButton}>{">"}</h4>
                </div>
                </div>
                
            </div>

            <div className={style.contentContainer}>
                <h2 className={style.contentTitle}>Use Points to Replicate or buy Special Axess Card</h2>
                <p className={style.text1}>You can choose to replicate your
                Axess Card to produce another Axess
                Card once you have the required
                Points.</p>
                <p className={style.text1}>An Axess Card must be 1st activated to use. The replicated Axess
                Card characteristics is generated
                at random once activated </p>
                <p className={style.text1}>Seasonal Special Axess Card Release: You Since an Axess is an NFT,
                there will be limited edition Axess Cards with unique graphic designs as
                collectible NFTs to be released for player with enough Points. These special Axess Cards will be released in limited time and supply ONLY to those
                qualified players. </p>
            </div>
        </div>

        {/* Fifth SECTION Trade (NFT) Axess Cards  **********************************/}
        <div className={style.mainContainer1}>
            <div className={style.carouselContainer}>

                <div className={style.imageBox}>
                    <img src={`/Images/ventures/Slide1.JPG`} className={style.image}/>
                    <div className={style.imageButtonContainer}>
                    <h4 className={style.imageButton}>{"<"}</h4>
                    <h4  className={style.imageButton}>{">"}</h4>
                </div>
                </div>
                
            </div>

            <div className={style.contentContainer}>
                <h2 className={style.contentTitle}>Trade (NFT) Axess Cards </h2>
                <p className={style.text1}>Axess Cards are NFTs. You can
                trade them in the marketplace. </p>
                <p className={style.text1}>The value of the Axess Card may
                depend whether it is activate.  </p>
                <p className={style.text1}>Naturally, activated Axess Card
                with more characteristics (play count
                and replication count) may demand
                higher price than inactivated Axess
                Card or activated Axess Card with
                less characteristics. </p>
                <p className={style.text1}>Players can buy and sell Axess
                Cards using RCK. </p>
            </div>
        </div>

    </div>
  )
}

export default GameMechanics
