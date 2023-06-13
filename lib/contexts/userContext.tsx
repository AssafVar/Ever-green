"use client";

import { User, UserInContext } from "@/typings";
import React, { createContext, useState } from "react";

const userInitialState: UserInContext | null = null;
const tokenInitialState: String | null = null;

export const userContext = createContext<{
  user: UserInContext | null;
  token: string | null;
  setNewUser: (newUser: UserInContext) => void;
  setNewToken: (token: string) => void;
}>({ user: userInitialState, token: tokenInitialState, setNewUser: () => null, setNewToken: () => null });

export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<UserInContext | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const setNewUser = (newUser: UserInContext) => {
    setUser(newUser);
  }
  const setNewToken = (token: string) => {
    setToken(token);
  }

  return (
    <userContext.Provider value={{ user, token, setNewToken, setNewUser }}>
      {children}
    </userContext.Provider>
  );
};
