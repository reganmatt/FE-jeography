import { createContext } from "react";
import { useAuth0, User } from "@auth0/auth0-react";

type JeographyUser = User & {
  type: string;
  avatarURL: string[];
  jeoRanch: string[];
  userPoints: number;
  userStatus: string;
};
type JeographyContext = {
  profile: JeographyUser | undefined;
  setProfile: React.Dispatch<React.SetStateAction<JeographyUser | undefined>>;
};
export const UserContext = createContext<JeographyContext>({profile:{
  type: "student",
  avatarURL: ["https://i.imgur.com/T5IjKoI.png"],
  jeoRanch: [
    "https://i.imgur.com/oxYZ7c2.png",
    "https://i.imgur.com/T5IjKoI.png",
  ],
  userPoints: 0,
  userStatus: "Learning geography with jeography!",
}, setProfile: () => {}});
