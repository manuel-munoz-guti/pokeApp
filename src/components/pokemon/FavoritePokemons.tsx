import React, { FC } from 'react';

import { Card, CardMedia, Grid } from '@mui/material';
import { FavoriteCardPokemons } from './';


type Props = {
  pokemons: number[];
}

export const FavoritePokemons: FC<Props> = ({ pokemons }: Props ) => {
  
  return (
    <Grid container spacing={2} style={{ padding: '20px' }}>
    { 
        pokemons.map((idPokemon, index) => <FavoriteCardPokemons key={index} id={ idPokemon }/>)
    }
    </Grid>
  )
}
