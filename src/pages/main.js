import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'
// import './index.css'
import { KeplrProvider, Network, ShuttleProvider } from "@delphi-labs/shuttle";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

const stargazeChain = {
  name: 'Stargaze',
  chainId: 'stargaze-1',
  rpc: 'https://rpc.stargaze-apis.com/',
  rest: 'https://api.stargaze.silentvalidator.com/'
}

export default function Main() {
  return (
    ReactDOM.createRoot(document.getElementById('root')).render(
        <QueryClientProvider client={queryClient}>
          <ShuttleProvider
            providers={
              [
                  new KeplrProvider({
                    networks: [stargazeChain]
                  })
                ]
              }
            // Add the following prop if you want wallet connections
            // to be persisted to local storage.
              persistent
            >
              <App />
          </ShuttleProvider>
        </QueryClientProvider>
    )
  );
}