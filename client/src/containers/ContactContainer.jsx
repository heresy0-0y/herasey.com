import emailjs from 'emailjs-com'
import {emailJsIds} from './services'
import {ContactForm} from '../components'

export default function ContactContainer(props) {
    const sendMessage = (e) => {
        e.preventDefault();
        const userId=emailJsIds.userId
        const serviceId = emailJsIds.serviceId
        const templateId = emailJsIds.templateId

        emailjs.sendForm(serviceId, templateId, e.target, userId)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error, userId)
            })
    }
    return (
        <ContactForm sendMessage={sendMessage} onSubmit={sendMessage}/>
    );
}
