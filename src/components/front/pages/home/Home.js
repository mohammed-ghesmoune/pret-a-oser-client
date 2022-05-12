
import './style.css';
import usePage from '../usePage';
import TestimonialCarousel from '../../testimonial_carousel/TestimonialCarousel';
import PrestationCarousel from '../../prestation_carousel/PrestationCarousel';
// import brush from '../../backgrounds/brush-9.svg'




const Home = _ => {

  const page = usePage('home')

  const createMarkup = (text) => ({ __html: text });

  return (
    <div className="front-page">
      <div className="thumbnail" style={{ backgroundImage: `url(${page.imageUrl})` }}>
        <div className="header ">
          <div className="name">Nacera Meziadi</div>
          <div className="description">Consultante en image & personal shopper</div>
        </div>
      </div>
      {
        page.content &&
        <div className=" container-fluid content py-5" /*style={{ backgroundImage: `url(${brush})` }}*/>
          <div className="row">
            <div className=" col-md-9 col-lg-7 mx-auto px-5" dangerouslySetInnerHTML={createMarkup(page.content)} />
          </div>
        </div>
      }
      <PrestationCarousel category="service" direction="right" title="services" />
      <TestimonialCarousel />
      <PrestationCarousel category="forfait" direction="left" title="forfaits" />

    </div>
  )
}

export default Home;