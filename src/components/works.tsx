import { Box, Button, Card, CardActions, CardContent, CardMedia, Stack, Typography } from '@mui/material'
import React from 'react'
import { workList } from '../data/works'

const Works: React.FC = () => {
  return (
    <div style={{ marginTop: 50 }}>
      <Typography variant='h5' className='title'>
        Works
      </Typography>
      <Box m='auto' mt={3} width={600} maxWidth='100%'>
        <Stack direction='row' flexWrap='wrap' justifyContent='space-around'>
          {workList.map((work) => (
            <Card sx={{ width: 270, margin: 1 }}>
              <CardMedia component='img' height='140' image={work.image} alt={work.alt ? work.alt : 'photo'} />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  {work.title}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  {work.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size='small' target='_blank' href={work.url}>
                  Learn More
                </Button>
              </CardActions>
            </Card>
          ))}
        </Stack>
      </Box>
    </div>
  )
}

export default Works
