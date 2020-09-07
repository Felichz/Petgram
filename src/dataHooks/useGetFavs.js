import { gql, useQuery } from '@apollo/client';

const GET_FAVS = gql`
    query getFavs {
        favs {
            id
            categoryId
            src
            likes
            userId
        }
    }
`;

export const useGetFavs = () =>
    useQuery(GET_FAVS, { fetchPolicy: 'network-only' });
