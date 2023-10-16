import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'

interface DropdownType {
     title: string;
     fullWidth?: boolean;
     id: string;
}

export default function Dropdown({ title = '', fullWidth = false, id = 'dropdown-simple' }: DropdownType) {
     return (
          <>
               <FormControl fullWidth={fullWidth}>
                    <InputLabel id={id}>{title}</InputLabel>
                    <Select
                         labelId={id}
                         value={10}
                         label={title}
                    //   onChange={handleChange}
                    >
                         <MenuItem value={10}>Ten</MenuItem>
                         <MenuItem value={20}>Twenty</MenuItem>
                         <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
               </FormControl>
          </>
     )
}
