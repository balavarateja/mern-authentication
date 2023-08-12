import React, { useState, useEffect } from 'react'
import '../passwordreset/NewCredentials.css'
import RightStar from '../../common/rightstar/RightStar'
import Vdst from '../../common/vdst/Vdst'
import Rememberme from '../../common/rememberme/Rememberme'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import axios from 'axios'

const NewCredentials = () => {
  const [formData, setFormData] = useState({
    newPassword: '',
    reenterpassword: '',
  })
  const [formError, setFormError] = useState({})

  const onChangeHandler = (event) => {
    console.log(event)
    if (event.target.name === 'languages') {
      let copy = { ...formData }

      if (event.target.checked) {
        copy.languages.push(event.target.value)
      } else {
        copy.languages = copy.languages.filter(
          (el) => el !== event.target.value
        )
      }

      setFormData(copy)
    } else {
      setFormData(() => ({
        ...formData,
        [event.target.name]: event.target.value,
      }))
    }
  }

  const validateForm = () => {
    let err = {}
    if (
      formData.newPasswordpassword === '' ||
      formData.reenterpassword === ''
    ) {
      err.newPassword = 'Password and Confirm Password required!'
    } else {
      if (formData.newPassword !== formData.reenterpassword) {
        err.reenterpassword = 'Password not matched!'
      } else {
        if (formData.newPassword.length < 6) {
          err.newPassword = 'Password should greater than 6 characters!'
        }
        let regex =
          /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/
        if (!regex.test(formData.newPassword)) {
          err.password = 'password not valid!'
        }
      }
    }

    setFormError({ ...err })

    return Object.keys(err).length < 1
  }

  // const handleChange = ({ target }) => {
  //   const { name, value } = target
  //   setPassword({ ...password, [name]: value })
  // }
  // const handleSubmit = async (e) => {
  //   e.preventDefault()

  //   const { error, message } = await resetPassword({
  //     newPassword: password.one,
  //     userId: id,
  //     token,
  //   })
  // }

  // const resetPassword = async (passwordInfo) => {
  //   try {
  //     const { data } = await axios.post(
  //       'http://localhost:8002/api/user/reset-password',
  //       passwordInfo
  //     )
  //     return data
  //   } catch (error) {
  //     const { response } = error
  //     if (response?.data) return response.data

  //     return { error: error.message || error }
  //   }
  // }
  const onSubmitHandlerNC = (event) => {
    event.preventDefault()
    console.log('Form Data:', formData)
    let isValid = validateForm()

    if (isValid) {
      alert('Submitted')
      //API call to server
    } else {
      alert('In-Valid Form')
    }
    console.log(isValid)
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
          <form className="InputFormNC" onSubmit={onSubmitHandlerNC}>
            <div className="NewPassword">
              <input
                className="NewPInput"
                type="password"
                placeholder="New password"
                name="newPassword"
                onChange={onChangeHandler}
                value={formData.newPassword}
              />
            </div>
            <span className="non-valid">{formError.newPassword}</span>
            <div className="Re-enterPassword">
              <input
                type="password"
                className="NewPREInput"
                placeholder="Re-Enter Password"
                name="reenterpassword"
                onChange={onChangeHandler}
                value={formData.reenterpassword}
              />
            </div>
            <span className="non-valid">{formError.reenterpassword}</span>
            <div className="NCB">
              <button className="NCBS" type="submit" value="Login">
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
