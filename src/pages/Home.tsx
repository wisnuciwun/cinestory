import { Box, Button, Container, Divider, Pagination, TextField, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import request from '../config/request'
import { MovieDetailResponse, MovieResponse, MoviesResponse } from '../constant'
import { Loading, MovieCard, MovieDetail } from '../components'
import { useNavigate } from 'react-router'
import { getQueryParams } from '../utils/getQueryParams'

function App() {
  const [movieList, setmovieList] = useState<MoviesResponse>()
  const [movieDetail, setmovieDetail] = useState<MovieDetailResponse | undefined>()
  const [openDetail, setopenDetail] = useState<boolean>(false)
  const [keyword, setkeyword] = useState<string>('')
  const [page, setpage] = useState<number>(1)
  const [notFound, setnotFound] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    let searchParam = getQueryParams('search') || 'batman'
    let pageParam: string = getQueryParams('page') || '1'

    if (searchParam != null && pageParam != null) {
      setkeyword(searchParam)
      setpage(parseInt(pageParam))
    }

    if (window.location.pathname != '/') {
      navigate('/')
    }

    onFetchMoviesOnLoad(searchParam, pageParam)
  }, [])

  const onFetchDataDetail = (title: string) => {
    request.get(`https://www.omdbapi.com/?apikey=9708f5ab&t=${title}`).then((res: any) => {
      setmovieDetail(res.data)
    })
  }

  const onFetchMoviesByKeyword = (e: any) => {
    e.preventDefault()
    setpage(1)
    navigate(`/result?search=${keyword}&page=1`)
    request.get(`https://www.omdbapi.com/?apikey=9708f5ab&s=${keyword}&page=1`).then((res: any) => {
      if (res.data.Response != 'False') {
        setmovieList(res.data)
        if (notFound) {
          setnotFound(false)
        }
      } else {
        setnotFound(true)
      }
    })
  }

  const onFetchMoviesOnLoad = (search: string, page: string) => {
    setpage(parseInt(page))
    setkeyword(search)
    request.get(`https://www.omdbapi.com/?apikey=9708f5ab&s=${search}&page=${page.toString()}`).then((res: any) => {
      if (res.data.Response != 'False') {
        setmovieList(res.data)
      }
    })
  }

  const onFetchMoviesPage = (val: number) => {
    setpage(val)
    navigate(`/result?search=${keyword}&page=${val}`)
    let search = keyword != '' ? keyword : 'Batman'
    request.get(`https://www.omdbapi.com/?apikey=9708f5ab&s=${search}&page=${val}`).then((res: any) => {
      if (res.data.Response != 'False') {
        setmovieList(res.data)
      }
    })
  }

  return (
    <>
      <Container style={{ position: 'relative' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 3 }}>
          <Typography variant='h5'>Cinematix.</Typography>
          <Box>
            <form style={{ display: 'flex', alignItems: 'center', gap: '10px' }} onSubmit={(e) => onFetchMoviesByKeyword(e)}>
              <TextField size='small' onChange={(e) => setkeyword(e.target.value)} id="input-search" label="Find movie title" variant="outlined" />
              <Button variant='contained' type="submit" aria-label="search">
                <span className="material-symbols-outlined">
                  search
                </span>
              </Button>
            </form>
            {
              notFound &&
              <Typography sx={{ position: 'absolute', fontSize: '12px', color: 'red' }} variant='body2'>Movie not found</Typography>
            }
          </Box>
        </Box>
        <Divider sx={{ mb: 2, mt: 3 }} />
        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px' }}>
          {
            movieList != undefined ?
              movieList?.Search.map((v: MovieResponse, id: number) => <MovieCard onFetchDataDetail={onFetchDataDetail} key={id} data={v} onClick={setopenDetail} boolValue={openDetail} />)
              :
              <Loading />
          }
        </Box>
        {
          movieDetail != undefined ?
            <MovieDetail setmovieDetail={setmovieDetail} data={movieDetail} onClose={setopenDetail} show={openDetail} />
            :
            (
              openDetail &&
              <Loading />
            )
        }
      </Container>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, mb: 3 }}>
        <Pagination page={page} onChange={(e, page) => onFetchMoviesPage(page)} count={movieList?.totalResults != undefined ? Math.ceil(parseInt(movieList?.totalResults) / 10) : 0} showFirstButton showLastButton />
      </Box>
    </>
  )
}

export default App
