import ReactDOM from 'react-dom/client'
import App from './App.jsx' 
import './index.css'

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import "@fortawesome/fontawesome-free/css/all.min.css"
const rootElement=ReactDOM.createRoot(document.getElementById('root'))

rootElement.render(<App/>)