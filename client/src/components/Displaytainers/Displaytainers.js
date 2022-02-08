import {Sitesplay, Sitesplaytainer} from "./Displaytainers.elements";
import {Image} from 'grommet';

function Displaytainers() {

    return (
        <>
        <Sitesplaytainer>
            <Sitesplay fill play="10000" wrap="true">
                <Image src="https://i.ibb.co/2g3ZBXN/screenshot1.png" alt="screen shot of my first vanilla js app" href="https://biospace.netlify.app/" fit="contain"/>
                <Image src="https://i.ibb.co/jGThKp3/screen-shot-2.png" alt="screen shot of my first react app" fit="contain"/>
                <Image src="https://i.ibb.co/wdstWPQ/screen-shot-3.png" alt="screen shot of my first full-stack app, using Express.js and MongoDB" fit="contain"/>
                <Image src="https://i.ibb.co/YPss7Db/screen-shot-4.png" alt="screen shot of my first Ruby on Rails full-stack app" fit="contain"/>
            </Sitesplay>
        </Sitesplaytainer>
        </>

    );
}

export default Displaytainers;