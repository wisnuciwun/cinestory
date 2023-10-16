import { Dialog } from "@mui/material";
import { MovieDetailResponse } from "../../constant";

interface MovieDetail {
     show: boolean;
     onClose: React.Dispatch<React.SetStateAction<boolean>>;
     data: MovieDetailResponse | undefined
}

export default function MovieDetail({ show, onClose = () => { }, data }: MovieDetail) {
     return (
          <>
               <Dialog onClose={() => onClose(!show)} open={show}>
                    dwkfbkjf
                    {JSON.stringify(data)}
               </Dialog>
          </>
     )
}
