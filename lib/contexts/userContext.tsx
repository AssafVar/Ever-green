"use client";

import { User } from "@/typings";
import React, { createContext, useState } from "react";

const userInitialState: User | null = null;
const tokenInitialState: String | null = null;

export const userContext = createContext<{
  user: User | null;
  token: string | null;
  setNewUser: (newUser: User) => void;
  setNewToken: (token: string) => void;
}>({ user: userInitialState, token: tokenInitialState, setNewUser: () => null, setNewToken: () => null });

export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const setNewUser = (newUser: User) => {
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
