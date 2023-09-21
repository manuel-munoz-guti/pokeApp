import React from 'react';
import { Container, Typography } from '@mui/material';
import Image from 'next/image';

export const NoFavorites = () => {
  return (
    <Container sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        height: 'calc(100vh - 100px)'
      }}>
        <Typography variant='h1'>No hay favoritos</Typography>
        <Image 
          src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg'
          alt='ditto'
          height={250}
          width={250}
          style={{
            opacity: 0.1
          }}
        />
      </Container>
  )
}
