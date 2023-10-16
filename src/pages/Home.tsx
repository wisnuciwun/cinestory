import { Box, Container, Divider, TextField, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import request from '../config/request'
import { API_GET_MOVIES, MovieDetailResponse, MovieResponse, MoviesResponse } from '../constant'
import { MovieCard, MovieDetail } from '../components'
// import imgCourier from '../assets/courier.webp'

function App() {
  const [movieList, setmovieList] = useState<MoviesResponse>()
  const [movieDetail, setmovieDetail] = useState<MovieDetailResponse | undefined>()
  const [openDetail, setopenDetail] = useState<boolean>(false)

  useEffect(() => {
    request.get(API_GET_MOVIES).then((res: any) => {
      setmovieList(res.data)
    })
  }, [])

  const onFetchDataDetail = () => {
    request.get('https://www.omdbapi.com/?apikey=9708f5ab&t=The%20Batman').then((res: any) => {
      setmovieDetail(res.data)
    })
  }

  console.log("fff", movieList)

  return (
    <>
      <Container>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant='h2' sx={{ mb: 2 }}>Cinematix</Typography>
          <TextField id="input-search" label="Outlined" variant="outlined" />
        </Box>
        <Divider sx={{ mb: 2 }} />
        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'start', flexWrap: 'wrap', gap: '10px' }}>
          {
            movieList != undefined &&
            movieList?.Search.map((v: MovieResponse, id: number) => <MovieCard onFetchDataDetail={onFetchDataDetail} key={id} data={v} onClick={setopenDetail} boolValue={openDetail} />)
          }
        </Box>
        <MovieDetail data={movieDetail} onClose={setopenDetail} show={openDetail} />
      </Container>
    </>
  )
}

export default App
