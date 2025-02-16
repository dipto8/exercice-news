import React from 'react'
import Header from '../Shared/Header/Header'
import RightNav from '../Shared/RightNav/RightNav'
import { useLoaderData, useLocation, useParams } from 'react-router-dom'
import Navbar from '../Home/Navbar/Navbar'

export default function News() {
    const newsLocation = useLocation()

    const {id} = useParams()


  return (
    <div>
        <Header></Header>
        <Navbar></Navbar>

        <div className="grid grid-cols-4">
            <div className="col-span-3">
                <h2 className='font-bold text-2xl'>News Details</h2>
                <p>{id}</p>
                <p>{}</p>
         
   

            </div>
            <div className=""> <RightNav></RightNav></div>
        </div>
      
    </div>
  )
}
