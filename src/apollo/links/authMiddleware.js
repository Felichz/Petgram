import { ApolloLink } from '@apollo/client';

export const authMiddleware = new ApolloLink((operation, forward) => {
    const token = sessionStorage.getItem('token');
    // add the authorization to the headers
    if (token) {
        operation.setContext({
            headers: {
                authorization: 'Bearer ' + sessionStorage.getItem('token'),
            },
        });
    }

    return forward(operation);
});
