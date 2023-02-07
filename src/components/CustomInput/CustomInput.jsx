import React from 'react'
import TextField from '@mui/material/TextField';

const CustomInput = ({label, onChange, value, readOnly,}) => {
  return (
    <div className=''>
        <TextField 
            label={label} 
            variant="outlined" 
            onChange={(e) => onChange(e.target.value)} 
            value={value}
            autoComplete='off'
            InputProps={{
              readOnly,
            }}
        />
    </div>
  )
}

export default CustomInput