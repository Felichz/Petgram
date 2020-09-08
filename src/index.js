import React from 'react';
import ReactDOM from 'react-dom';
import Context from './Context';

import { registerSw } from './registerSw';
import { ApolloProvider } from '@apollo/client';
import { client } from './apollo/client';

import { App } from './App';

const isDev = process.env.NODE_ENV === 'development';
// // Service worker
if (!isDev) registerSw();

ReactDOM.render(
    <Context.Provider>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </Context.Provider>,
    document.getElementById('root')
);
