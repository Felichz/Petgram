import { onError } from '@apollo/client/link/error';
import swal from 'sweetalert';

import { userSession } from '../../Context';

function expireLogin() {
    userSession?.logout();
}

export const errorMiddleware = onError(({ networkError, graphQLErrors }) => {
    if (graphQLErrors) {
        switch (graphQLErrors[0].message) {
            case 'you must be logged in to perform this action':
                swal(
                    'Oops!',
                    'You must be logged in to perform this action',
                    'warning'
                );

                expireLogin();
                break;
            case 'user does not exist':
                expireLogin();
                break;
        }
    }

    if (networkError) {
        switch (networkError?.result.code) {
            case 'invalid_token':
                expireLogin();
                break;
        }
    }
});
