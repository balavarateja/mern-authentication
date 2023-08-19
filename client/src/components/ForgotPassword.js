import React, { useState } from 'react'
import '../components/ForgotPassword.css'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import RightStar from '../common/rightstar/RightStar'
import Forgottext from '../common/forgottext/Forgottext'
import Rememberme from '../common/rememberme/Rememberme'
import Vdst from '../common/vdst/Vdst'
import axios from 'axios'
import { useFormik } from 'formik'
import { ForgotpasswordSchema } from '../schemas/ForgotpasswordSchema'

const ForgotPassword = () => {
  // const [email, setEmail] = useState('')

  // const handleFPEmailId = (e) => {
  //   setEmail(e.target.value)
  // }
  const navigate = useNavigate('')
  // const handleSubmitFP = (e) => {
  //   e.preventDefault()
  //   axios
  //     .post('http://localhost:8002/api/user/forgot-password', {
  //       email: email,
  //       headers: {
  //         'content-type': 'application/json',
  //         Accept: 'application/json',
  //       },
  //     })
  //     .then((response) => {
  //       console.log(response.data)
  //       alert('Successfully Link sent')
  //       navigate('/token')
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //       console.log(err.response)
  //       alert(err.response)
  //     })
  // }

  const initialValues = {
    email: '',
  }

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: ForgotpasswordSchema,
      validateOnChange: true,
      validateOnBlur: false,
      onSubmit: (values, action) => {
        action.resetForm()
        // axios
        //   .post('http://localhost:8002/api/user/forgot-password', {
        //     body: JSON.stringify(values),
        //     headers: {
        //       'content-type': 'application/json',
        //       Accept: 'application/json',
        //     },
        //   })
        //   .then((response) => {
        //     console.log(response.data)
        //     alert('Successfully Link sent')
        //     navigate('/token')
        //   })
        //   .catch((err) => {
        //     console.log(err)
        //     console.log(err.response)
        //     alert(err.response)
        //   })
        fetch('http://localhost:8002/api/user/forgot-password', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(values),
        })
          .then((res) => {
            if (res.status === 200) {
              alert('Successfully Link sent to email')
              // navigate('/success')
            } else alert('email id wrong or email id not found')
          })
          .catch((err) => {
            alert(err.response.data.error.message)
          })
      },
    })

  return (
    <div className="FP">
      <Forgottext></Forgottext>
      <div className="FPLeft">
        <div className="A">
          <form onSubmit={handleSubmit}>
            <div className="ForgetEmail">
              <input
                className="ForgetEmailInput"
                type="email"
                // value={email}
                // onChange={handleFPEmailId}
                placeholder="Email Id"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              ></input>
              {errors.email && touched.email ? (
                <p className="form-error-1">{errors.email}</p>
              ) : null}
            </div>

            <div className="SUBFP">
              <button className="SIBFP" type="submit" value="Login">
                Request reset password link
              </button>
            </div>
          </form>
          <div className="FPB">
            <Link to="/">
              <button className="FPCancel">Cancel</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="FPRight">
        <RightStar></RightStar>
        <Vdst></Vdst>
        <Rememberme></Rememberme>
      </div>
    </div>
  )
}

export default ForgotPassword
