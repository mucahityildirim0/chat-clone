import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../components/firebase";

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);
