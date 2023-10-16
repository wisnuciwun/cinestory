import { Backdrop, CircularProgress, SxProps } from '@mui/material'

const backdropStype: SxProps = { color: '#fff', zIndex: (theme: any) => theme.zIndex.drawer + 1 }

export default function Loading() {
     return (
          <>
               <Backdrop
                    sx={backdropStype}
                    open={true}
               >
                    <CircularProgress color="inherit" />
               </Backdrop>
          </>
     )
}
