import { Box, Dialog, Grid, IconButton, Typography } from "@mui/material";
import { MovieDetailResponse } from "../../constant";

type MovieDetail = {
     show: boolean;
     onClose: React.Dispatch<React.SetStateAction<boolean>>;
     data: MovieDetailResponse;
     setmovieDetail: React.Dispatch<React.SetStateAction<MovieDetailResponse | undefined>>
}

export default function MovieDetail({ show, onClose = () => { }, data, setmovieDetail }: MovieDetail) {
     let details: any[] = []
     let showDetails = []
     let first = 0
     let textsAmount = 10
     let last = textsAmount

     for (const [key, value] of Object.entries(data)) {
          if (key != "Ratings" && key != "Poster" && key != "Title" && key != "Response") {
               details.push({ key: key, value: `${value}` })
          }
     }

     for (let i = 0; i < (Math.round(details.length / textsAmount)); i++) {
          const slicePartition = 1

          // if (Math.round(details.length / textsAmount) <= 1)
          //      showDetails.push(<Box>{details.map(x => <Box><Grid xs={4} style={{ fontSize: '10pt' }}>{x.key}</Grid><Grid xs={8} style={{ fontSize: '10pt' }}><b>{x.value}</b></Grid></Box>)}</Box>)
          // else
          showDetails.push(details.slice(first, last).map(x => <Grid container spacing={0}>
               <Grid xs={2} style={{ fontSize: '10pt' }}>{x.key}</Grid>
               <Grid xs={10} style={{ fontSize: '10pt' }}><b>{x.value}</b></Grid>
          </Grid>))

          first = last + slicePartition
          last = last + textsAmount
     }
     return (
          <>
               <Dialog onClose={() => {
                    onClose(!show)
                    setTimeout(() => {
                         setmovieDetail(undefined)
                    }, 1000);
               }} open={show}>
                    <Box sx={{ padding: 2, width: '95%' }}>{data.Title}</Box>
                    <img src={data?.Poster} alt="" />
                    <IconButton color="success" onClick={() => onClose(!show)} sx={{ position: 'absolute', right: 0, backgroundColor: 'white', margin: 1, }} size="small">
                         <span className="material-symbols-outlined">
                              close
                         </span>
                    </IconButton>
                    <Box sx={{ padding: 1 }}>
                         <Typography variant="body2" color="text.secondary">
                              {showDetails}
                         </Typography>
                    </Box>
               </Dialog>
          </>
     )
}
