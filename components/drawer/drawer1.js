import * as React from "react"
import * as style from "@/styles/drawer1.module.css"
import {MdKeyboardArrowDown} from "react-icons/md"
import Link from 'next/link'

const Drawer1 = ({contents , title , setDrawer, drawer}) => {
  
    const [height, setHeight] = React.useState("80px")

    const toggleDrawer = () =>{
        if(drawer === title){
            setDrawer(null)
        }else{
            setDrawer(title)
        }
        
    }

    const computeLength = () => {
        switch (contents.length) {
            case 1:
                setHeight("80px");break;
            case 2:
                setHeight("120px");break;
            case 3:
                setHeight("160px");break;
            case 4:
                setHeight("200px");break;
            case 5:
                setHeight("240px");break;
        }
    }
    React.useEffect(() => {
        computeLength()
    }, [])

  return (
    <div className={style.main}>

        {/* ************************************************ */}

        <div  className={style.drawerButton} onClick={toggleDrawer}>
        <h4 className={style.h4animate}>{title}</h4>
        <MdKeyboardArrowDown className={drawer === title ? style.svgUp : style.svgDown} />
        </div>

        <div className={drawer === title ? style.drawerOpen : style.drawerClose} style={{height: height}}>
            {contents.map((content)=>{
                return (
                    <div  className={style.drawerLink}>
                        <Link href={content.url}><h4 className={style.h4animate}>{content.label}</h4></Link>
                    </div>
                )
                
            })}

        </div>

        {/* ************************************************ */}

    </div>
    
  )
}

export default Drawer1
