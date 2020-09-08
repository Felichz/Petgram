import { ApolloClient, from, HttpLink } from '@apollo/client';

import { cache } from './cache';

import { authMiddleware } from './links/authMiddleware';
import { errorMiddleware } from './links/errorMiddleware';

export const client = new ApolloClient({
    cache,
    link: from([
        errorMiddleware,
        authMiddleware,
        new HttpLink({
            uri: 'https://petgram-server.felichz.vercel.app/graphql',
        }),
    ]),
});
