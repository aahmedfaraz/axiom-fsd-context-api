import React from 'react'
import './app.css'
// components
import Form from './components/form/Form'
import Students from './components/students/Students'
// State
import GlobalState from './context/global/GlobalState'

const App = () => {

  return (
    <GlobalState>
      <div>
        <h1>Axiom Students</h1>
        <Form />
        <Students />
      </div>
    </GlobalState>
  )
}

export default App;