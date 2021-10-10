import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import { SIGN_UP } from "../constant/constant";
import FormHelperText from "@mui/material/FormHelperText";

import { ROUTES } from "../constant/routes";
import useSignIn from "../hooks/useSignIn";

function Signin() {
  const { handleSubmit, onChangeValue, errors } = useSignIn();
  return (
    <div>
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
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <FormHelperText id="component-error-text" style={{ color: "red" }}>
            {errors}
          </FormHelperText>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name={SIGN_UP.EMAIL}
              autoComplete="email"
              autoFocus
              onChange={onChangeValue}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name={SIGN_UP.PASSWORD}
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={onChangeValue}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link to={ROUTES.SIGN_UP} variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default Signin;
