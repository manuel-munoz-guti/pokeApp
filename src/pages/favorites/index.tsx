import { Layout } from '@/components/layouts';
import { FavoritePokemons } from '@/components/pokemon';
import { NoFavorites } from '@/components/ui';
import { getFavoritesPokemons } from '@/utils/localFavorites';

import React, { FC, useEffect, useState } from 'react'

const FavoritesPage: FC = () => {

  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(getFavoritesPokemons());
  }, []);

  return (
    <Layout title='Favoritos'>
      {
        (favoritePokemons.length === 0) 
          ? (<NoFavorites/>) 
          : (<FavoritePokemons pokemons={favoritePokemons}/>)
      }
    </Layout>
  )
}

export default FavoritesPage