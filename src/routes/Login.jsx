import { useCallback, useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useUserContext } from '../components/userContext'
import InfoInput from '../components/InfoInput'
function Login() {
  const navigate = useNavigate()
  const userContext = useUserContext()

  const [email, setEmail] = useState('')
  const handleSetEmail = (e) => setEmail(e.target.value)

  const [password, setPassword] = useState('')
  const handleSetPassword = (e) => setPassword(e.target.value)

  const handleLogin = useCallback(() => {
    fetch(`http://localhost:5000/users?email=${email}&password=${password}`)
      .then((r) => r.json())
      .then((users) => {
        if (users.length === 1) {
          userContext.setUser(users[0])
        } else {
          alert('User data invalid')
        }
      })
  }, [email, password, userContext])

  useEffect(() => {
    if (userContext.user?.email) {
      navigate('/about')
    }
  }, [userContext.user, navigate])

  return (
    <div className="flex flex-col items-center gap-1 mt-10">
      <InfoInput
        title="Log in"
        type1="email"
        type3="password"
        placeholder1="email"
        value1={email}
        onChange1={handleSetEmail}
        placeholder3="password"
        value3={password}
        onChange3={handleSetPassword}
      />

      <div className="flex flex-col items-center">
        <button
          className="text-2xl py-2 px-10  bg-[#E98074] rounded-full text-[#EAE7DC] hover:bg-[#E85A4F] my-6"
          onClick={handleLogin}
        >
          Log in
        </button>
        <div className="text-[#8E8D8A] flex flex-row gap-3">
          New here?{' '}
          <Link to="/register" className="text-[#E85A4F]">
            Create an account.
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login
