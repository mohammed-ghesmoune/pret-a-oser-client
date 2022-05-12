
import usePage from '../usePage'
import ContactForm from './ContactForm'
import Loader from '../../loader/Loader'
import './style.css'



const Conatct = () => {
  const page = usePage('contact')

  const createMarkup = (text) => ({ __html: text });
  if (!page) return <Loader />
  return (
    <div className="contact-page" style={{ minHeight: '55vh' }} >
      <div className=" header" >
        <div className=" container py-3">
          <h1 className=" mb-0 h2 py-3 text-uppercase">Contact</h1>
        </div>
      </div>
      <div className="content container-fluid ">
        <div className=" text-center py-5">Une question ? Une demande en particulier ? <br />
          Contactez-moi, je me ferai un plaisir d’échanger avec vous, par téléphone ou autour d’un café.
        </div>
        <div className="container">
          <div className="row">
            <div className=" col-md-6 px-0 d-flex flex-column justify-content-center ">
              <img src={page.imageUrl} alt={page.title} className="thumbnail" />
              <div className="" dangerouslySetInnerHTML={createMarkup(page.content)} />

            </div>
            <div className=" col-md-6 px-0 py-5 " >
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div >


  )
}
export default Conatct