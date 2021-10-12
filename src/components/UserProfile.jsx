import React from "react";
import {
  RadioGroup,
  Radio,
  Container,
  Typography,
  Box,
  Grid,
  FormControlLabel,
  TextField,
  Avatar,
  Button,
  CssBaseline,
  FormHelperText,
} from "@mui/material";
import { LocalizationProvider, DesktopDatePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { SIGN_UP } from "../constant/constant";
import { ROUTES } from "../constant/routes";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import useSignup from "../hooks/useSignup";
function UserProfile({ title, buttonLabel }) {
  const { onChangeDateOfBirth, onChangeValue, handleSubmit, errors, data } =
    useSignup();
  console.log(`data`, data);
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
          {title}
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
                value={data[SIGN_UP.LAST_NAME]}
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
                value={data[SIGN_UP.EMAIL]}
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
                  value={data[SIGN_UP.DATE_OF_BIRTH]}
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
                value={data[SIGN_UP.GENDER]}
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
            {buttonLabel}
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

export default UserProfile;
