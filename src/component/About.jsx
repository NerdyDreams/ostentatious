import React from 'react'
import {NavLink} from 'react-router-dom'

function About() {
  return (
    <div>
    <div className='container py-5 my-5'>
      <div className="row">
      <div className='col-md-6'>
        <h1 className='text-primary fw-bold mb-4'> About Us</h1>
        <p className='lead mb-4'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit veniam debitis quibusdam provident modi corrupti! Natus quod repellat quisquam placeat, repudiandae commodi eveniet tempora. Sed nemo dolorem maiores nobis aliquid voluptates vel. Optio ipsum obcaecati amet sed nam perferendis eum possimus consequatur atque provident? Atque exercitationem deleniti, aliquam voluptate id, non itaque quos nesciunt ex sequi possimus voluptatibus dignissimos tempora quam animi eum esse, aperiam mollitia fugiat autem eveniet magni in. Aut, aliquid saepe? Porro repellendus voluptatibus blanditiis quae consectetur explicabo voluptates, voluptatem doloremque quisquam mollitia! Voluptates, praesentium iure? Neque repudiandae illo perspiciatis ipsum quod nulla ad tempore, natus debitis.
        </p>
        <NavLink to = "/contact" className="btn btn-outline-primary px-3">Contact Us</NavLink>
        </div>
        <div className='col-md-6 d-flex justify-content-center'>
          <img src="/assets/man.png" alt="About Us" height="400 px" width="400 px" />
        </div>
      </div>

    </div>
    </div>
  )
}

export default About