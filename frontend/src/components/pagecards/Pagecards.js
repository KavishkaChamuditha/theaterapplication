import React from 'react'
import './pagecards.css'
import { Card, Button, Container } from 'react-bootstrap'

function Pagecards() {
  return (
    <div>
      <h1 className='text-light heading'>Now Showing</h1>
      <Container>
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
      </div>
    </div>
 
    <h1 className='text-light' style={{ marginTop: '50px' }}>Coming Soon</h1>

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
      </div>
    </div>

    </Container>
    </div>
  )
}

export default Pagecards
