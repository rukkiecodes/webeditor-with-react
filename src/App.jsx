import React, { useEffect } from 'react'
import Grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
import GrapesConfig from "./GrapesConfig"
import './App.css'

function App () {
  useEffect(() => { loadGrapesJs() })
  const loadGrapesJs = async () => {
    const editor = await Grapesjs.init(GrapesConfig())
  }
  return (
    <div className="App">
      <div id="gjs">
        <h1>Hello world component</h1>
      </div>
    </div>
  )
}

export default App
