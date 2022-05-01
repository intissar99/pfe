import { Slide } from "react-slideshow-image";
import slideImages from "../../src/data";
import "react-slideshow-image/dist/styles.css";

//mport banner1 from '../../image'
//import banner2 from '../../image'
//import banner3 from '../../image'

const Home = () => {
  return (
    <div className="container">
      <Slide easing="ease">
        {slideImages.map((slide, index) => {
          return (
            <div className="slide" key={slide}>
              <div style={{ backgroundImage: `url(${slideImages[index]})` }}>
                <span>Slide {index + 1}</span>
              </div>
            </div>
          );
        })}
      </Slide>
    </div>
  )
}

export default Home