import React, { FC } from 'react'
import { SmallPokemon } from '../../../interfaces'
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import { useRouter } from 'next/router'

interface Props {
    pokemon: SmallPokemon
}

export const PokemonCard: FC<Props> = ({ pokemon }: Props) => {
  
  const router = useRouter();
  
  const onClick = () => {  
    router.push(`/name/${ pokemon.name }`);
  }

  return (
    <Grid item xs={12} sm={6} md={4} xl={2} key={pokemon.id}>
        <Card sx={{ maxWidth: 345, minHeight:320, padding: 1 }} onClick={ onClick }>
        <CardActionArea>
            <CardMedia
            component="img"
            sx={{ objectFit: 'cover' }}
            width="100%"
            height="100%"
            image={pokemon.img}
            alt={`image pokemon ${pokemon.name}`}
            />
            <CardContent>
            <Typography gutterBottom variant="h6" component="div">
                #{ pokemon.id } - {pokemon.name}
            </Typography>
            </CardContent>
        </CardActionArea>
        </Card>
    </Grid>
  )
}
