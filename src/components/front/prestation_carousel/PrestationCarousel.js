import React, { useState, useEffect, useRef, useLayoutEffect, Fragment } from 'react'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'
import './style.css'
// import brush1 from '../../backgrounds/brush-3.svg'
const entrypoint = process.env.REACT_APP_API_ENTRYPOINT


function PrestationCarousel(props) {

  const [prestations, setPrestations] = useState(null)
  const [windowSizeSmall, setwindowSizeSmall] = useState(false)
  const sliderRef = useRef(null)
  const settings = {
    dots: false,
    arrows: false,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    className: 'prestationsZindex',
    beforeChange: (oldIndex, newIndex) => {
      let oldSlide = document.querySelector(`[data-index='${oldIndex}']`);
      let newSlide = document.querySelector(`[data-index='${newIndex}']`);
      oldSlide && (oldSlide.style.zIndex = '0');
      newSlide && (newSlide.style.zIndex = '1');

    }
  };
  useEffect(() => {

    fetch(`${entrypoint}/prestations?category.title=${props.category}`)
      .then(response => response.json())
      .then(prestations => {
        prestations && setPrestations(prestations['hydra:member'])
      }).catch(e => console.log(e.message || e))

  }, [props.category])

  useLayoutEffect(() => {
    function handleResize() {
      window.innerWidth < 767 ? setwindowSizeSmall(true) : setwindowSizeSmall(false)
    }
    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)

  }, [])

  return (
    prestations &&
    <Fragment>
      <div className=" prestationCarouselHeader container-fluid" /*style={{ backgroundImage: `url(${brush1})` }}*/>
        <h2 className=" my-0 h1 py-4 py-md-5 text-uppercase text-center page-title" > {props.title}</h2>
      </div>
      <Slider ref={slider => (sliderRef.current = slider)} {...settings}>
        {
          prestations.map((prestation, index) => (
            <div key={prestation.id} id="slider" className="w-100">
              <div className="sliderWrapper" style={{ backgroundImage: windowSizeSmall ? 'none' : `url(${prestation.images[0]?.imageUrl})` }} >
                <div className={`sliderContainer ${props.direction}`}  >
                  <div className={`sliderLeftBlock ${props.direction === "left" && " order-md-2"}`} >
                    {/* <div className="title">Comment puis-je vous aider ?</div> */}
                    <ul className="titlesList">
                      {
                        prestations.map((s, i) => {
                          const bold = index === i ? { opacity: '1', fontWeight: '600' } : {};
                          return (<li key={s.id}
                            className="title "
                            style={bold}
                            onClick={() => sliderRef.current.slickGoTo(i)}
                          >
                            {s.title}
                          </li>
                          )
                        })
                      }
                    </ul>
                  </div>
                  <div className={`sliderRightBlockWrapper ${props.direction === "left" && " order-md-1"}`}
                    style={{ backgroundImage: windowSizeSmall ? `url(${prestation.images[0]?.imageUrl})` : 'none' }}>
                    <div className="sliderRightBlock">
                      <div className="content">
                        <div className="title">{prestation.title}</div>
                        <div className="exerpt">{prestation.exerpt}</div>
                        <Link className="btnReadMore" to={`/prestations/${prestation.id}`}>en savoir +</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        }

      </Slider>
    </Fragment>
  )
}

export default PrestationCarousel