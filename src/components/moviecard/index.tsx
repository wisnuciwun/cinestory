import Card from '@mui/material/Card';
import { MovieResponse } from '../../constant';
import { Chip, SxProps } from '@mui/material';
import { useState } from 'react';
import { Block, FlexCenter, Img } from '..';

type MovieCardType = {
     data: MovieResponse,
     boolValue?: boolean,
     onClick?: React.Dispatch<React.SetStateAction<boolean>>
     onFetchDataDetail: Function
}

const chipStyle: SxProps = { position: 'absolute', bottom: '0', right: '0', margin: 1, backgroundColor: 'black' }

export default function MovieCard({ data, onClick = () => { }, boolValue, onFetchDataDetail }: MovieCardType) {
     const [elementTop, setelementTop] = useState('')
     const [elementBottom, setelementBottom] = useState('')
     return (
          <Block className='pointer' onClick={() => {
               onClick(!boolValue)
               onFetchDataDetail(data.Title)
          }}>
               <Card sx={{ width: 222, height: 300, position: 'relative' }}>
                    <Block onMouseLeave={() => {
                         setelementTop('')
                         setelementBottom('')
                    }}
                         onMouseOver={() => {
                              setelementTop(data.Title)
                              setelementBottom(data.Year)
                         }}
                         className='img-hover-zoom'>
                         <Block hidden={elementTop != '' ? false : true} className='movie-card-top'>
                              {elementTop}
                         </Block>
                         {
                              data.Poster != 'N/A' ?
                                   <Img
                                        src={data.Poster}
                                        id={`Image : ${data.Title}`}
                                        style={{ width: '100%', objectFit: 'cover' }}
                                        alt={`Image ${data.Title}`}
                                   />
                                   :
                                   <FlexCenter className='img-not-found' sx={{ color: 'white' }}>Image not found</FlexCenter>
                         }
                         {
                              elementBottom != '' &&
                              <Chip size='small' sx={chipStyle} label={elementBottom} color="primary"></Chip>
                         }
                    </Block>
               </Card>
          </Block>
     );
}