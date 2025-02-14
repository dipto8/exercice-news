import React from 'react'

export default function NewsCard({news}) {
    const {title, image_url,details} = news
  return (
    <div className=''>
              <div className="card w-96 bg-base-100 shadow-lg  mb-16 p-2">
                <div className="card-body">
                  <h2 className="card-title"></h2>
                  <p className='text-'>{title}</p>
                </div>
                <figure>
                  <img
                    src={image_url}
                    alt="Shoes"
                  />
                </figure>

                <p>{details}</p>
              </div>
      
    </div>
  )
}
