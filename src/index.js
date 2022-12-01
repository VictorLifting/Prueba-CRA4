import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CeloProvider } from '@celo/react-celo';
import { BrowserRouter } from 'react-router-dom';
import '@celo/react-celo/lib/styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <BrowserRouter>
    <CeloProvider
      dapp={{
        name: 'DreamUp',
        description: 'Descentralizad platform',
        url: 'https://dreamup.com.co',
      }}
      connectModal={{
        // This options changes the title of the modal and can be either a string or a react element
        title: <span>Connect your Wallet</span>,
        providersOptions: {
          // This option hides specific wallets from the default list
          // hideFromDefaults: [
          //   SupportedProvider.MetaMask,
          //   SupportedProvider.PrivateKey,
          //   SupportedProvider.CeloExtensionWallet,
          //   SupportedProvider.Valora,
          // ],
    
          // This option hides all default wallets
         // hideFromDefaults: true,
    
          // This option toggles on and off the searchbar
          searchable: true,
        },
      }}
    >
    <App />
    </CeloProvider>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
