import React, { useState } from "react";
import ProfileUnverified from "../ui/profileUnverified";
import ProfileVerified from "../ui/profileVerified";
import VerifyAccountForm from "../pages/verifyAccount";
import ProfileGuest from "../ui/profileGuest";

export default function Profile({ icon }: { icon: string }) {
  const [loggedIn, setLoggedIn] = useState(true);   
  const [verified, setVerified] = useState(true);
  const [verifying, setVerifying] = useState(false);

  if (!loggedIn) {
    return <ProfileGuest />;
  }

  if (verifying) {
    return (
      <VerifyAccountForm
        onVerify={() => {
          setVerifying(false);
          setVerified(true);
        }}
      />
    );
  }

  return verified ? (
    <ProfileVerified icon={icon} />
  ) : (
    <ProfileUnverified icon={icon} />
  );
}