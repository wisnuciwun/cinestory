import Card from '@mui/material/Card';
import { MovieResponse } from '../../constant';
import { Chip } from '@mui/material';
import { useState } from 'react';

type MovieCardType = {
     data: MovieResponse,
     boolValue?: boolean,
     onClick?: React.Dispatch<React.SetStateAction<boolean>>
     onFetchDataDetail: Function
}

export default function MovieCard({ data, onClick = () => { }, boolValue, onFetchDataDetail }: MovieCardType) {
     const [elementTop, setelementTop] = useState('')
     const [elementBottom, setelementBottom] = useState('')
     return (
          <div className='pointer' onClick={() => {
               onClick(!boolValue)
               onFetchDataDetail(data.Title)
          }}>
               <Card sx={{ width: 222, height: 300, position: 'relative' }}>
                    <div onMouseLeave={() => {
                         setelementTop('')
                         setelementBottom('')
                    }}
                         onMouseOver={() => {
                              setelementTop(data.Title)
                              setelementBottom(data.Type)
                         }}
                         className='img-hover-zoom'>
                         {
                              elementTop != '' &&
                              <div className='movie-card-top'>
                                   {elementTop}
                              </div>
                         }
                         <img
                              src={data.Poster}
                              id={`Image : ${data.Title}`}
                              style={{ width: '100%', objectFit: 'cover' }}
                         />
                         {
                              elementBottom != '' &&
                              <Chip size='small' style={{ position: 'absolute', bottom: '0', right: '0', margin: 5 }} label={elementBottom} color="primary"></Chip>
                         }
                    </div>
               </Card>
          </div>
     );
}