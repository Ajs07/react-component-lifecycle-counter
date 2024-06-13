import React, { useState, useEffect } from 'react'

const Counter = ({ finishGame }) => {
  const [count, setCount] = useState(0)

  // useEffect diperlukan ketika kamu membutuhkan sistem eksternal, seperti menggambil data dari API dan manipulasi DOM secara manual yang berasal dari browser.
  
  // Tambahkan useEffect disini
  useEffect(() => {
    console.log('rendered')
    return () => {
      console.log('cleaned up')
    }
  }, []) // useEffect dapat memilki parameter ke-2 dan dapat menentukan dependency di situ. 
  /*Ketika kamu menentukan [count] sebagai sebuah dependency, useEffect akan dipanggil ketika awal render tapi proses re-render tidak akan terjadi jika nilai dari count tidak berubah.
  Dan jika kamu menentukan array([]) kosong sebagai dependency, useEffect akan dipanggil satu kali ketika awal render dan pada fase unmounting seperti yang dijelaskan pada video dibawah. */

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <h1 style={{ fontSize: '64px' }}>{count}</h1>
      <button
        style={buttonStyle}
        onClick={() => {
          handleClick()
        }}
      >
        +
      </button>
      <div>
        <button
          onClick={() => {
            finishGame()
          }}
          style={buttonStyle}
        >
          Finish Game
        </button>
      </div>
    </div>
  )
}

const buttonStyle = {
  fontSize: '32px',
  width: '200px',
  height: '48px',
  borderRadius: '4px',
  marginRight: '24px',
  marginLeft: '24px',
  marginTop: '30px',
  color: '#fff',
  backgroundColor: '#66ccff',
}

export default Counter