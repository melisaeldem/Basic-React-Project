import React from 'react'

const Usercard = ({user}) => {
  return (
    <div className='col-lg-3 my-4'>
        <div className='card p-2'>
            <div className='card-img'>
                <img src={user.picture.large} alt="" className='w-100'></img>
            </div>
            <div className='card-content'>
                <p className='m-0'><strong>{user.name.title + ' '+ user.name.firt + ' ' + user.name.last}</strong></p>
                <p className='m-0'>Age: {user.dob.age}</p>
                <p className='m-0'>{user.email}</p>
                <p className='m-0'>{user.phone}</p>
            </div>
        </div>
    </div>
  )
}

export default Usercard