import React, { useState, useEffect } from 'react'
import RightStar from '../../common/rightstar/RightStar'
import Vdst from '../../common/vdst/Vdst'
import Rememberme from '../../common/rememberme/Rememberme'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import axios from 'axios'
import { NewcredentialsSchema } from '../../schemas/NewcredentialsSchema'
import { useFormik } from 'formik'
import { basic_eye } from 'react-icons-kit/linea/basic_eye'
import { basic_eye_closed } from 'react-icons-kit/linea/basic_eye_closed'
import { circle_ok } from 'react-icons-kit/ikons/circle_ok'
import { circle_delete } from 'react-icons-kit/ikons/circle_delete'
import { view } from 'react-icons-kit/ikons/view'
import { view_off } from 'react-icons-kit/ikons/view_off'
import { Icon } from 'react-icons-kit'

const initialValues = {
  newPassword: '',
  reenterPassword: '',
}

const NewCredentials = () => {
  const [type, setType] = useState('password')
  // const [formData, setFormData] = useState({
  //   newPassword: '',
  //   reenterpassword: '',
  // })
  // const [formError, setFormError] = useState({})

  // const onChangeHandler = (event) => {
  //   console.log(event)
  //   if (event.target.name === 'languages') {
  //     let copy = { ...formData }

  //     if (event.target.checked) {
  //       copy.languages.push(event.target.value)
  //     } else {
  //       copy.languages = copy.languages.filter(
  //         (el) => el !== event.target.value
  //       )
  //     }

  //     setFormData(copy)
  //   } else {
  //     setFormData(() => ({
  //       ...formData,
  //       [event.target.name]: event.target.value,
  //     }))
  //   }
  // }

  // const validateForm = () => {
  //   let err = {}
  //   if (
  //     formData.newPasswordpassword === '' ||
  //     formData.reenterpassword === ''
  //   ) {
  //     err.newPassword = 'Password and Confirm Password required!'
  //   } else {
  //     if (formData.newPassword !== formData.reenterpassword) {
  //       err.reenterpassword = 'Password not matched!'
  //     } else {
  //       if (formData.newPassword.length < 6) {
  //         err.newPassword = 'Password should greater than 6 characters!'
  //       }
  //       let regex =
  //         /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/
  //       if (!regex.test(formData.newPassword)) {
  //         err.password = 'password not valid!'
  //       }
  //     }
  //   }

  //   setFormError({ ...err })

  //   return Object.keys(err).length < 1
  // }

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
  // const onSubmitHandlerNC = (event) => {
  //   event.preventDefault()
  //   console.log('Form Data:', formData)
  //   let isValid = validateForm()

  //   if (isValid) {
  //     alert('Submitted')
  //     //API call to server
  //   } else {
  //     alert('In-Valid Form')
  //   }
  //   console.log(isValid)
  // }

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: NewcredentialsSchema,
      validateOnChange: true,
      validateOnBlur: false,
      onSubmit: (values, action) => {
        action.resetForm()
        // fetch('http://localhost:8002/api/user/signIn', {
        //   method: 'POST',
        //   headers: {
        //     'content-type': 'application/json',
        //     Accept: 'application/json',
        //   },
        //   body: JSON.stringify(values),
        // })
        //   .then((res) => {
        //     if (res.status === 200) {
        //       alert('Successfully Signed In')
        //       // navigate('/success')
        //     } else alert('email or password wrong')
        //   })
        //   .catch((err) => {
        //     alert(err.response.data.error.message)
        //   })
      },
    })

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
          <form className="InputFormNC" onSubmit={handleSubmit}>
            <div className="NewPassword">
              <input
                className="NewPInput"
                type={type}
                onChange={(e) => handleChange(e.target.value)}
                placeholder="New password"
                name="newPassword"
                value={values.newPassword}
                onBlur={handleBlur}
              />
              {type === 'password' ? (
                <span className="icon-span" onClick={() => setType('text')}>
                  <Icon icon={view_off} size={18} />
                </span>
              ) : (
                <span className="icon-span" onClick={() => setType('password')}>
                  <Icon icon={view} size={18} />
                </span>
              )}
              {errors.newPassword && touched.newPassword ? (
                <p className="form-error">{errors.newPassword}</p>
              ) : null}
            </div>
            {/* <span className="non-valid">{formError.newPassword}</span> */}
            <div className="Re-enterPassword">
              <input
                type="password"
                className="NewPREInput"
                placeholder="Re-Enter Password"
                name="reenterPassword"
                value={values.reenterPassword}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.reenterPassword && touched.reenterPassword ? (
                <p className="form-error">{errors.reenterPassword}</p>
              ) : null}
            </div>
            {/* <span className="non-valid">{formError.reenterpassword}</span> */}
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
