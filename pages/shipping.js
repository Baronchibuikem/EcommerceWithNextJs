import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import { app_store } from "../utils/Store";

export default function Shipping() {
  const router = useRouter();

  const { state } = useContext(app_store);
  const { userInfo } = state;

  useEffect(() => {
    if (!userInfo) {
      router.push("/login?redirect=/shipping");
    }
  }, []);

  return <div>shipping page</div>;
}
