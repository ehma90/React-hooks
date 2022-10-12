import {useState, useEffect, useSyncExternalStore} from 'react'

function useFetch(url, options) {
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [data, setData] = useState(null)

    useEffect(() => {

        const FetchData = async (url, option) => {
            try {
                const resp = await fetch(url, option)
                const data = await resp.json()

                setData(data)
                setIsLoading(false)
            } catch (error) {
                setError(error)
                setIsLoading(false)
            }
        }

        FetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


    return (data, error, isLoading)
  
}

export default useFetch;
