import React from 'react'

const Modal = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose()
  }
  return (
    <>
      <div className='transition ease-in-out fixed inset-0 bg-black bg-opacity-30 bg-blur-sm flex justify-center items-center' onClick={handleClose} id="wrapper">
        <div className='w-[600px] flex flex-col'>
          <button className='text-black text-xl place-self-end hover:text-red-600 translate-y-9 -translate-x-5' onClick={() => onClose()}>X</button>
          <div className='bg-white p-2 rounded shadow'>{children}</div>
        </div>
      </div>
    </>
  )
}

export default Modal
