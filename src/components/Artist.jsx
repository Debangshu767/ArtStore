import React from 'react'

const Artist = () => {
  return (
    <div className='mt-9'>
        <h1 className='text-red-400 text-3xl p-2 font-bold text-center uppercase'>- Know the Artist -</h1>

        <div className='flex flex-col m-2  gap-4 max-w-[900px] items-center md:items-start  justify-center md:m-auto mb-11 bg-slate-50 p-4 rounded-lg md:flex-row shadow-lg shadow-red-200 ' >
            <div className='md:w-[50%]'>
            <img className='h-[300px] w-[600px]  rounded-lg m-2 object-cover ' src="https://images.unsplash.com/photo-1529066792305-5e4efa40fde9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXJ0aXN0fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" alt="" />
            </div>
            
            <div className=' flex flex-col gap-4 p-4 md:w-[50%]'>
                <h1 className='text-red-400 text-2xl font-bold '>Debangshu Batabyal</h1>
                <p className='text-justify text-xs text-slate-600'> Over the course of the past three years, I have been an integral member of my college's official e-media team, contributing my talents as a graphic designer. In recognition of my dedication and skill, I am honored to have been appointed as the Graphic Head for my final year. My journey thus far has allowed me to cultivate exceptional illustration and design abilities, underpinned by a discerning appreciation for what constitutes impactful design.</p>
                <p className='text-justify text-xs text-slate-600'> Over the course of the past three years, I have been an integral member of my college's official e-media team, contributing my talents as a graphic designer. In recognition of my dedication and skill, I am honored to have been appointed as the Graphic Head for my final year. My journey thus far has allowed me to cultivate exceptional illustration and design abilities, underpinned by a discerning appreciation for what constitutes impactful design.</p>
            </div>
        </div>

    </div>
  )
}

export default Artist