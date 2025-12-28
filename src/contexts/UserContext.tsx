import type { User } from "@/types/user.ts";
import React, {
  createContext,
  type ReactNode,
  useContext,
  useMemo,
  useState,
} from "react";

interface UserContextProps {
  user: User | null;
  updateUser: (user: User | null) => void;
}

const UserContext = createContext<UserContextProps | null>(null);

export const UserContextProvider: React.FC<{
  children: ReactNode | ReactNode[];
}> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const value = useMemo(
    () => ({
      user,
      updateUser: setUser,
    }),
    [user, setUser],
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUserContext = (): UserContextProps => {
  const userContext = useContext(UserContext);

  if (!userContext) {
    throw new Error("User context used outside its scope");
  }

  return userContext;
};
