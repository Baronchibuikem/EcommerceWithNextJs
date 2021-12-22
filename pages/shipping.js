import { useRouter } from "next/router";
import React, { useContext } from "react";
import { app_store } from "../utils/Store";

export default function Shipping() {
  const router = useRouter();

  const { state, dispatch } = useContext(app_store);
  const { userInfo } = state;

  if (!userInfo) {
    router.push("/login?redirect=/shipping");
  }

  return <div>shipping page</div>;
}
