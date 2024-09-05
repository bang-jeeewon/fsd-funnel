import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { baseLayout } from './app/layouts/baseLayout'

const App = () => {
  return <Router>{baseLayout}</Router>
}

export default App
