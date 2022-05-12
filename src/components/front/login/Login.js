import { useEffect, useState } from 'react';
import { Link, useNavigate, } from 'react-router-dom';
import { useAuth } from '../auth/AuthProvider';
// import brush from '../../backgrounds/brush-4.svg'

const initialValue = {
  username: "",
  password: "",
}
const Login = props => {

  const { login, authenticated, setAuthenticated } = useAuth()
  const [user, setUser] = useState(initialValue)
  const [message, setMessage] = useState('');


  const navigate = useNavigate()
  useEffect(() => {
    if (authenticated) {
      setMessage({
        type: 'success',
        msg: `Vous êtes connecté , vous allez être rediriger vers la page d'accueil`
      })
      navigate('/');
    }

  }, [authenticated, navigate])

  const handleSubmit = e => {

    e.preventDefault();

    login(user)
      .then(() => {
        setAuthenticated(true)
        navigate('/')
      })
      .catch(error => {
        setMessage({
          type: 'danger',
          msg: `ERROR: ${error.message || error}`
        })
      })
  }
  const handleChange = e => {
    setUser({ ...user, [e.target.id]: e.target.value })
  }

  const { username, password } = user;

  const disabled = username === '' || password.length < 4

  return (
    <div className="container-md contact-form pb-5 pt-3" style={{ backgroundColor: 'var(--light-pink-color)', minHeight: '65vh' }}>
      <div className="row">
        <div className="col-md-5 col-sm-8 mx-auto px-5">
          <h1 className="h2 text-center text-uppercase py-5 page-title" /*style={{ backgroundImage: `url(${brush})` }}*/> Connexion </h1>
          {
            message && <div className={`message message-${message.type}`} role="alert">{message.msg}</div>
          }
          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <input className="form-control" id="username" placeholder="* Email or username" type="text" value={username} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <input className="form-control" id="password" placeholder="* Mot de passe" type="password" value={password} onChange={handleChange} required autoComplete="off" />
            </div>

            <input className="btn btn-success" type="submit" value="Valider" disabled={disabled} />
          </form>
          <div className="my-3">
            <p><Link to="/signup"> <small>Nouveau sur le site ? Inscrivez vous !</small></Link></p>
            <p><Link to="/forgetpassword"><small> Mot de passe oublié ? récupérez le ici !</small></Link></p>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Login;