import React from 'react'
import Navpart from '../Navigation/Navpart'
import './pagebanner.css'
import Carousel from 'react-bootstrap/Carousel'
import { Button } from 'react-bootstrap'
import Pagecards from '../pagecards/Pagecards'

function Pagebanner() {
  return (
    <div>
      <Navpart/>
     
<Carousel>
  <Carousel.Item>
  <img className='imgstyle' src='images/wallpaperflare.com_wallpaper.jpg' alt=''/>
    <Carousel.Caption>
    <div className='ticketarea'>
      <div className='infopart'>
      <p className='info'>Now Showing at KCC Multiplex- C1</p>
      <p className='info'>Dolby Atmos • <span>  4K Digital Projection</span></p>
      <Button className='btntkt'>Buy Tickets</Button>
      </div>
    </div>
    <img className='bannerprtimg' src='images/1.jpg' alt=''/>
      <h1 className='filmnme'  style={{ marginLeft: '-20px' }}>Avatar Two</h1>
      <p className='filmintro'> A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes <br/> <section className='filmintrosec'> torn between following his orders and protecting the world he feels is his home. </section></p>
      <div className='button-container'>
        <Button className='catgary'>Drama</Button>
        <Button className='catgary'>Action</Button>
        <p className='hourstxt'>R 3h 0m</p>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img className='imgstyle' src='images/wallpaperflare.com_wallpaper (1).jpg' alt=''/>
    <Carousel.Caption>
    <div className='ticketarea'>
      <div className='infopart'>
      <p className='info'>Now Showing at KCC Multiplex- C1</p>
      <p className='info'>Dolby Atmos • <span>  4K Digital Projection</span></p>
      <Button className='btntkt'>Buy Tickets</Button>
      </div>
    </div>
    <img className='bannerprtimg' src='images/2.jpg' alt=''/>
      <h1 className='filmnme'  style={{ marginLeft: '-90px' }}>Avengers</h1>
      <p className='filmintro'> A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes <br/> <section className='filmintrosec'> torn between following his orders and protecting the world he feels is his home. </section></p>
      <div className='button-container'>
        <Button className='catgary'>Drama</Button>
        <Button className='catgary'>Action</Button>
        <p className='hourstxt'>R 3h 0m</p>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img className='imgstyle' src='images/oppenheimer.jpg' alt=''/>
    <Carousel.Caption>
    <div className='ticketarea'>
      <div className='infopart'>
      <p className='info'>Now Showing at KCC Multiplex- C1</p>
      <p className='info'>Dolby Atmos • <span>  4K Digital Projection</span></p>
      <Button className='btntkt'>Buy Tickets</Button>
      </div>
    </div>
      <img className='bannerprtimg' src='images/FvUVt3hXgAAxP1H.jpeg' alt=''/>
      <h1 className='filmnme' style={{ marginLeft: '50px' }}>Oppenheimer</h1>
      <p className='filmintro'> A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes <br/> <section className='filmintrosec'> torn between following his orders and protecting the world he feels is his home. </section></p>
      <div className='button-container'>
        <Button className='catgary'>Drama</Button>
        <Button className='catgary'>Action</Button>
        <p className='hourstxt'>R 3h 0m</p>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

<Pagecards/>

 </div>

  )
}

export default Pagebanner
