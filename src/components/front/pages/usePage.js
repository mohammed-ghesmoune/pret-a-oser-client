

import { useState, useEffect } from "react"
const entrypoint = process.env.REACT_APP_API_ENTRYPOINT
const initialValue = {
  title: '',
  content: '',
  imageUrl: ''
}
const usePage = (pageTitle) => {
  const [page, setPage] = useState(initialValue)

  useEffect(() => {

    fetch(`${entrypoint}/pages?page=1&title=${pageTitle}`)
      .then(response => response.json())
      .then(pages => {
        let page = pages['hydra:member'][0];
        let pageId = page.id;
        pageId && fetch(`${entrypoint}/pages/${pageId}`)
          .then(response => response.json())
          .then(p => p && setPage(p))
      })
  }, [pageTitle])

  return page;
}

export default usePage;