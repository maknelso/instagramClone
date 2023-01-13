import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [openPostModal, setOpenPostModal] = useState(false);

  return (
    <UserContext.Provider
      value={{
        openPostModal,
        setOpenPostModal,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
