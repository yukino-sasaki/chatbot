import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { AuthContext } from "../firebase/AuthProvider";
import Style from './auth.module.css'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const Login = ({ history }) => {
    const classes = useStyles()
    const { login } = useContext(AuthContext);

    // AuthContextからlogin関数を受け取る
    const handleSubmit = event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        login(email.value, password.value, history);
    };
    const usehistory = useHistory()
    const handleSignUp = () => {
        usehistory.push('/signup')
    }
    return (
        <>


            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>

                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Login
        </Typography>
                    <form className={classes.form} noValidate onSubmit={handleSubmit}>
                        <Grid container spacing={2}>

                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />
                            </Grid>

                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Login
          </Button>
                        <Grid container >
                            <Grid item>
                                <Link href="#" variant="body2" onClick={handleSignUp}>
                                    Already have an account? Sign in
              </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>

            </Container>

        </>
    )
}

export default Login
