import React from 'react';
import ReactDOM from 'react-dom';
import Context from './Context';

import { ApolloProvider } from '@apollo/client';
import { client } from './apollo/client';

import { App } from './App';

ReactDOM.render(
    <Context.Provider>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </Context.Provider>,
    document.getElementById('root')
);
