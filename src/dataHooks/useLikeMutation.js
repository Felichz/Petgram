import { gql, useMutation } from '@apollo/client';

const LIKE_ANONYMOUS_PHOTO = gql`
    mutation LikeAnonymousPhoto($input: LikePhoto!) {
        likeAnonymousPhoto(input: $input) {
            id
            liked
            likes
        }
    }
`;

export function useLikeMutation() {
    const [useLikeMutation, res] = useMutation(LIKE_ANONYMOUS_PHOTO);

    return [
        useLikeMutation,
        {
            ...res,
            likeData: res.data ? res.data.likeAnonymousPhoto : {},
        },
    ];
}
