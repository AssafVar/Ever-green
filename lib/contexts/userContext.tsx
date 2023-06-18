"use client";

import { User, UserInContext } from "@/typings";
import React, { createContext, useEffect, useState } from "react";
import Cookies from 'js-cookie';

const userInitialState: UserInContext | null = null;

export const userContext = createContext<{
  user: UserInContext | null;
  setNewUser: (newUser: UserInContext | null) => void;
}>({ user: userInitialState, setNewUser: () => null});

export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<UserInContext | null>(null);

  const setNewUser = (newUser: UserInContext | null) => {
    setUser(newUser);
  }
  useEffect(() => {
    const cookieValue = Cookies.get('user');

    if (cookieValue) {
      setNewUser(JSON.parse(cookieValue));
    }
  }, []);  return (
    <userContext.Provider value={{ user, setNewUser }}>
      {children}
    </userContext.Provider>
  );
};
