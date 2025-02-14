import React from 'react'
import logo from '../../../assets/logo.png'
import moment from 'moment';

export default function Header() {
  return (
    <div className='text-center mt-4'>
        <img className='mx-auto' src={logo} alt="" />
        <p>Journalism Without Fear or Favour</p>
        <p>{   moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
    </div>
  )
}
