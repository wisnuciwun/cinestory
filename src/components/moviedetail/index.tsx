import { Box, Dialog, IconButton, Paper, SxProps, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import { MovieDetailResponse } from "../../constant";
import { Img, TextSpan } from "..";

type MovieDetail = {
     show: boolean;
     onClose: React.Dispatch<React.SetStateAction<boolean>>;
     data: MovieDetailResponse;
     setmovieDetail: React.Dispatch<React.SetStateAction<MovieDetailResponse | undefined>>
}

const closeButtonStyle: SxProps = { position: 'absolute', right: 0, backgroundColor: 'white', margin: 1 }

export default function MovieDetail({ show, onClose = () => { }, data, setmovieDetail }: MovieDetail) {
     let details: { key: string, value: string }[] = []
     let showDetails = []

     for (const [key, value] of Object.entries(data)) {
          if (key != "Ratings" && key != "Poster" && key != "Title" && key != "Response") {
               details.push({ key: key, value: `${value}` })
          }
     }

     showDetails.push(details.map((x, idx) => <TableRow key={idx}>
          <TableCell sx={{ p: 1 }}>{x.key}</TableCell>
          <TableCell sx={{ p: 1 }}><b>{x.value}</b></TableCell>
     </TableRow>))

     return (
          <>
               <Dialog onClose={() => {
                    onClose(!show)
                    setTimeout(() => {
                         setmovieDetail(undefined)
                    }, 200);
               }} open={show}>
                    <Box sx={{ padding: 2, width: '95%' }}>{data.Title}</Box>
                    <Img src={data?.Poster} alt="" />
                    <IconButton color="success" onClick={() => onClose(!show)} sx={closeButtonStyle} size="small">
                         <TextSpan className="material-symbols-outlined">
                              close
                         </TextSpan>
                    </IconButton>
                    <Box sx={{ padding: 1 }}>
                         <Typography variant="body2" color="text.secondary">
                              <TableContainer component={Paper}>
                                   <TableBody>
                                        {showDetails}
                                   </TableBody>
                              </TableContainer>
                         </Typography>
                    </Box>
               </Dialog>
          </>
     )
}
