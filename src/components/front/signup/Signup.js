import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthProvider';
// import brush from '../../backgrounds/brush-4.svg'
const ENTRYPOINT = process.env.REACT_APP_API_ENTRYPOINT;


const initialValue = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  role: 'user'
}


const Signup = props => {

  const { authenticated } = useAuth();
  const navigate = useNavigate();
  const [user, setUser] = useState(initialValue);
  const [message, setMessage] = useState('');

  useEffect(() => {

    if (authenticated) {
      setMessage({
        type: 'danger',
        msg: `Vous êtes déjà connecté`
      })
      navigate('/');
    }
  }, [authenticated, navigate])

  const handleSubmit = e => {
    e.preventDefault();
    // delete user.confirmPassword;
    const request = new Request(
      `${ENTRYPOINT}/users`,
      {
        method: "POST",
        body: JSON.stringify(user),
        headers: new Headers({ "Content-Type": "application/json" }),
      }
    );
    fetch(request)
      .then((response) => {
        if (response.status === 201) {
          navigate('/login')
        } else {
          return response.json();
        }
      })
      .then((error) => {
        setMessage({
          type: 'danger',
          msg: <ul>{error.violations.map((violation, index) => (<li key={index}>{violation.propertyPath} : {violation.message}</li>))}</ul>
        })
      }).catch(error => {
        setMessage({
          type: 'danger',
          msg: `ERROR: ${error.message || error}`
        })
      })
  }

  const handleChange = e => {
    setUser({ ...user, [e.target.id]: e.target.value })
  }

  const { username, email, password, confirmPassword } = user;

  const disabled = username === '' || email === '' || password.length < 6 || password !== confirmPassword;

  return (
    <div className="container-md contact-form pb-5 pt-3" style={{ backgroundColor: 'var(--light-pink-color)', minHeight: '65vh' }}>
      <div className="row">
        <div className="col-md-5 col-sm-8 mx-auto px-5">
          <h1 className="h2 text-center text-uppercase py-5 page-title" /*style={{ backgroundImage: `url(${brush})` }}*/> Inscription </h1>
          {
            message && <div className={`message message-${message.type}`} role="alert">{message.msg}</div>
          }
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input className="form-control" id="username" placeholder="* Votre nom" type="text" value={username} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <input className="form-control" id="email" placeholder="* Email" type="email" value={email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <input className="form-control mb-0" id="password" placeholder="* Mot de passe" type="password" value={password} onChange={handleChange} required autoComplete="off" />
              <small>* 6 caractères minimum</small>
            </div>
            <div className="form-group">
              <input className="form-control" id="confirmPassword" placeholder="* Confirmer le mot de passe" type="password" value={confirmPassword} onChange={handleChange} required autoComplete="off" />
            </div>
            <input className="btn btn-success" type="submit" value="Valider" disabled={disabled} />
          </form>
          <div className="my-3">
            <Link to="/login"><small> Déja inscrit ? Connectez vous !</small></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup;