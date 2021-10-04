import React, { useState, useEffect } from "react";

// Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config'
// Components

// Hooks
import { useHomeFetch } from '../hooks/useHomeFetch'
import HeroImage from "./HeroImage";
import Grid from './Grid'
import Thumb from './Thumb'

const NoImage = 'https://github.com/weibenfalk/react-rmdb-v3-starter-files/blob/master/3.%20Project%20to%20start%20from%20-%20WITH%20Styles/react-rmdb-START-HERE/src/images/no_image.jpg'

const Home = () => {
  const { state, loading, error } = useHomeFetch()

  console.log(state)

  return (
    <>
      {
        state.results[0] &&
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      }
      <Grid header='Popular movies'>
        {state.results.map(movie => (
          <Thumb
            key={movie.id}
            clickable
            image={movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path : NoImage}
            movieId={movie.id}
          />
        ))}
      </Grid>
    </>
  )
}

export default Home