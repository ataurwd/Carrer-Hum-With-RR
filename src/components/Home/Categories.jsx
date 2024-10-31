import React from 'react';

const Categories = ({data}) => {
    return (
        <section>
            <div className='text-center mb-10 space-y-5'>
                <h1 className='font-extrabold text-4xl'>Job Category List</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='lg:px-32 grid lg:grid-cols-4 grid-cols-1 place-items-center mb-10'>
            {
                data.map((category) => (
                    <div key={category.id} className='space-y-1 cardBg p-8 rounded-xl'>
                        <img className='w-10 h-10 mb-2' src={category.logo} alt="" />
                        <h2 className='font-bold text-xl'>{category.category_name}</h2>
                        <p className='text-[#A3A3A3]'>{category.availability}</p>
                    </div>
                ))
            }
        </div>
        </section>
    );
};

export default Categories;