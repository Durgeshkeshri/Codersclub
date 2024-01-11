import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Auth0Provider } from "@auth0/auth0-react";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-l5wh6xv6w6r15bxk.us.auth0.com"
    clientId="cZRAyTbzErSgeVVFFntBUytzP32x7j7x"
    redirectUri={window.location.origin}
  >  
    <div className="bg-zinc-950">
     <App/>
     </div>
  </Auth0Provider>,
  
)
