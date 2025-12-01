import React from 'react'

interface ProductGridSkeletonProps{
    numberOfItems: number;
}

export const ProductGridSkeleton = ( {numberOfItems} : ProductGridSkeletonProps) => {
  return <div className="my-20">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8 animate-pulse">
        {Array.from({length : numberOfItems }).map((_, index) => (
            <div key={index}  className='bg-gray-200 h-[250px]'/>
        ))}
    </div>
  </div>
}
