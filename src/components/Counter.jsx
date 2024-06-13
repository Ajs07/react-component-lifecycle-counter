import React, { useState, useEffect } from 'react'

const Counter = ({ finishGame }) => {
  const [count, setCount] = useState(0)

  // useEffect diperlukan ketika kamu membutuhkan sistem eksternal, seperti menggambil data dari API dan manipulasi DOM secara manual yang berasal dari browser.
  
  // Tambahkan useEffect disini
  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress)
    return () => {
        window.addEventListener('keydown', handleKeyPress)
    }
  }, [count]) 

  const handleClick = () => {
    setCount(count + 1)
  }

  const handleKeyPress = (event) => {
    const { key } = event
    if (key === 'Enter') {
      setCount(count + 1)
    }
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