import React, { useEffect, useState, Fragment } from 'react';
import { NavLink, Link, Outlet } from 'react-router-dom';
import { useAuth } from '../auth/AuthProvider';
import './style.css';
import Footer from '../footer/Footer';


const entrypoint = process.env.REACT_APP_API_ENTRYPOINT;
const Header = () => {
  const { authenticated, isAdmin } = useAuth();
  const [categories, setCategories] = useState([])
  const [, setPages] = useState([])

  useEffect(() => {
    fetch(entrypoint + '/categories', { "method": "GET" })
      .then(response => response.json())
      .then(categories => {
        setCategories(categories['hydra:member']);
      });
  }, [])

  useEffect(() => {
    fetch(entrypoint + '/pages', { "method": "GET" })
      .then(response => response.json())
      .then(pages => {
        setPages(pages['hydra:member']);
      });
  }, [])

  useEffect(() => {

    const handleDropdownToggles = (e, links) => {
      links.forEach(element => {
        element.classList.remove("active")
      })
      e.currentTarget.classList.add("active")
    }

    const dropdownToggles = document.querySelectorAll('.navbar-nav > li > a')
    dropdownToggles.forEach(element => {
      element.addEventListener('click', (e) => handleDropdownToggles(e, dropdownToggles))
    })

    const handleActiveLink = (e, links) => {
      links.forEach(element => {
        element.parentElement.parentElement.previousElementSibling.classList.remove("active")
      })
      e.currentTarget.parentElement.parentElement.previousElementSibling.classList.add("active")

    }
    const linkElements = document.querySelectorAll('.dropdown-menu a')
    linkElements.forEach(element => {
      element.addEventListener('click', (e) => handleActiveLink(e, linkElements))
    })

    return () => {
      linkElements.forEach(element => {
        element.removeEventListener('click', (e) => handleActiveLink(e, linkElements))
      })
    }
  })

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-md navbar-light bg-white pb-3 pt-3">
          <div className="container-fluid d-flex flex-row flex-md-column justify-content-center align-items-center position-relative">
            <NavLink className="navbar-brand" to="/">Prêt à Oser</NavLink>
            <button className="navbar-toggler position-absolute right-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto mb-2 mb-lg-0">

                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">About</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">contact</NavLink>
                </li>
                {categories.map((category, i) =>
                (
                  category.prestations.length > 1 ?
                    <li key={i} className="nav-item dropdown">
                      <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {category.title}
                      </Link>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        {category.prestations.map((prestation) => (<li key={prestation.id}><NavLink className="dropdown-item" to={`prestation/${prestation.id}`}>{prestation.title}</NavLink></li>))}
                      </ul>
                    </li>
                    : category.prestations.length !== 0 ?
                      <li key={i} className="nav-item">
                        <NavLink className="nav-link" to={`prestation/${category.prestations[0]?.id}`}>{category.title}</NavLink>
                      </li>
                      : null
                ))
                }


                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Mon Compte
                  </Link>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    {
                      !authenticated ?
                        <Fragment>
                          <li><NavLink className="dropdown-item" to='/login'>connexion</NavLink></li>
                          <li><NavLink className="dropdown-item" to='/signup'>inscription</NavLink></li>
                        </Fragment>
                        :
                        <Fragment>
                          {
                            isAdmin &&
                            <li>
                              <NavLink className="dropdown-item" to="/admin">admin</NavLink>
                            </li>
                          }
                          <li><NavLink className="dropdown-item" to='/profil'>Mon Profil</NavLink></li>
                          <li><NavLink className="dropdown-item" to='/logout'>deconnexion</NavLink></li>
                        </Fragment>
                    }
                  </ul>
                </li>
                {/* {
                  authenticated && isAdmin &&
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/admin">admin</NavLink>
                  </li>
                } */}

              </ul>

            </div>
          </div>
        </nav>

      </header>
      <Outlet />
      <Footer />
    </>
  )
}

export default Header;