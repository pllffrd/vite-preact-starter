import {useState, useEffect} from 'preact/hooks' // eslint-disable-line node/file-extension-in-import
import api from 'redaxios'

api.defaults.baseURL = 'https://rickandmortyapi.com/api'

const useApi = (parameters) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const fetchData = async (parameters) => {
    setLoading(true)
    try {
      const response = await api.request(parameters)
      setData(response.data)
      setError(null)
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData(parameters)
  }, [])

  return {data, error, loading}
}

export default useApi
