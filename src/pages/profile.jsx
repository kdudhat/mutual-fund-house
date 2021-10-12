import React from "react";
import HeaderContainer from "../containers/header";
import UserProfile from "../components/UserProfile";
function Profile() {
  return (
    <HeaderContainer>
      <UserProfile title="Update User" buttonLabel="Update" />
    </HeaderContainer>
  );
}

export default Profile;
