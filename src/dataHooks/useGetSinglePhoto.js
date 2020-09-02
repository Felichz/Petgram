import { gql, useQuery } from '@apollo/client';

const GET_SINGLE_PHOTO = gql`
    query getSinglePhoto($id: ID!) {
        photo(id: $id) {
            id
            src
            likes
            liked
        }
    }
`;

export function useGetSinglePhoto(id) {
    const res = useQuery(GET_SINGLE_PHOTO, {
        variables: { id },
    });

    return {
        ...res,
        photo: res.data ? res.data.photo : {},
    };
}
