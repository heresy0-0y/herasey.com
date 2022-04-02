import React from 'react';
import {useState, useEffect} from 'react'
import {Sitesplay, Sitesplaytainer, Overlay, Deployed, OverlayText} from "./Displaytainers.elements";
import {Image, Button} from 'grommet';

function Displaytainers() {
    const [showOverlay, setShowOverlay] = useState()

    let overlayText = 0;

    if (showOverlay === 1) {
        overlayText = <p>This is the first app I ever built. Vanilla JS, HTML, and CSS. <br/> Deployed with netlify <Deployed to={{ pathname: "https://biospace.netlify.app/" }}target="_blank">here</Deployed></p>
    }
    if (showOverlay === 2) {
        overlayText = <p>This is the first app I built utilizing React.js<br/> Deployed with netlify <Deployed to={{ pathname: "https://mediasink.netlify.app/" }} target="_blank">here</Deployed></p>
    }

    if (showOverlay === 3) {
        overlayText = <p>This is my first MERN full stack app, and first project built as part of a team.<br/>Deployed with netlify <Deployed to={{ pathname: "https://faremarket.netlify.app/" }} target="_blank">here</Deployed></p>
    }

    if (showOverlay === 4) {
        overlayText = <p>My first Ruby on Rails app!<br/>Deployed with netlify <Deployed to={{ pathname: "https://vitafinder.netlify.app/" }} target="_blank">here</Deployed></p> 
    }
    

    return (
        <>
        <Sitesplaytainer>
            <Sitesplay fill play="10000" wrap="true" controls="arrows">

                <Image src="https://i.ibb.co/2g3ZBXN/screenshot1.png" label="show" alt="screen shot of my first vanilla js app" fit="contain" onClick={()=>setShowOverlay(1)}/>
                <Image src="https://i.ibb.co/jGThKp3/screen-shot-2.png" alt="screen shot of my first react app" fit="contain" onClick={()=>setShowOverlay(2)}/>
                <Image src="https://i.ibb.co/wdstWPQ/screen-shot-3.png" alt="screen shot of my first full-stack app, using Express.js and MongoDB" fit="contain" onClick={()=>setShowOverlay(3)}/>
                <Image src="https://i.ibb.co/YPss7Db/screen-shot-4.png" alt="screen shot of my first Ruby on Rails full-stack app" fit="contain" onClick={()=>setShowOverlay(4)}/>
            </Sitesplay>
            {showOverlay  && (
        <Overlay
          onEsc={() => setShowOverlay(false)}
          onClickOutside={() => setShowOverlay(false)}
        >
           {overlayText}
          <Button label="close" onClick={() => setShowOverlay(false)}/>
        </Overlay>
      )}
        </Sitesplaytainer>
        </>

    );
}

export default Displaytainers;