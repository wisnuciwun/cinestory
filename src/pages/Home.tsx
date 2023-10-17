import { Box, Button, Container, Divider, Pagination, TextField, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import request from '../config/request'
import { API_GET_MOVIES, DEFAULT_KEYWORD, MovieDetailResponse, MovieResponse, MoviesResponse } from '../constant'
import { Block, Form, Loading, MovieCard, MovieDetail, TextSpan } from '../components'
import { useNavigate } from 'react-router'
import { getQueryParams } from '../utils/getQueryParams'

function App() {
  const [movieList, setmovieList] = useState<MoviesResponse>()
  const [movieDetail, setmovieDetail] = useState<MovieDetailResponse | undefined>()
  const [openDetail, setopenDetail] = useState<boolean>(false)
  const [keyword, setkeyword] = useState<string>('')
  const [page, setpage] = useState<number>(1)
  const [notFound, setnotFound] = useState(false)
  const [errorMessage, seterrorMessage] = useState<string>('')
  const navigate = useNavigate()

  useEffect(() => {
    let searchParam = getQueryParams('search')
    let pageParam = getQueryParams('page')

    if (searchParam != null && pageParam != null) {
      setkeyword(searchParam)
      setpage(parseInt(pageParam))
    }

    if (window.location.pathname != '/' && (searchParam == null || pageParam == null)) {
      navigate('/')
    }

    onFetchMoviesOnLoad(searchParam || DEFAULT_KEYWORD, pageParam || '1')
  }, [])

  const onFetchDataDetail = (title: string) => {
    request.get(`${API_GET_MOVIES}&t=${title}`).then((res: any) => {
      setmovieDetail(res.data)
    })
  }

  const onFetchMoviesByKeyword = (e: any) => {
    e.preventDefault()
    setpage(1)
    navigate(`/result?search=${keyword}&page=1`)
    request.get(`${API_GET_MOVIES}&s=${keyword || DEFAULT_KEYWORD}&page=1`).then((res: any) => {
      if (res.data.Response != 'False') {
        setmovieList(res.data)
        if (notFound) {
          setnotFound(false)
        }
      } else {
        setnotFound(true)
        seterrorMessage(res.data.Error)
      }
    })
  }

  const onFetchMoviesOnLoad = (search: string, page: string) => {
    setpage(parseInt(page))
    setkeyword(search)
    request.get(`${API_GET_MOVIES}&s=${search}&page=${page.toString()}`).then((res: any) => {
      if (res.data.Response != 'False') {
        setmovieList(res.data)
      } else {
        window.location.replace('/')
      }
    })
  }

  const onFetchMoviesPage = (val: number) => {
    setpage(val)
    navigate(`/result?search=${keyword}&page=${val}`)
    let search = keyword != '' ? keyword : DEFAULT_KEYWORD
    request.get(`${API_GET_MOVIES}&s=${search}&page=${val}`).then((res: any) => {
      if (res.data.Response != 'False') {
        setmovieList(res.data)
      }
    })
  }

  return (
    <>
      <Container style={{ position: 'relative' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 3 }}>
          <Block className='pointer' onClick={() => {
            window.location.replace('/')
          }}>
            <Typography variant='h5' sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <TextSpan sx={{ fontSize: '35px' }} className="material-symbols-outlined">
                smart_display
              </TextSpan>
              Cinestory
            </Typography>
            <Typography variant='caption'>Where movies told his identity</Typography>
          </Block>
          <Box>
            <Form style={{ display: 'flex', alignItems: 'center', gap: '10px' }} onSubmit={(e) => onFetchMoviesByKeyword(e)}>
              <TextField size='small' onChange={(e) => setkeyword(e.target.value)} id="input-search" label="Find movie title" variant="outlined" />
              <Button variant='contained' type="submit" aria-label="search">
                <TextSpan className="material-symbols-outlined">
                  search
                </TextSpan>
              </Button>
            </Form>
            {
              notFound &&
              <Typography sx={{ position: 'absolute', fontSize: '12px', color: 'red' }} variant='body2'>{errorMessage}</Typography>
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
      {
        movieList != undefined &&
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, mb: 3 }}>
          <Pagination page={page} onChange={(e, page) => onFetchMoviesPage(page)} count={movieList?.totalResults != undefined ? Math.ceil(parseInt(movieList?.totalResults) / 10) : 0} showFirstButton showLastButton />
        </Box>
      }
    </>
  )
}

export default App
