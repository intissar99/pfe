import React from 'react'
import {Carousel} from 'react-bootstrap' ;
//mport banner1 from '../../image'
//import banner2 from '../../image'
//import banner3 from '../../image'

function Home() {
  return (
    <div > 
    <Carousel variant="dark">
      <Carousel.Item>
        <img className="d-block w-100 "src="../../image/banner1.png"alt="banner1"/>
        <Carousel.Caption>
          <h3>detail</h3>
        </Carousel.Caption>
        
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 " src="../../image/banner2.png" alt="banner2"/>
        <Carousel.Caption>
          <h3>detail2</h3>
        </Carousel.Caption>
        <Carousel.Item>
        <img className="d-block w-100 " src="../../image/banner1.png" alt="banner3"/>
        <Carousel.Caption>
          <h3>detail3</h3>
        </Carousel.Caption>
        
      </Carousel.Item>
        
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Home