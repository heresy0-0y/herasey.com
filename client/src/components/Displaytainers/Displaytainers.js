import {Sitesplay} from "./Displaytainers.elements";
import {Image,Box} from 'grommet';

function Displaytainers() {

    return (
        <Box height="40rem" width="80%" overflow="hidden" margin="auto">
            <Sitesplay fill play="14000" wrap="true">
                <Image src="https://i.ibb.co/2g3ZBXN/screenshot1.png" alt="screen shot of my first vanilla js app" href="https://biospace.netlify.app/" fit="contain"/>
                <Image src="https://i.ibb.co/jGThKp3/screen-shot-2.png" alt="screen shot of my first react app" fit="contain"/>
                <Image src="https://i.ibb.co/wdstWPQ/screen-shot-3.png" alt="screen shot of my first full-stack app, using Express.js and MongoDB" fit="contain"/>
                <Image src="https://i.ibb.co/YPss7Db/screen-shot-4.png" alt="screen shot of my first Ruby on Rails full-stack app" fit="contain"/>
            </Sitesplay>
            </Box>

    );
}

export default Displaytainers;