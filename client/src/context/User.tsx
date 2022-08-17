import { createContext } from 'react';
import { useAuth0, User } from "@auth0/auth0-react";

type JeographyUser = User&{type: string, avatarURL: string[], jeoRanch:string[], userPoints: number, userStatus: string}

export const UserContext = createContext({});