import React from 'react';
const Banar = () => {
    return (
        <div>
            <div className="hero bg-base-200 w-11/12 mx-auto rounded-3xl p-8">
  <div className=" flex-col lg:flex-row-reverse w-full md:justify-around">
    <img
      src="/src/assets/hero_img.jpg"
      className="w-full rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="mt-3 md:text-5xl font-bold">Books to freshen up <br className='hidden md:block' /> your bookshelf</h1>
      <button className="btn btn-success rounded-md text-white p-3 mt-4">View The List</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banar;