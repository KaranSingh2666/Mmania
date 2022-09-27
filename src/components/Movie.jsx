import React from 'react'

const Movie = ({movie}) => {
  return (
    <div className='relative h-[460px] w-[310px] cursor-pointer rounded-lg'>
    <div className='absolute text-white font-bold p-5'>{movie.Year}</div>
    <div className='w-full h-full'><img className='w-full h-full rounded-lg ' src={movie.Poster != 'N/A' ? movie.Poster : 'https://via.placeholder.com/400x400' } alt={movie.Title} /></div>

    <div className='absolute  bottom-0 left-0 right-0 text-yellow-200 bg-slate-600 px-5 space-y-1 py-4 rounded-b-lg'>
    <div className='text-black font-semibold'>{movie.Type}</div>
    <div className='text-xl'>{movie.Title}</div>
    </div>

    </div>
  )
}

export default Movie