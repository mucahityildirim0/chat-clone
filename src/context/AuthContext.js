import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../components/firebase";

const AuthContext = React.createContext(); // create context

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
      if (user) history.push("/chats");
    });
  }, [user, history]);

  const value = { user };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
      {/* if not loading than show the children */}
    </AuthContext.Provider>
  );
};
