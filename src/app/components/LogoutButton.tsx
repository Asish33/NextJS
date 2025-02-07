"use client";

import { signOut } from "next-auth/react";

export default function LogoutButton() {
  return (
    <button
      className="bg-red-500 text-white p-4 m-2 rounded-lg hover:bg-red-400 transition ease-in-out"
      onClick={() => signOut({ callbackUrl: "/" })}
    >
      Log Out
    </button>
  );
}
