"use client";

import { User } from "@/typings";
import React, { createContext, useState } from "react";

const initialState: User | null = null;

export const userContext = createContext<{
  user: User | null;
  setNewUser: (newUser: User) => void;
}>({ user: initialState, setNewUser: () => null });

export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<User|null>(null);
  const setNewUser = (newUser:User) => {
    setUser(newUser);
  }

  return (
    <userContext.Provider value={{ user, setNewUser }}>
      {children}
    </userContext.Provider>
  );
};
