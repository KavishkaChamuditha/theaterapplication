import React from 'react'
import './cinema.css'
import { Button } from 'react-bootstrap'

function Cinemapart() {
  return (
    <div>
    <div class="image-container">
        <img width={"100%"} src="images/felix-mooneeram-unsplash.jpg" alt=""/>
        <div class="image-overlay"></div>
    <div class="image-text">We’re doing our part to <br/> help keep you safe.</div>
    <div class="image-phargph">With cinemas now open, your safety and comfort is our priority. <br/> We’re committed to keeping our cinemas, employees and patrons in <br/> line with prevailing healthy and safety guidelines issued by local <br/> authorities, as well as our own expert-backed suggestions. We <br/> humbly request you familiarize yourself with our guidelines and check <br/> back often for updates, in order to have an uninterrupted cinematic <br/> experience at KCC Multiplex.</div>

    <div className='img-txt'>Check out our COVID-19 health and safety guidelines:</div>
 
    <div className='img-btn'>
        <Button className='language'>English</Button>
        <Button className='language'>සිංහල</Button>
        <Button className='language'>தமிழ்</Button>
     </div>

    </div>
    </div>
  )
}

export default Cinemapart
 