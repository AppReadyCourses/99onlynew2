import React from 'react'

const CoursesList = () => {
  return (
    <div><div className=" flex flex-wrap gap-6 justify-center">
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://ik.imagekit.io/9kllv04exw/fullstack_react_coffeeshop.png?updatedAt=1718411631412"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          ReactJS & NodeJS Full-stack coffee project
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">ReactJS</div>
          <div className="badge badge-outline">NodeJS</div>
        </div>
        <div className="card-actions justify-end">
          <button className="btn bg-amber-500 text-black">Buy Now for ¢99 only!</button>
        </div>
      </div>
    </div>
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://ik.imagekit.io/9kllv04exw/Angular%20e-commerce.jpg?updatedAt=1718421707861"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Angular & NestJS Full-stack e-commerce
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Angular</div>
          <div className="badge badge-outline">NestJS</div>
        </div>
        <div className="card-actions justify-end">
          <button className="btn bg-amber-500 text-black">Buy Now for ¢99 only!</button>
        </div>
      </div>
    </div>
  </div></div>
  )
}

export default CoursesList