import theme from '@/utils/theme';
import { Box, Link, Typography } from '@mui/material';
import Image from 'next/image';
import NextLink from 'next/link';
import React, { FC } from 'react'

export const Navbar: FC = () => {

  return (
    <Box style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0px 20px',
        backgroundColor: theme.palette.grey[900]
    }}>
        <Box style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'start',
            alignItems: 'center'
        }}>
            <Image 
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
                alt="icono de la app"
                width={70}
                height={70}
            />
            <Link component={ NextLink } href="/" underline="none">
                <div style={{ display:'flex', flexDirection:'row', alignItems:'center' }}>
                    <Typography variant='h3' color='white'>P</Typography>
                    <Typography variant='h4' color='white'>okemon</Typography>
                </div>
            </Link>
        </Box>
        <Box style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'end',
            alignItems: 'center'
        }}>
            <Link component={ NextLink } href="/favorites" underline="none">
                <Typography variant='h6'>Favoritos</Typography>
            </Link>
        </Box>
    </Box>
  )
}
