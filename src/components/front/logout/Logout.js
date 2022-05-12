import { useAuth } from '../auth/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


const Logout = props => {


  const { logout, setAuthenticated } = useAuth();
  const navigate = useNavigate()

  useEffect(() => {
    logout()
      .then(() => {
        setAuthenticated(false)
        navigate('/')
      })

  }, [logout, navigate, setAuthenticated])


  return (
    <div className="container-md contact-form py-5" style={{ backgroundColor: 'var(--light-pink-color)', minHeight: '50vh' }}>
      <div className="row">
        <div className="col-md-6 col-sm-8 mx-auto px-4">
          <h1 className="h2 text-center text-uppercase mb-5"> Deconnexion ... </h1>
        </div>
      </div>
    </div>
  )
}

export default Logout;