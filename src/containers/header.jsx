import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { ROUTES } from "../constant/routes";
import useSignOut from "../hooks/useSignOut";

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#400CCC",
    paddingRight: "79px",
    paddingLeft: "118px",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  },
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "#FFFEFE",
    textAlign: "left",
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  drawerContainer: {
    padding: "20px 30px",
  },
}));

export default function HeaderContainer({ children }) {
  const { onClickSignOut } = useSignOut();
  const headersData = [
    {
      label: "Home",
      href: ROUTES.HOME,
    },
    {
      label: "My Account",
      href: ROUTES.PROFILE,
    },

    {
      label: "Sign Out",
      onClick: onClickSignOut,
    },
  ];
  const { header, logo, menuButton, toolbar } = useStyles();

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        {femmecubatorLogo}
        <div>{getMenuButtons()}</div>
      </Toolbar>
    );
  };

  const femmecubatorLogo = (
    <Typography variant="h6" component="h1" className={logo}>
      Mutual Fund House
    </Typography>
  );

  const getMenuButtons = () => {
    return headersData.map(({ label, href, onClick }) => {
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            to: !onClick && href,
            component: !onClick && RouterLink,
            className: menuButton,
          }}
          onClick={onClick}
        >
          {label}
        </Button>
      );
    });
  };

  return (
    <>
      <AppBar className={header}>{displayDesktop()}</AppBar>

      {children}
    </>
  );
}
