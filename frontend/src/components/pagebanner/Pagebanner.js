import React from 'react'
import Navpart from '../Navigation/Navpart'
import './pagebanner.css'
import Carousel from 'react-bootstrap/Carousel'

function Pagebanner() {
  return (
    <div>
      <Navpart/>
    
<Carousel>
  <Carousel.Item>
  <img className='imgstyle' src='images/wallpaperflare.com_wallpaper.jpg' alt=''/>
    <Carousel.Caption>
    <img className='bannerprtimg' src='images/1.jpg' alt=''/>
      <h1 className='filmnme'>Avatar</h1>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img className='imgstyle' src='images/wallpaperflare.com_wallpaper (1).jpg' alt=''/>
    <Carousel.Caption>
    <img className='bannerprtimg' src='images/2.jpg' alt=''/>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img className='imgstyle' src='images/oppenheimer.jpg' alt=''/>
    <Carousel.Caption>
      <img className='bannerprtimg' src='images/FvUVt3hXgAAxP1H.jpeg' alt=''/>
      <h3 className='text-light'>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
 </div>

  )
}

export default Pagebanner
