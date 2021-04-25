import emailjs from 'emailjs-com'
import {ContactForm} from '../components'

export default function ContactContainer(props) {
    const sendMessage = (e) => {
        e.preventDefault();
        const userId = `${process.env.userId}`
        const serviceId = `${process.env.serviceId}`
        const templateId = `${process.env.templateId}`

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
