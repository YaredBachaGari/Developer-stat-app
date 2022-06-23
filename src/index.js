import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { GitHubProvider } from './context/context';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
  <React.StrictMode>
            <Auth0Provider 
            domain="dev-odnsp9j6.us.auth0.com"
            clientId="15ixTdvkNapGQ9LGnF6mlMwmxHnq2xGp"
            redirectUri={window.location.origin}
            cacheLocation = 'localstorage'
            >
                    <GitHubProvider>
                      <App />
                    </GitHubProvider>
            </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);











serviceWorker.unregister();
