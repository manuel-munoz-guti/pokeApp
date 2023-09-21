import React, { useEffect, useState } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next'
import { Layout } from '@/components/layouts';
import { pokeApi } from '../../../api';
import { PokemonResponse } from '../../../interfaces';
import { Card, CardActionArea, CardContent, CardMedia, Box, Grid, Typography, CardActions, Button, Container } from '@mui/material';
import Image from 'next/image';
import { existPokemonInFavorites, toggleFavorites } from '@/utils/localFavorites';
import confetti from 'canvas-confetti';
import { getPokemonInfo } from '@/utils/getPokemonInfo';

interface Props {
    pokemon: PokemonResponse
}

export default function PokemonPage({ pokemon }: Props){

  const [isInFavorite, setIsInFavorite] = useState(false);

  useEffect(() => {
    setIsInFavorite( existPokemonInFavorites(pokemon.id) );    
  }, [pokemon.id])
  
  const handleOnToggleFavorite = () => {
    toggleFavorites( pokemon.id );
    setIsInFavorite(!isInFavorite);

    if(isInFavorite) return;

    confetti({ 
        zIndex: 999,
        particleCount: 100,
        spread: 160,
        angle: -100,
        origin: { 
            x: 1,
            y: 0,
        } 
    });
  }

  return (
    <Layout title={ pokemon.name }>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container sx={{ marginTop: '20px' }} spacing={1}>
                <Grid item xs={12} sm={4} sx={{ padding: '10px' }}>
                    <Card sx={{ maxWidth: 545 }}>
                        <CardActionArea>
                            <CardMedia
                              component="img"
                              width="100%"
                              height={ 500 }
                              image={ pokemon.sprites.other?.dream_world.front_default || '/no-image.png' }
                              alt={ pokemon.name }
                            />
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={ 12 } sm={ 8 } sx={{ padding: '10px' }}>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography variant="h3" component="div">
                             { pokemon.name }
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            Weight: { pokemon.weight }Kg
                            </Typography>
                            <Typography variant="body1">
                            Sprites:
                            </Typography>
                            <Container>
                                <Image 
                                    src={ pokemon.sprites.front_default }
                                    alt={ pokemon.name }
                                    width={ 200 }
                                    height={ 200 }
                                />
                                <Image 
                                    src={ pokemon.sprites.back_default }
                                    alt={ pokemon.name }
                                    width={ 200 }
                                    height={ 200 }
                                />
                                <Image 
                                    src={ pokemon.sprites.front_shiny }
                                    alt={ pokemon.name }
                                    width={ 200 }
                                    height={ 200 }
                                />
                                <Image 
                                    src={ pokemon.sprites.back_shiny }
                                    alt={ pokemon.name }
                                    width={ 200 }
                                    height={ 200 }
                                />
                            </Container>
                        </CardContent>
                        <CardActions>
                            <Button 
                              variant={ isInFavorite ? 'outlined' : 'contained'}
                              onClick={ handleOnToggleFavorite }
                            >
                             { isInFavorite ? 'QUITAR DE FAVORITOS' : 'AGREGAR A FAVORITOS' }
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const pokemonsFullIds = [...Array(151)].map((value, index) => (`${ index + 1 }`));

    return {
        paths: pokemonsFullIds.map( id => ({
            params: { id }
        })),
        fallback: false
    }
    // return {
    //     paths: [
    //         {
    //             params: { id: '1' }         
    //         },
    //         {
    //             params: { id: '2' }
    //         },
    //         {
    //             params: { id: '3' }
    //         }
    //     ],
    //     fallback: false
    // }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { id } = params as { id: string };

    return {
        props: {
            pokemon: await getPokemonInfo( id )
        }
    }
}