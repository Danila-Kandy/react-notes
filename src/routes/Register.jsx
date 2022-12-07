import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import InfoInput from '../components/InfoInput'

function Register() {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const handleSetEmail = (e) => setEmail(e.target.value)

  const [name, setName] = useState('')
  const handleSetName = (e) => setName(e.target.value)

  const [password, setPassword] = useState('')
  const handleSetPassword = (e) => setPassword(e.target.value)

  const [repeatPass, setRepeatPass] = useState('')
  const handleSetRepeatPass = (e) => setRepeatPass(e.target.value)

  const handleRegister = () => {
    const user = {
      name: name,
      email: email,
      password: password,
      createdAt: new Date().toLocaleString(),
    }

    let result
    fetch(`http://localhost:5000/users?name=${name}`)
      .then((r) => r.json())
      .then((users) => {
        if (users.length === 1) {
          alert('A user with this name already exists')
          result = 0
        } else {
          result = 1
        }
      })

    if (result) {
      if (
        password === repeatPass &&
        email !== '' &&
        name !== '' &&
        password !== ''
      ) {
        fetch(`http://localhost:5000/users`, {
          method: 'POST',
          body: JSON.stringify(user),
          headers: {
            'Content-type': 'application/json',
          },
        }).then(() => {
          navigate('/login')
        })
      } else {
        alert('Check the entered data!')
      }
    }
  }

  return (
    <div className="flex flex-col items-center gap-1 mt-10">
      <div className="flex flex-col  mt-4 gap-3">
        <InfoInput
          title="Sign up"
          type1="email"
          type2="name"
          type3="password"
          placeholder1="email"
          value1={email}
          onChange1={handleSetEmail}
          placeholder2="name"
          value2={name}
          onChange2={handleSetName}
          placeholder3="password"
          value3={password}
          onChange3={handleSetPassword}
        />
        <div>
          <input
            className="bg-[#EAE7DC] focus:outline-none focus:ring focus:ring-[#E98074] font-[400]  text-[#8E8D8A] text-2xl border-4 border-[#E85A4F]/50 w-[400px] py-3 px-4 rounded-lg"
            placeholder="repeat password"
            type="password"
            value={repeatPass}
            onChange={handleSetRepeatPass}
          />
        </div>
      </div>
      <button
        className="text-2xl py-2 px-10  bg-[#E98074] rounded-full text-[#EAE7DC] hover:bg-[#E85A4F] my-6"
        onClick={handleRegister}
      >
        Sign up
      </button>
    </div>
  )
}

export default Register
