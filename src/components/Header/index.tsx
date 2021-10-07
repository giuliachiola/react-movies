import React from "react";
import { Link } from 'react-router-dom'

import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.styles'

const Header: React.FC = () => (
  <Wrapper>
    <Content>
      <Link to='/'>
        <LogoImg src='https://raw.githubusercontent.com/weibenfalk/react-rmdb-v3-starter-files/master/3.%20Project%20to%20start%20from%20-%20WITH%20Styles/react-rmdb-START-HERE/src/images/react-movie-logo.svg' alt='' />
      </Link>
      <TMDBLogoImg src='https://raw.githubusercontent.com/weibenfalk/react-rmdb-v3-starter-files/master/3.%20Project%20to%20start%20from%20-%20WITH%20Styles/react-rmdb-START-HERE/src/images/tmdb_logo.svg' alt='' />
    </Content>
  </Wrapper>
)

export default Header