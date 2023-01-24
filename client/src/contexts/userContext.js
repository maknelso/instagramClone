import { createContext, useState } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [openPostModal, setOpenPostModal] = useState(false);
  const [searchDb, setSearchDb] = useState([]);
  const [searchItem, setSearchItem] = useState('');

  return (
    <UserContext.Provider
      value={{
        openPostModal,
        setOpenPostModal,
        searchDb,
        setSearchDb,
        searchItem,
        setSearchItem,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
