import React from "react";
import { Link } from 'react-router-dom'
// Components
import { Image } from './Thumb.styles'
// Types
type Props = {
  image: string
  movieId?: string
  clickable: boolean
}

const Thumb: React.FC<Props> = ({ image, movieId, clickable }) => (
  <div>
    {
      clickable ? (
        <Link to={`/${movieId}`}>
          <Image src={image} alt='movie-thumb' />
        </Link>
      ) : (
        <Image src={image} alt='movie-thumb' />
      )
    }
  </div>
)

export default Thumb