import React from 'react';

import { useGetFavs } from '../dataHooks/useGetFavs';

import { FavList as FavListComponent } from '../components/FavList';

export const FavList = () => {
    const { data, loading, error } = useGetFavs();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>An error has ocurred</p>;

    if (!data?.favs?.length) return <p>You do not have any favorites yet</p>;

    let favs = data.favs || [];

    return <FavListComponent favs={favs} />;
};
