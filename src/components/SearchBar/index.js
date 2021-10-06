import React, { useState, useEffect, useRef } from "react";

import { Wrapper, Content } from './SearchBar.styles'
import PropTypes from 'prop-types'

const SearchBar = ({ setSearchTerm }) => {
  const [state, setState] = useState('')
  const initial = useRef(true)

  // add delay
  useEffect(() => {
    if (initial.current) {
      initial.current = false
    }

    const timer = setTimeout(() => {
      setSearchTerm(state)
    }, 500)

    return () => clearTimeout(timer) // cleanup
  }, [state, setSearchTerm])

  return (
    <Wrapper>
      <Content>
        <img src="https://raw.githubusercontent.com/weibenfalk/react-rmdb-v3-starter-files/master/3.%20Project%20to%20start%20from%20-%20WITH%20Styles/react-rmdb-START-HERE/src/images/search-icon.svg" alt="search icon" />
        <input
          type="text"
          placeholder='Search movie'
          onChange={e => setState(e.currentTarget.value)}
          value={state}
        />
      </Content>
    </Wrapper>
  )
}

SearchBar.propTypes = {
  setSearchTerm: PropTypes.func,
}

export default SearchBar