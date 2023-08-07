import React from 'react'
import './pagecards.css'
import { Card, Button, Container } from 'react-bootstrap'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


function Pagecards() {

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

  return (
    <div>

<h1 className='text-light heading'>Now Showing</h1>
<Container> 
<Carousel 
responsive={responsive}
swipeable={true}>

 <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-4">
          <Card style={{ width: '18rem' }} className='cardspages'>
            <Card.Img variant="top" src="images/1.jpg" />
            <Card.Body>
              <Card.Title className='text-light txtcard'>Avatar</Card.Title>
              <Card.Text className='text-light infotitle'>
                2023 Avatar Two
              </Card.Text>
              <div className='btnwatchtraier'>
                <Button className='ticketsbtn'>Buy Tickets</Button>
                <Button className='ticketsbtn ticketsbtntriler'>Watch Trailer</Button>
              </div>
            </Card.Body>
          </Card>
        </div>
        </div>
    </div>


    <div className="col-lg-3 col-md-4">
          <Card style={{ width: '18rem' }} className='cardspages'>
            <Card.Img variant="top" src="images/2.jpg" />
            <Card.Body>
              <Card.Title className='text-light txtcard'>Avengers</Card.Title>
              <Card.Text className='text-light infotitle'>
                2023 Avengers
              </Card.Text>
              <div className='btnwatchtraier'>
                <Button className='ticketsbtn'>Buy Tickets</Button>
                <Button className='ticketsbtn ticketsbtntriler'>Watch Trailer</Button>
              </div>
            </Card.Body>
          </Card>
        </div>
        
        <div className="col-lg-3 col-md-4">
          <Card style={{ width: '18rem' }} className='cardspages'>
            <Card.Img variant="top" src="images/FvUVt3hXgAAxP1H.jpeg" />
            <Card.Body>
              <Card.Title className='text-light txtcard'>Oppenheimer</Card.Title>
              <Card.Text className='text-light infotitle'>
                2023 Oppenheimer
              </Card.Text>
              <div className='btnwatchtraier'>
                <Button className='ticketsbtn'>Buy Tickets</Button>
                <Button className='ticketsbtn ticketsbtntriler'>Watch Trailer</Button>
              </div>
            </Card.Body>
          </Card>
        </div>
        
        <div className="col-lg-3 col-md-4">
          <Card style={{ width: '18rem' }} className='cardspages'>
            <Card.Img variant="top" src="images/Untitled (569 × 900px).jpg" />
            <Card.Body>
              <Card.Title className='text-light txtcard'>Zara Hatke Zara</Card.Title>
              <Card.Text className='text-light infotitle'>
                2023 Zara Hatke Zara
              </Card.Text>
              <div className='btnwatchtraier'>
                <Button className='ticketsbtn'>Buy Tickets</Button>
                <Button className='ticketsbtn ticketsbtntriler'>Watch Trailer</Button>
              </div>
            </Card.Body>
          </Card>
        </div>

        <div className="col-lg-3 col-md-4">
          <Card style={{ width: '18rem' }} className='cardspages'>
            <Card.Img variant="top" src="images/8.jpg" />
            <Card.Body>
              <Card.Title className='text-light txtcard'>Zara Hatke Zara</Card.Title>
              <Card.Text className='text-light infotitle'>
                2023 Zara Hatke Zara
              </Card.Text>
              <div className='btnwatchtraier'>
                <Button className='ticketsbtn'>Buy Tickets</Button>
                <Button className='ticketsbtn ticketsbtntriler'>Watch Trailer</Button>
              </div>
            </Card.Body>
          </Card>
        </div>

        <div className="col-lg-3 col-md-4">
          <Card style={{ width: '18rem' }} className='cardspages'>
            <Card.Img variant="top" src="images/9.jpg" />
            <Card.Body>
              <Card.Title className='text-light txtcard'>Zara Hatke Zara</Card.Title>
              <Card.Text className='text-light infotitle'>
                2023 Zara Hatke Zara
              </Card.Text>
              <div className='btnwatchtraier'>
                <Button className='ticketsbtn'>Buy Tickets</Button>
                <Button className='ticketsbtn ticketsbtntriler'>Watch Trailer</Button>
              </div>
            </Card.Body>
          </Card>
        </div>

        <div className="col-lg-3 col-md-4">
          <Card style={{ width: '18rem' }} className='cardspages'>
            <Card.Img variant="top" src="images/10.jpg" />
            <Card.Body>
              <Card.Title className='text-light txtcard'>Zara Hatke Zara</Card.Title>
              <Card.Text className='text-light infotitle'>
                2023 Zara Hatke Zara
              </Card.Text>
              <div className='btnwatchtraier'>
                <Button className='ticketsbtn'>Buy Tickets</Button>
                <Button className='ticketsbtn ticketsbtntriler'>Watch Trailer</Button>
              </div>
            </Card.Body>
          </Card>
        </div>

</Carousel>;

<h1 className='text-light' style={{ marginTop: '50px' }}>Coming Soon</h1>

  
<Carousel 
responsive={responsive}
swipeable={true}>

 <div className="container">
      <div className="row">
      <div className="col-lg-3 col-md-4">
          <Card style={{ width: '18rem' }} className='cardspages'>
            <Card.Img variant="top" src="images/upcoming (1).jpg" />
            <Card.Body>
              <Card.Title className='text-light txtcard'>Insidious</Card.Title>
              <Card.Text className='text-light infotitle'>
                2023 Insidious
              </Card.Text>
              <svg className='releasdte' xmlns="http://www.w3.org/2000/svg" width="200" height="34" viewBox="0 0 216 24" fill="none">
                <path d="M0 0H216L189.5 12.5L216 24H0V0Z" fill="#607D8B"/>
                <text className='textalign' x="55%" y="50%" dominant-baseline="middle" text-anchor="end" fill="white" font-size="15">
                  13 of September
                </text>
              </svg>
              <div className='btnwatchtraier'>
                <Button className='upcomingbtn'>Watch Trailer</Button>
              </div>
            </Card.Body>
          </Card>
        </div>  
        </div>
    </div>


    <div className="col-lg-3 col-md-4">
          <Card style={{ width: '18rem' }} className='cardspages'>
            <Card.Img variant="top" src="images/upcoming (2).jpg" />
            <Card.Body>
              <Card.Title className='text-light txtcard'>The Nun</Card.Title>
              <Card.Text className='text-light infotitle'>
                2023 The Nun
              </Card.Text>
              <svg className='releasdte' xmlns="http://www.w3.org/2000/svg" width="200" height="34" viewBox="0 0 216 24" fill="none">
                <path d="M0 0H216L189.5 12.5L216 24H0V0Z" fill="#607D8B"/>
                <text className='textalign' x="55%" y="50%" dominant-baseline="middle" text-anchor="end" fill="white" font-size="15">
                  10 of September
                </text>
              </svg>
              <div className='btnwatchtraier'>
                <Button className='upcomingbtn'>Watch Trailer</Button>
              </div>
            </Card.Body>
          </Card>
        </div>

        <div className="col-lg-3 col-md-4">
          <Card style={{ width: '18rem' }} className='cardspages'>
            <Card.Img variant="top" src="images/upcoming (5).png" />
            <Card.Body>
              <Card.Title className='text-light txtcard'>Rocky & Rani</Card.Title>
              <Card.Text className='text-light infotitle'>
                2023 Rocky & Rani
              </Card.Text>
              <svg className='releasdte' xmlns="http://www.w3.org/2000/svg" width="200" height="34" viewBox="0 0 216 24" fill="none">
                <path d="M0 0H216L189.5 12.5L216 24H0V0Z" fill="#607D8B"/>
                <text className='textalign' x="55%" y="50%" dominant-baseline="middle" text-anchor="end" fill="white" font-size="15">
                  5 of September
                </text>
              </svg>
              <div className='btnwatchtraier'>
                <Button className='upcomingbtn'>Watch Trailer</Button>
              </div>
            </Card.Body>
          </Card>
        </div>

        <div className="col-lg-3 col-md-4">
          <Card style={{ width: '18rem' }} className='cardspages'>
            <Card.Img variant="top" src="images/upcoming (4).jpg" />
            <Card.Body>
              <Card.Title className='text-light txtcard'>Interstellar</Card.Title>
              <Card.Text className='text-light infotitle'>
                2023 Interstellar
              </Card.Text>
              <svg className='releasdte' xmlns="http://www.w3.org/2000/svg" width="200" height="34" viewBox="0 0 216 24" fill="none">
                <path d="M0 0H216L189.5 12.5L216 24H0V0Z" fill="#607D8B"/>
                <text className='textalign' x="55%" y="50%" dominant-baseline="middle" text-anchor="end" fill="white" font-size="15">
                  22 of September
                </text>
              </svg>
              <div className='btnwatchtraier'>
                <Button className='upcomingbtn'>Watch Trailer</Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      
        <div className="col-lg-3 col-md-4">
          <Card style={{ width: '18rem' }} className='cardspages'>
            <Card.Img variant="top" src="images/11.jpg" />
            <Card.Body>
              <Card.Title className='text-light txtcard'>Interstellar</Card.Title>
              <Card.Text className='text-light infotitle'>
                2023 Interstellar
              </Card.Text>
              <svg className='releasdte' xmlns="http://www.w3.org/2000/svg" width="200" height="34" viewBox="0 0 216 24" fill="none">
                <path d="M0 0H216L189.5 12.5L216 24H0V0Z" fill="#607D8B"/>
                <text className='textalign' x="55%" y="50%" dominant-baseline="middle" text-anchor="end" fill="white" font-size="15">
                  22 of September
                </text>
              </svg>
              <div className='btnwatchtraier'>
                <Button className='upcomingbtn'>Watch Trailer</Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      
        <div className="col-lg-3 col-md-4">
          <Card style={{ width: '18rem' }} className='cardspages'>
            <Card.Img variant="top" src="images/12.jpg" />
            <Card.Body>
              <Card.Title className='text-light txtcard'>Rocky & Rani</Card.Title>
              <Card.Text className='text-light infotitle'>
                2023 Rocky & Rani
              </Card.Text>
              <svg className='releasdte' xmlns="http://www.w3.org/2000/svg" width="200" height="34" viewBox="0 0 216 24" fill="none">
                <path d="M0 0H216L189.5 12.5L216 24H0V0Z" fill="#607D8B"/>
                <text className='textalign' x="55%" y="50%" dominant-baseline="middle" text-anchor="end" fill="white" font-size="15">
                  5 of September
                </text>
              </svg>
              <div className='btnwatchtraier'>
                <Button className='upcomingbtn'>Watch Trailer</Button>
              </div>
            </Card.Body>
          </Card>
        </div>
</Carousel>;
 
  
    </Container>
    </div>
  )
}

export default Pagecards
