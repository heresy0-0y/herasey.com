import emailjs from 'emailjs-com'
import {ContactForm} from '../components'

export default function ContactContainer(props) {
    const sendMessage = (e) => {
        e.preventDefault();
        const userId = `${process.envs.userId}`
        const serviceId = `${process.envs.serviceId}`
        const templateId = `${process.envs.templateId}`

        emailjs.sendForm(serviceId, templateId, e.target, userId)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error, userId, process.env)
            })
    }
    return (
        <ContactForm sendMessage={sendMessage} onSubmit={sendMessage}/>
    );
}
