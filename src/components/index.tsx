import MovieCard from "./moviecard";
import MovieDetail from "./moviedetail";
import Loading from "./loading";
import { styled } from '@mui/material/styles';

const Form = styled('form')(() => ({
     position: 'relative',
}));

const Block = styled('div')(() => ({
     display: 'block'
}));

const FlexCenter = styled('div')(() => ({
     display: 'flex',
     justifyContent: 'center',
     alignItems: 'center'
}));

const TextSpan = styled('span')(() => ({}));
const Img = styled('img')(() => ({}));

export { MovieCard, MovieDetail, Loading, Block, FlexCenter, Form, TextSpan, Img }