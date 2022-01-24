import * as React from "react";
import * as style from "@/styles/gamemechanics.module.css";
import Link from "next/link";
import mechanics from "@/data/GameMechanics.json";
import LazyLoad from "react-lazyload";

const GameMechanics = () => {
  const [guide1, setGuide1] = React.useState(0);
  const [guide2, setGuide2] = React.useState(0);
  const [guide3, setGuide3] = React.useState(0);
  const [guide4, setGuide4] = React.useState(0);
  const [guide5, setGuide5] = React.useState(0);

  const toggleForward = (mech) => {
    const ImageNum = mech.images.length;
    let guide = guide1;
    let setGuide = setGuide1;
    switch (mech.guideNum) {
      case 1:
        guide = guide1;
        setGuide = setGuide1;
        break;
      case 2:
        guide = guide2;
        setGuide = setGuide2;
        break;
      case 3:
        guide = guide3;
        setGuide = setGuide3;
        break;
      case 4:
        guide = guide4;
        setGuide = setGuide4;
        break;
      case 5:
        guide = guide5;
        setGuide = setGuide5;
        break;

      default:
        guide = guide1;
        setGuide = setGuide1;
    }
    if (ImageNum - 1 === guide) {
      setGuide(0);
    } else {
      setGuide(guide + 1);
    }
  };

  const toggleBackward = (mech) => {
    const ImageNum = mech.images.length;
    let guide = guide1;
    let setGuide = setGuide1;
    switch (mech.guideNum) {
      case 1:
        guide = guide1;
        setGuide = setGuide1;
        break;
      case 2:
        guide = guide2;
        setGuide = setGuide2;
        break;
      case 3:
        guide = guide3;
        setGuide = setGuide3;
        break;
      case 4:
        guide = guide4;
        setGuide = setGuide4;
        break;
      case 5:
        guide = guide5;
        setGuide = setGuide5;
        break;

      default:
        guide = guide1;
        setGuide = setGuide1;
    }

    if (guide == 0) {
      setGuide(ImageNum - 1);
    } else {
      setGuide(guide - 1);
    }
  };
  const findGuide = (mech) => {
    switch (mech.guideNum) {
      case 1:
        return guide1;
        break;
      case 2:
        return guide2;
        break;
      case 3:
        return guide3;
        break;
      case 4:
        return guide4;
        break;
      case 5:
        return guide5;
        break;
      default:
        return guide1;
    }
  };
  const toggleSlide = (index, mech) => {
    switch (mech.guideNum) {
      case 1:
        setGuide1(index);
        break;
      case 2:
        setGuide2(index);
        break;
      case 3:
        setGuide3(index);
        break;
      case 4:
        setGuide4(index);
        break;
      case 5:
        setGuide5(index);
        break;
      default:
        setGuide1(index);
    }
  };

  return (
    <div className={style.main}>
      <div className={style.mainTitleBox}>
        <h1 className={style.mainTitle}>How it all works?</h1>
      </div>
      {mechanics.mechanics.map((MD) => {
        return (
          <div
            className={
              MD.containerInvert ? style.mainContainer2 : style.mainContainer1
            }
          >
            <div className={style.carouselContainer}>
              <LazyLoad height={0}>
                <div className={style.imageBox}>
                  <img
                    src={`${MD.dir}${MD.images[findGuide(MD)]}`}
                    className={style.image}
                  />
                  <div className={style.imageButtonContainer}>
                    <h4
                      onClick={() => {
                        toggleBackward(MD);
                      }}
                      className={style.imageButton}
                    >
                      {"<"}
                    </h4>
                    <h4
                      onClick={() => {
                        toggleForward(MD);
                      }}
                      className={style.imageButton}
                    >
                      {">"}
                    </h4>
                  </div>
                </div>
              </LazyLoad>
            </div>

            <div className={style.contentContainer}>
              <LazyLoad height={0}>
                <h2 className={style.contentTitle}>{MD.title}</h2>
                {MD.steps.map((data, index) => {
                  return (
                    <p
                      onClick={() => {
                        toggleSlide(index, MD);
                      }}
                      className={
                        data.trigger == findGuide(MD)
                          ? style.text2
                          : style.text1
                      }
                    >
                      {data.note}
                    </p>
                  );
                })}
              </LazyLoad>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GameMechanics;
