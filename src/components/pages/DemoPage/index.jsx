import { useState, useEffect } from 'react'
import axios from 'axios'
// COMPONENTES
import Site from '../../templates/Site'
// CONFIGURACIÓN
import siteConfig from './configData.json'

const DemoPage = () => {
  const [queryWord, setQueryWord] = useState(null)
  const [loadedCards, setloadedCards] = useState([])

  useEffect(() => {
    const callApi = async () => {
      const response = await axios.get(`https://api.unsplash.com/search/photos`, {
        headers: {
          Authorization: `Client-ID ${process.env.REACT_APP_API_KEY}`,
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        params: { query: queryWord }
      })

      setloadedCards(
        response.data.results.map(({ description, urls }) => ({
          content: description ? <p>{description}</p> : null,
          image: {
            src: urls.full
          }
        }))
      )
    }

    queryWord && callApi()
  }, [queryWord])

  return (
    <Site
      useDummyData={false}
      siteConfig={siteConfig}
      cards={loadedCards}
      onClick={word => setQueryWord(word)}
    />
  )
}

export default DemoPage
