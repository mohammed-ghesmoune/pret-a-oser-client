import { useEffect, useState } from "react";
import { useParams, Link, } from "react-router-dom";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
const entrypoint = process.env.REACT_APP_API_ENTRYPOINT;

const usePrestation = () => {

  let { prestationId } = useParams();
  let [prestation, setPrestation] = useState(null)
  let [prestations, setPrestations] = useState([])

  useEffect(() => {
    if (prestationId) {
      fetch(`${entrypoint}/prestations/${prestationId}`)
        .then(response => response.json())
        .then(prestation => setPrestation(prestation))
    }
  }, [prestationId]);

  useEffect(() => {
    if (prestation) {
      fetch(`${entrypoint}/prestations`)
        .then(response => response.json())
        .then(prestations => setPrestations(prestations['hydra:member'].filter((p) => p.category['@id'] === prestation.category['@id'])))
    }
  }, [prestation]);



  const index = prestations ? prestations.findIndex(p => p.title === prestation.title) : 0;

  const getPrestation = index => {
    const p = prestations[index];
    return {
      path: `/prestation/${p.id}`,
      title: p.title
    }
  }
  const previousPrestation = index - 1 >= 0 ?
    <Link to={getPrestation(index - 1).path}> <BsChevronDoubleLeft /><span className="pl-2">{`${getPrestation(index - 1).title}`}</span></Link>
    :
    <div></div>;
  const nextPrestation = index + 1 < prestations.length ?
    <Link to={getPrestation(index + 1).path}><span className="pr-2">{`${getPrestation(index + 1).title}`} </span><BsChevronDoubleRight /></Link>
    :
    <div></div>;


  return { prestation, prestations, index, previousPrestation, nextPrestation }
}

export default usePrestation;