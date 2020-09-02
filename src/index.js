import React from 'react';
import ReactDOM from 'react-dom';
import Context from './Context';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://petgram-server-hmcpzh3ov.vercel.app/graphql',
    cache: new InMemoryCache(),
});

import { App } from './App';

ReactDOM.render(
    <Context.Provider>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </Context.Provider>,
    document.getElementById('root')
);
