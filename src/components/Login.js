import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import API from '../API'
// Components
import Button from './Button'
// Styles
import { Wrapper } from './Login.styles'
// Context
import { Context } from '../context'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  const [_user, setUser] = useContext(Context)
  const navigate = useNavigate()

  const handleInput = (e) => {
    const name = e.curentTarget.name // e.g. 'username'
    const value = e.curentTarget.value // e.g. 'giulia'

    if (name === 'username') setUsername(value)
    if (name === 'password') setPassword(value)
  }

  const handleSubmit = async (e) => {
    setError(false)

    try {
      const requestToken = await API.getRequestToken()
      const sessionId = await API.authenticate(
        requestToken,
        username,
        password
      )

      setUser({
        sessionId: sessionId.sessionId,
        username,
      })

      navigate('/')
    } catch (error) {
      setError(true)
    }
  }

  return (
    <Wrapper>
      {error && <div className='error'>Something went wrong</div>}
      <label>Username</label>
      <input type="text" value={username} name='username' onChange={handleInput} />
      <label>Password</label>
      <input type="password" value={password} name='password' onChange={handleInput} />
      <Button text='Login' callback={handleSubmit} />
    </Wrapper>
  )
}

export default Login