import * as React from 'react';
import { GetStaticProps } from 'next';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Grid } from '@mui/material';
import { Layout } from '@/components/layouts';
import { pokeApi } from '../../api';
import { PokemonListResponse, PokemonResponse, SmallPokemon } from '../../interfaces';
import { PokemonCard } from '@/components/pokemon';

interface Props {
  pokemons: SmallPokemon[];
}

export default function HomePage({ pokemons }: Props) {

  return (
    <Layout title='Lista de Pokemons'>
      <Container maxWidth="lg">
        <Box
          sx={{
            my: 4,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Grid container spacing={2}>
            { 
              pokemons.map((pokemon) => (
                <PokemonCard key={ pokemon.id } pokemon={ pokemon }/>
              ))
            }
          </Grid>
        </Box>
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');
  
  const pokemons: SmallPokemon[] = data.results.map((pokemon, index) => ({ 
    ...pokemon, 
    id: index + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`
  }));

  return {
    props: {
      pokemons
    }
  }
}