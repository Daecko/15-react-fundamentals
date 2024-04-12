// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const inputRef = React.useRef()
  const [error,setError] = React.useState(null)
  const handleSubmit = (event) => {
    event.preventDefault();
    /* const username = event.target.elements[0].value;
    onSubmitUsername(username) */
    onSubmitUsername(inputRef.current.value)
  }
  const handleChange = (event) => {
    const isValid = event.target.value === event.target.value.toLowerCase()
    setError(isValid ? null : 'Username must be lower case')
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input onChange={handleChange} ref={inputRef} type="text" />
      </div>
      {error && <span style={{color:'red'}}>{error}</span>}
      <button disabled={Boolean(error)} type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
