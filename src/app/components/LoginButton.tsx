"use client";

import { signIn } from "next-auth/react";

export default function LoginButton() {
  return (
    <button
      className="bg-red-500 text-white p-4 m-2 rounded-lg hover:bg-red-400 transition ease-in-out"
      onClick={() => signIn(undefined, { callbackUrl: "/" })}
    >
      Login
    </button>
  );
}
