import React from 'react';
import { TextField, Grid, InputAdornment, IconButton } from '@material-ui/core';
import { FiEye, FiEyeOff } from 'react-icons/fi'

const InputForm = ({ handleChange, name, label, autoFocus, type, handleShowPassword, half }) => {

    return (
        <Grid item xs={12} sm={half ? 6 : 12}>
            <TextField 
                name={name}
                onChange={handleChange}
                variant="outlined"
                required
                fullWidth
                label={label}
                autoFocus={autoFocus}
                type={type}
                InputProps={name === 'password' ? {
                   endAdornment: (
                       <InputAdornment position="end">
                           <IconButton onClick={handleShowPassword}>
                               {type === 'password' ? <FiEye /> : <FiEyeOff />}
                           </IconButton>
                       </InputAdornment>
                   )
                } : null } 
            />
        </Grid>
    )
}

export default InputForm
