import { gql, useQuery } from '@apollo/client';

const GET_PHOTOS = gql`
    query getPhotos($categoryId: ID) {
        photos(categoryId: $categoryId) {
            id
            categoryId
            src
            likes
            liked
            userId
        }
    }
`;

export function useGetPhotos(categoryId) {
    const res = useQuery(GET_PHOTOS, {
        variables: { categoryId },
    });

    return {
        ...res,
        photos: res.data ? res.data.photos : [],
    };
}
