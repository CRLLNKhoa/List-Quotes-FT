import React from 'react'

export default function loading() {
  return (
    <div className='flex justify-center items-center h-screen flex-col'>
        <div className="lds-ripple"><div></div><div></div></div>
        <h1 data-text="Đang tải dữ liệu..." className='select-none text-sm font-bold'>Đang tải dữ liệu...</h1>
    </div>
  )
}
