import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
const entrypoint = process.env.REACT_APP_API_ENTRYPOINT


const logoStyle = {
  maxWidth: '100px',
  height: 'auto',
  margin: '0 auto',
  cursor: 'pointer'
}

function LogoCarousel() {
  const [logos, setLogos] = useState(null)
  const settings = {
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 4
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 3
      }
    }]
  }

  useEffect(() => {
    fetch(`${entrypoint}/logos`)
      .then(response => response.json())
      .then(logos => { logos && setLogos(logos['hydra:member']) })
      .catch(e => console.log(e.message || e))
  }, [])
  return (
    logos &&
    <div className="container-md pb-3 pt-4">
      <Slider {...settings}>
        {
          logos.map(logo => (
            <div key={logo.id}>
              <a href={logo.url} target="_blank" rel="noreferrer"><img src={logo.imageUrl} alt={logo.title} style={logoStyle} /></a>
            </div>
          ))
        }
      </Slider>
    </div>
  )
}

export default LogoCarousel