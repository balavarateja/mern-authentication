import React, { useState, useEffect } from 'react'
import '../passwordreset/Token.css'
import RightStar from '../../common/rightstar/RightStar'
import Vdst from '../../common/vdst/Vdst'
import Rememberme from '../../common/rememberme/Rememberme'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import axios from 'axios'

const Token = () => {
  //   const [password, setPassword] = useState({
  //     one: '',
  //     two: '',
  //   })
  //   const [isVerifying, setIsVerifying] = useState(false)
  //   const [isValid, setIsValid] = useState(false)
  //   const [searchParams] = useSearchParams()
  //   const token = searchParams.get('token')
  //   const id = searchParams.get('id')

  //   const navigate = useNavigate()

  // useEffect(() => {
  //   isValidToken()
  // }, [])

  // const isValidToken = async () => {
  //   const { error, valid } = await verifyPasswordResetToken(token, id)
  //   setIsVerifying(false)
  //   if (error) {
  //     navigate('/auth/reset-password', { replace: true })
  //     return updateNotification('error', error)
  //   }

  //   if (!valid) {
  //     setIsValid(false)
  //     return navigate('/auth/reset-password', { replace: true })
  //   }

  //   setIsValid(true)
  // }

  //   const handleChange = ({ target }) => {
  //     const { name, value } = target
  //     setPassword({ ...password, [name]: value })
  //   }
  //   const handleSubmit = async (e) => {
  //     e.preventDefault()

  //     const { error, message } = await resetPassword({
  //       newPassword: password.one,
  //       userId: id,
  //       token,
  //     })
  //   }

  //   const resetPassword = async (passwordInfo) => {
  //     try {
  //       const { data } = await axios.post(
  //         'http://localhost:8002/api/user/reset-password',
  //         passwordInfo
  //       )
  //       return data
  //     } catch (error) {
  //       const { response } = error
  //       if (response?.data) return response.data

  //       return { error: error.message || error }
  //     }
  //   }

  const [token, setToken] = useState('')
  const [userId, setUserId] = useState('')
  const [newPassword, setNewPassword] = useState('')

  const handletToken = (e) => {
    setToken(e.target.value)
  }
  const handletTuserId = (e) => {
    setUserId(e.target.value)
  }
  const handleTPassword = (e) => {
    setNewPassword(e.target.value)
  }
  const handleSubmitT = (e) => {
    e.preventDefault()
    // const data = res.body
    axios
      .post('http://localhost:8002/api/user/reset-password', {
        token: token,
        userId: userId,
        newPassword: newPassword,
      })
      .then((response) => {
        console.log(response.data)
        alert('Password reset complete')
      })
      .catch((err) => {
        console.log(err)
        console.log(err.response)
        alert(err.response.data.error.message)
      })
  }

  return (
    <div className="Token">
      <div className="NCLeft">
        <div className="NCText">
          <h1 className="NCT1">New Credentials</h1>
          <h6 className="NCT2">Password must be at least 8 characters long.</h6>
          <h6 className="NCT3">
            Password must contain at least one upper case.
          </h6>
          <h6 className="NCT4">One lower case letter.</h6>
          <h6 className="NCT5">Password must contain at least one number or</h6>
          <h6 className="NCT6">special character</h6>
        </div>
        <div className="NCForm">
          <form className="InputFormNC">
            <div className="NewPassword">
              <input
                className="NPInput"
                type="text"
                placeholder="Token"
                onChange={handletToken}
              />
            </div>
            <div className="Re-enterPassword">
              <input
                type="email"
                className="NPREInput"
                placeholder="User Id"
                onChange={handletTuserId}
              />
            </div>
            <div className="Re-enterPassword">
              <input
                type="password"
                className="NPREInput"
                placeholder="Enter Password"
                onChange={handleTPassword}
              />
            </div>
            <div className="TB">
              <button
                className="TBS"
                onClick={handleSubmitT}
                type="submit"
                value="Login"
              >
                Submit
              </button>
            </div>
            <div className="TCancel">
              <Link to="/">
                <button className="TCB">Cancel</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
      <div className="NCRight">
        <RightStar></RightStar>
        <Vdst></Vdst>
        <Rememberme></Rememberme>
      </div>
    </div>
  )
}

export default Token
