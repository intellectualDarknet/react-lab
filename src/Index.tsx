import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles/style.scss'
import './styles/reset.scss'

const rootNode = document.getElementById('app')

console.log(rootNode)
if (rootNode != null) {
  createRoot(rootNode).render(<App />)
}
