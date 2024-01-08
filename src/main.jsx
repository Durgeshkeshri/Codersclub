import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Auth0Provider } from "@auth0/auth0-react";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-qwvq1y6qmiwgpm6x.us.auth0.com"
    clientId="0l9fDehoCHun5pEMI3CDfYjsmObA8Xd8"
    redirectUri={window.location.origin}
  >  
  <React.StrictMode>  
    <div className="bg-zinc-950">
     <App/>
     </div>
  </React.StrictMode>
  </Auth0Provider>,
  
)
