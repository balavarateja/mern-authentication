import React, { useState, useEffect } from 'react'
import '../passwordreset/NewCredentials.css'
import RightStar from '../../common/rightstar/RightStar'
import Vdst from '../../common/vdst/Vdst'
import Rememberme from '../../common/rememberme/Rememberme'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import axios from 'axios'

const NewCredentials = () => {
  const [password, setPassword] = useState({
    one: '',
    two: '',
  })
  const [isVerifying, setIsVerifying] = useState(false)
  const [isValid, setIsValid] = useState(false)
  const [searchParams] = useSearchParams()
  const token = searchParams.get('token')
  const id = searchParams.get('id')

  const navigate = useNavigate()

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

  const handleChange = ({ target }) => {
    const { name, value } = target
    setPassword({ ...password, [name]: value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()

    const { error, message } = await resetPassword({
      newPassword: password.one,
      userId: id,
      token,
    })
  }

  const resetPassword = async (passwordInfo) => {
    try {
      const { data } = await axios.post(
        'http://localhost:8002/api/user/reset-password',
        passwordInfo
      )
      return data
    } catch (error) {
      const { response } = error
      if (response?.data) return response.data

      return { error: error.message || error }
    }
  }

  return (
    <div className="NewCredentials">
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
                type="password"
                placeholder="New password"
                onChange={handleChange}
              />
            </div>
            <div className="Re-enterPassword">
              <input
                type="password"
                className="NPREInput"
                placeholder="Re-Enter Password"
                onChange={handleChange}
              />
            </div>
            <div className="NCB">
              <button
                className="NCBS"
                onClick={handleSubmit}
                type="submit"
                value="Login"
              >
                Submit
              </button>
            </div>
            <div className="NCCancel">
              <Link to="/">
                <button className="NCCB">Cancel</button>
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

export default NewCredentials
