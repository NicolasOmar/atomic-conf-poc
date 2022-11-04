import { useState, useEffect } from 'react'
import axios from 'axios'
// COMPONENTES
import Site from '../../templates/Site'
// CONFIGURACIÓN
import siteConfig from './configData.json'

const DemoPage = () => {
  const [queryWord, setQueryWord] = useState(null)
  const [loadedCards, setloadedCards] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const callApi = async () => {
      setIsLoading(true)
      const response = await axios.get(`https://api.unsplash.com/search/photos`, {
        headers: {
          Authorization: `Client-ID ${process.env.REACT_APP_API_KEY}`,
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        params: {
          query: queryWord,
          per_page: 15,
          orientation: 'landscape'
        }
      })

      setloadedCards(
        response.data.results.map(({ alt_description, user, urls }) => ({
          content: user ? (
            <p>
              Origen:{' '}
              <a href={user.portfolio_url ?? `https://unsplash.com/@${user.username}`}>
                {user.name}
              </a>
            </p>
          ) : null,
          image: {
            src: urls.regular,
            description: alt_description ?? `Imagen capturada por ${user.name}`
          }
        }))
      )
      setIsLoading(false)
    }

    queryWord && callApi()
  }, [queryWord])

  return (
    <Site
      useDummyData={false}
      siteConfig={siteConfig}
      cards={loadedCards}
      isLoading={isLoading}
      onClick={word => setQueryWord(word)}
    />
  )
}

export default DemoPage
