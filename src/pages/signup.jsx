import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import FormHelperText from "@mui/material/FormHelperText";
import { SIGN_UP } from "../constant/constant";
import { ROUTES } from "../constant/routes";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import useSignup from "../hooks/useSignup";

// import { createTheme, ThemeProvider } from "@mui/material/styles";
export default function SignUp() {
  const history = useHistory();

  const { onChangeDateOfBirth, onChangeValue, handleSubmit, errors, data } =
    useSignup();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          {/* <LockOutlinedIcon /> */}
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                name={SIGN_UP.FIRST_NAME}
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={onChangeValue}
                value={data[SIGN_UP.FIRST_NAME]}
              />
              <FormHelperText
                id="component-error-text"
                style={{ color: "red" }}
              >
                {errors[SIGN_UP.FIRST_NAME]}
              </FormHelperText>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="lastName"
                label="Last Name"
                name={SIGN_UP.LAST_NAME}
                autoComplete="lname"
                onChange={onChangeValue}
              />
              <FormHelperText
                id="component-error-text"
                style={{ color: "red" }}
              >
                {errors[SIGN_UP.LAST_NAME]}
              </FormHelperText>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="email"
                label="Email Address"
                name={SIGN_UP.EMAIL}
                autoComplete="email"
                onChange={onChangeValue}
              />
              <FormHelperText
                id="component-error-text"
                style={{ color: "red" }}
              >
                {errors[SIGN_UP.EMAIL]}
              </FormHelperText>
            </Grid>
            <Grid item xs={12}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DesktopDatePicker
                  label="Date of Birth *"
                  name={SIGN_UP.DATE_OF_BIRTH}
                  inputFormat="MM/dd/yyyy"
                  onChange={onChangeDateOfBirth}
                  renderInput={(params) => <TextField {...params} fullWidth />}
                />
              </LocalizationProvider>
              <FormHelperText
                id="component-error-text"
                style={{ color: "red" }}
              >
                {errors[SIGN_UP.DATE_OF_BIRTH]}
              </FormHelperText>
            </Grid>
            <Grid item xs={12}>
              <RadioGroup
                row
                fullWidth
                aria-label="gender"
                name={SIGN_UP.GENDER}
                onChange={onChangeValue}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
              </RadioGroup>
              <FormHelperText
                id="component-error-text"
                style={{ color: "red" }}
              >
                {errors[SIGN_UP.GENDER]}
              </FormHelperText>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name={SIGN_UP.PASSWORD}
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                onChange={onChangeValue}
              />
              <FormHelperText
                id="component-error-text"
                style={{ color: "red" }}
              >
                {errors[SIGN_UP.PASSWORD]}
              </FormHelperText>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to={ROUTES.SIGN_IN} variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      {/* <Copyright sx={{ mt: 5 }} /> */}
    </Container>
  );
}
