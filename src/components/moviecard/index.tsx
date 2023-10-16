import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { MovieResponse } from '../../constant';
import { Grid } from '@mui/material';

interface MovieCardType {
     data: MovieResponse,
     boolValue?: boolean,
     onClick?: React.Dispatch<React.SetStateAction<boolean>>
     onFetchDataDetail: Function
}

export default function MovieCard({ data, onClick = () => { }, boolValue, onFetchDataDetail }: MovieCardType) {
     return (
          <div className='pointer' onClick={() => {
               onClick(!boolValue)
               onFetchDataDetail()
          }}>
               <Card sx={{ width: 377 }}>
                    <div className='img-hover-zoom'>
                         <img
                              src={data.Poster}
                              id={`Image : ${data.Title}`}
                              style={{ width: '100%', objectFit: 'cover' }}
                         />
                    </div>
                    <CardContent>
                         <Typography className='text-overflow-two' gutterBottom variant="h5" component="div">
                              {data.Title}
                         </Typography>
                         <Typography variant="body2" color="text.secondary">
                              <Grid container spacing={0}>
                                   <Grid xs={2}>Tipe</Grid>
                                   <Grid xs={8}>: {data.Type}</Grid>
                              </Grid>
                              <Grid container spacing={0}>
                                   <Grid xs={2}>Tahun</Grid>
                                   <Grid xs={8}>:  {data.Year}</Grid>
                              </Grid>
                              <Grid container spacing={0}>
                                   <Grid xs={2}>IMDB ID</Grid>
                                   <Grid xs={8}>:   {data.imdbID}</Grid>
                              </Grid>
                         </Typography>
                    </CardContent>
               </Card>
          </div>
     );
}