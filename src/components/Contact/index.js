import {
  useEffect,
  useState
} from 'react'
import Loader from 'react-loaders'
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup
} from 'react-leaflet'
import {
  useRef
} from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.init("BsWcSAyWV_UTl8Aao");
    emailjs.sendForm('service_a4k46pv', 'template_t2imsxg', '#myForm')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )

  }

  return ( <
    >
    <
    div className = "container contact-page" >
    <
    div className = "text-zone" >
    <
    h1 >
    <
    AnimatedLetters letterClass = {
      letterClass
    }
    strArray = {
      ['C', 'o', 'n', 't', 'a', 'c', 't']
    }
    idx = {
      15
    }
    /> <
    /h1>

    <
    div className = "contact-form" >
    <
    form id = 'myForm'
    ref = {
      form
    }
    onSubmit = {
      sendEmail
    } >
    <
    ul >
    <
    li className = "half" >
    <
    input placeholder = "Name"
    type = "text"
    name = "from_name"
    required autoComplete = 'off' / >
    <
    /li> <
    li className = "half" >
    <
    input placeholder = "Email"
    type = "email"
    name = "email"
    required autoComplete = 'off' /
    >
    <
    /li> <
    li >
    <
    input autoComplete = 'off'
    placeholder = "Subject"
    type = "text"
    name = "subject"
    required /
    >
    <
    /li> <
    li >
    <
    textarea autoComplete = 'off'
    placeholder = "Message"
    name = "message"
    required >
    < /textarea> <
    /li> <
    li >
    <
    input type = "submit"
    className = "flat-button"
    value = "SEND" / >
    <
    /li> <
    /ul> <
    /form> <
    /div> <
    /div>

    <
    div className = "map-wrap" >
    <
    MapContainer center = {
      [41.2789312, 69.3042209]
    }
    zoom = {
      13
    } >
    <
    TileLayer url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" / >
    <
    Marker position = {
      [41.2789312, 69.3042209]
    } >
    <
    Popup > .... < /Popup> <
    /Marker> <
    /MapContainer> <
    /div> <
    /div> <
    Loader type = "pacman" / >
    <
    />
  )
}

export default Contact