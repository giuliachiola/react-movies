import { useState, useEffect, useCallback } from 'react'
// Helpers
import { isPersistedState } from '../helpers'
import API, { Movie, Cast, Crew } from '../API'
// Types
export type MovieState = Movie & { actors: Cast[], directors: Crew[] }

export const useMovieFetch = (movieId: number) => {
  const [state, setState] = useState<MovieState>({} as MovieState)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const fetchMovie = useCallback(async () => {
    try {
      setLoading(true)
      setError(false)

      const movie = await API.fetchMovie(movieId.toString())
      const credits = await API.fetchCredits(movieId.toString())
      // Get directors only
      const directors = credits.crew.filter(member => member.job === 'Director')

      setState({
        ...movie,
        actors: credits.cast,
        directors,
      })

      setLoading(false)
    } catch (error) {
      setError(true)
    }
  }, [movieId])

  useEffect(() => {
    const sessionState = isPersistedState(movieId.toString())

    if (sessionState) {
      setState(sessionState)
      setLoading(false)
      return
    }

    fetchMovie()
  }, [movieId, fetchMovie])

  // write on session storage
  useEffect(() => {
    sessionStorage.setItem(movieId.toString(), JSON.stringify(state))
  }, [movieId, state])

  return { state, loading, error }
}