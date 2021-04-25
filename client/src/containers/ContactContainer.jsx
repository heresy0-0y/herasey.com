import emailjs from 'emailjs-com'
import {ContactForm} from '../components'

export default function ContactContainer(props) {
    const {SERVICE_ID, TEMPLATE_ID, USER_ID} = process.envs
    const sendMessage = (e) => {
        e.preventDefault();

        emailjs.sendForm(`${SERVICE_ID}`, `${TEMPLATE_ID}`, e.target, `${USER_ID}`)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error, `${USER_ID}`);
            })
    }
    return (
        <ContactForm sendMessage={sendMessage} onSubmit={sendMessage}/>
    );
}
