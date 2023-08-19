import React, { useState, useEffect } from 'react'
import '../passwordreset/NewCredential.css'
import RightStar from '../../common/rightstar/RightStar'
import Vdst from '../../common/vdst/Vdst'
import Rememberme from '../../common/rememberme/Rememberme'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import axios from 'axios'
import { NewcredentialsSchema } from '../../schemas/NewcredentialsSchema'
import { useFormik } from 'formik'
import { circle_ok } from 'react-icons-kit/ikons/circle_ok'
import { circle_delete } from 'react-icons-kit/ikons/circle_delete'
import { view } from 'react-icons-kit/ikons/view'
import { view_off } from 'react-icons-kit/ikons/view_off'
import { Icon } from 'react-icons-kit'
import { colors } from '@mui/material'

const initialValues = {
  newPassword: '',
  reenterPassword: '',
}

const NewCredential = () => {
  const [type, setType] = useState('password')

  const { values, errors, touched, handleBlur, handleSubmit } = useFormik({
    initialValues,
    validationSchema: NewcredentialsSchema,
    validateOnChange: true,
    validateOnBlur: false,
    onSubmit: (values, action) => {
      action.resetForm()
    },
  })

  const [lowerValidated, setLowerValidated] = useState(false)
  const [upperValidated, setUpperValidated] = useState(false)
  const [numberValidated, setNumberValidated] = useState(false)
  const [specialValidated, setSpecialValidated] = useState(false)
  const [lengthValidated, setLengthValidated] = useState(false)

  const handleChange = (value) => {
    const lower = new RegExp('(?=.*[a-z])')
    const upper = new RegExp('(?=.*[A-Z])')
    const number = new RegExp('(?=.*[0-9])')
    const special = new RegExp('(?=.*[!@#$%^&*])')
    const length = new RegExp('(?=.{8,})')
    if (lower.test(value)) {
      setLowerValidated(true)
    } else {
      setLowerValidated(false)
    }
    if (upper.test(value)) {
      setUpperValidated(true)
    } else {
      setUpperValidated(false)
    }
    if (number.test(value)) {
      setNumberValidated(true)
    } else {
      setNumberValidated(false)
    }
    if (special.test(value)) {
      setSpecialValidated(true)
    } else {
      setSpecialValidated(false)
    }
    if (length.test(value)) {
      setLengthValidated(true)
    } else {
      setLengthValidated(false)
    }
  }

  return (
    <div className="NewCredentials">
      <div className="NCLeft">
        <div className="NCText">
          <h1 className="NCT1">New Credentials</h1>
          <br />
          <main className="tracker-box">
            <div className={lengthValidated ? 'validated' : 'not-validated'}>
              {lengthValidated ? (
                <span className="list-icon green">
                  <Icon icon={circle_ok} />
                </span>
              ) : (
                <span className="list-icon red">
                  <Icon icon={circle_delete} />
                </span>
              )}
              Password must be at least 8 characters long.
            </div>
            <div className={upperValidated ? 'validated' : 'not-validated'}>
              {upperValidated ? (
                <span className="list-icon green">
                  <Icon icon={circle_ok} />
                </span>
              ) : (
                <span className="list-icon red">
                  <Icon icon={circle_delete} />
                </span>
              )}
              Password must contain at least one upper case.
            </div>
            <div className={lowerValidated ? 'validated' : 'not-validated'}>
              {lowerValidated ? (
                <span className="list-icon green">
                  <Icon icon={circle_ok} />
                </span>
              ) : (
                <span className="list-icon red">
                  <Icon icon={circle_delete} />
                </span>
              )}
              One lower case letter.
            </div>

            <div className={numberValidated ? 'validated' : 'not-validated'}>
              {numberValidated ? (
                <span className="list-icon green">
                  <Icon icon={circle_ok} />
                </span>
              ) : (
                <span className="list-icon red">
                  <Icon icon={circle_delete} />
                </span>
              )}
              Password must contain at least one number
            </div>
            <div className={specialValidated ? 'validated' : 'not-validated'}>
              {specialValidated ? (
                <span className="list-icon green">
                  <Icon icon={circle_ok} />
                </span>
              ) : (
                <span className="list-icon red">
                  <Icon icon={circle_delete} />
                </span>
              )}
              At least one special character
            </div>
          </main>
        </div>

        <div className="NCForm">
          <form className="InputFormNC" onSubmit={handleSubmit}>
            <div className="NewPasswordNC">
              <input
                className="NewPInput"
                type={type}
                placeholder="New password"
                name="newPassword"
                onChange={(e) => handleChange(e.target.value)}
                // value={values.newPassword}
              />
              {/* {type === 'password' ? (
                <span className="icon-span" onClick={() => setType('text')}>
                  <Icon icon={view_off} size={18} />
                </span>
              ) : (
                <span className="icon-span" onClick={() => setType('password')}>
                  <Icon icon={view} size={18} />
                </span>
              )} */}
              {/* {errors.newPassword && touched.newPassword ? (
                <p className="form-error">{errors.newPassword}</p>
              ) : null} */}
            </div>
            {/* <span className="non-valid">{formError.newPassword}</span> */}
            <div className="Re-enterPassword">
              <input
                type={type}
                className="NewPREInput"
                placeholder="Re-Enter Password"
                name="reenterPassword"
                onChange={(e) => handleChange(e.target.value)}
              />
              {/* {type === 'password' ? (
                <span className="icon-span" onClick={() => setType('text')}>
                  <Icon icon={view_off} size={18} />
                </span>
              ) : (
                <span className="icon-span" onClick={() => setType('password')}>
                  <Icon icon={view} size={18} />
                </span>
              )} */}
              {/* {errors.reenterPassword && touched.reenterPassword ? (
                <p className="form-error">{errors.reenterPassword}</p>
              ) : null} */}
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

export default NewCredential
