import React, { useState } from 'react'
import useStyles from './styles'
import { useDispatch } from 'react-redux'
import { Container, Grid, Typography, Avatar, Paper, Button } from '@material-ui/core';
import { GoogleLogin } from 'react-google-login';
import { FiLock } from 'react-icons/fi';
import { useHistory } from 'react-router-dom'
import InputForm from './InputForm'
import Icon from './icon'
import { signin, signup } from '../../actions/auth'

const newUser = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' }

const Auth = () => {
    const classes = useStyles();
    const history = useHistory();
    const [showPassword, setShowPassword] = useState(false)
    const [isSignup, changeSignup] = useState(false);
    const [formData, setFormData] = useState(newUser)
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(isSignup) {
            dispatch(signup(formData, history))
        } else {
            dispatch(signin(formData, history))
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    };

    const handleShowPassword = () => setShowPassword(!showPassword);

    const switchMode = () => {
        changeSignup(!isSignup);
        setShowPassword(false);
    }
    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;

        try {
            dispatch({ type: 'AUTH', data: { result, token } })
            history.push('/')
        } catch (error) {
            console.log(error)
        }
    }
    const googleError = async (error) => {
        console.log(error)
    }
        

    return (
        <Container component="main" maxWidth="xs" >
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar} >
                    <FiLock />
                </Avatar>
                <Typography variant="h5">{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {isSignup && (
                            <>
                            <InputForm name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                            <InputForm name="lastName" label="Last Name" handleChange={handleChange} half />
                            </>
                        )}
                        <InputForm name="email" label="Email Address" handleChange={handleChange} type="email" />
                        <InputForm name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password" } handleShowPassword={handleShowPassword}/>   
                        { isSignup && <InputForm name="confirmPassword" label="Type your password again" handleChange={handleChange} type="password" />}
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        {isSignup ? "Sign up" : "Sign in"}
                    </Button>
                    <GoogleLogin 
                        clientId="454078895217-h56li9k2s0be6j142m4u5hv1ojeqcmo0.apps.googleusercontent.com"
                        onSuccess={googleSuccess}
                        onFailure={googleError}
                        cookiePolicy="single_host_origin"
                        render={(renderProps) => (
                            <Button 
                                fullWidth 
                                onClick={renderProps.onClick} 
                                className={classes.googleButton}
                                disabled={renderProps.disabled}
                                variant="contained"
                                color="primary"
                                startIcon={<Icon />}
                                >
                                Google
                                </Button>
                        )}
                    />
                    
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Button fullWidth variant="contained" color="secondary" className={classes.submit} onClick={switchMode}>{ isSignup ? 'I already have an account' : 'Create an account' }</Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth
