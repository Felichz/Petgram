import React from 'react';
import ReactDOM from 'react-dom';
import Context from './Context';

import {
    ApolloProvider,
    ApolloClient,
    from,
    HttpLink,
    InMemoryCache,
} from '@apollo/client';

import { authMiddleware } from './apollo/links/authMiddleware';
import { errorMiddleware } from './apollo/links/errorMiddleware';

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: from([
        errorMiddleware,
        authMiddleware,
        new HttpLink({
            uri: 'https://petgram-server-hmcpzh3ov.vercel.app/graphql',
        }),
    ]),
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
