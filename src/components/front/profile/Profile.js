import { useEffect, useState, } from 'react';
import { useNavigate } from "react-router-dom";
import './style.css';
// import { FaEdit } from "react-icons/fa";
import { Accordion, } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
import { useAuth } from '../auth/AuthProvider';
const ENTRYPOINT = process.env.REACT_APP_API_ENTRYPOINT;


const initialValue = {
  username: "",
  email: "",
}
const Profile = _ => {
  const navigate = useNavigate()
  const { authenticated, user, setAuthenticated } = useAuth()
  const [message, setMessage] = useState('');
  const [userData, setUserData] = useState(initialValue)

  useEffect(() => {
    if (authenticated) {

      setUserData({ email: user.email, username: user.username })
    }
    else {
      navigate('/login')
    }
  }, [authenticated, user, navigate])

  const handleChange = e => {
    setUserData({ ...userData, [e.target.id]: e.target.value })
  }


  const updateUser = data => {

    const request = new Request(
      `${ENTRYPOINT}/users/${user.id}`,
      {
        method: "PUT",
        body: JSON.stringify(data),
        headers: new Headers({
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        }),
      }
    );
    fetch(request)
      .then((response) => {
        if (response.status === 200) {
          localStorage.removeItem("token");
          setAuthenticated(false);
          navigate("/login");
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
  const handleSubmit = e => {
    e.preventDefault()
    const formData = new FormData(e.target);
    updateUser(Object.fromEntries(formData))
  }

  const handlePassword = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const oldPassword = formData.get('oldPassword')
    const newPassword = formData.get('newPassword')
    const confirmNewPassword = formData.get('confirmNewPassword')
    if (oldPassword === '' || newPassword === '' || confirmNewPassword === '') {
      setMessage({
        type: 'danger',
        msg: 'Vous devriez remplir tous les champs'
      })
      return
    }
    const isPassWordVerified = await (await fetch(`${ENTRYPOINT}/users/${user.id}/verify-old-password`,
      {
        method: "PUT",
        body: JSON.stringify({ password: oldPassword }),
        headers: new Headers({
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        }),
      })).json();

    if (isPassWordVerified === false) {
      setMessage({
        type: 'danger',
        msg: 'Ancien mot de passe incorrect'
      })
      return
    }

    if (newPassword.length < 4) {
      setMessage({
        type: 'danger',
        msg: 'Le nouveau mot de passe doit contenir minimum 4 caractères'
      })
      return
    }

    if (newPassword !== confirmNewPassword) {
      setMessage({
        type: 'danger',
        msg: 'Le nouveau mot de passe et le confirme nouveau mot de passe doivent être identiques'
      })
      return
    }

    updateUser({ password: newPassword })

  }

  const { username, email } = userData;

  const disabled = username === '' || email === ''
  return (
    !authenticated ? null : <div className="profil-page" style={{ minHeight: '60vh' }} >
      <div className=" header" >
        <div className=" container py-3">
          <h1 className=" mb-0 h2 py-3 text-uppercase">Profil</h1>
        </div>
      </div>
      <div className="content  container my-3 ">

        <Accordion flush>
          <ul className="list-group list-group-flush py-4 col-md-6 mx-auto px-0">
            {
              message && <div className={`message message-${message.type} `} role="alert">{message.msg}</div>
            }
            <li className="list-group-item mb-3">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <div><span className="title">Pseudo: </span>{user.username}</div>
                </Accordion.Header>
                <Accordion.Body >
                  <form className="p-3 mt-3 bg-light form" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <input className="form-control" id="username" name="username" placeholder="* Votre nom" type="text" value={username} onChange={handleChange} required />
                    </div>
                    <div className="form-group mt-2">
                      <input className="btn btn-dark" type="submit" value="Valider" disabled={disabled} />
                    </div>
                  </form>
                </Accordion.Body>
              </Accordion.Item>
            </li>
            <li className="list-group-item mb-3">
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <div><span className="title">email: </span>{user.email}</div>
                </Accordion.Header>
                <Accordion.Body >
                  <form className="p-3 mt-3 bg-light form" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <input className="form-control" id="email" name="email" placeholder="* Email" type="email" value={email} onChange={handleChange} required />
                    </div>
                    <div className="form-group mt-2">

                      <input className="btn btn-dark" type="submit" value="Valider" disabled={disabled} />
                    </div>
                  </form>
                </Accordion.Body>
              </Accordion.Item>

            </li>
            <li className="list-group-item  mb-3">
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <div><span className="title">mot de passe: </span>******</div>
                </Accordion.Header>

                <Accordion.Body>
                  <form className="p-3 mt-3 bg-light form" onSubmit={handlePassword}>
                    <div className="form-group">
                      <label htmlFor="oldPassword " className="form-label small">Ancien mot de passe</label>
                      <input className="form-control" id="oldPassword " name="oldPassword" placeholder="* Ancien mot de passe" type="password" autoComplete="off" required />
                    </div>
                    <div className="form-group mt-2">
                      <label htmlFor="newPassword" className="form-label small">Nouveau mot de passe</label>
                      <input className="form-control" id="newPassword" name="newPassword" placeholder="* Nouveau mot de passe" type="password" autoComplete="off" required />
                    </div>
                    <div className="form-group mt-2">
                      <label htmlFor="confirmNewPassword" className="form-label small">Confirmer nouveau mot de passe</label>
                      <input className="form-control" id="confirmNewPassword" name="confirmNewPassword" placeholder="* Confirmer nouveau mot de passe" type="password" autoComplete="off" required />
                    </div>
                    <div className="form-group mt-2">
                      <input className="btn btn-dark" type="submit" value="Valider" />
                    </div>
                  </form>
                </Accordion.Body>
              </Accordion.Item>
            </li>
          </ul>
        </Accordion>

      </div>
    </div >
  )
}

export default Profile