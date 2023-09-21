import React, { FC } from 'react';

import { Card, CardActionArea, CardMedia, Grid } from '@mui/material';
import { useRouter } from 'next/router';

type Props = {
    id: number;
}

export const FavoriteCardPokemons: FC<Props> = ({ id }: Props) => {
    
    const router = useRouter();

    const onFavoriteClicked = () => router.push(`/pokemon/${ id }`)

    return (
        <Grid item key={ id } xs={12} sm={6} md={4} xl={2}> 
            <CardActionArea onClick={onFavoriteClicked}>
                <Card sx={{ 
                    height: '250px',
                    width: '250px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <CardMedia
                        component="img"
                        image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                        alt="detail image"
                        sx={{
                        objectFit: 'scale-down',
                        padding: '20px'
                        }}
                    />
                </Card>
            </CardActionArea>
        </Grid>
    )
}
