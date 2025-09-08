import type { ReactNode } from "react";
import authContext from "./authContext";
import type { Doc } from "../../../convex/_generated/dataModel";

export default function AuthController (props: { children: ReactNode, user?: Doc<'users'> }) {
  if (props.user == null) {
    return <>{props.children}</>
  }
  return (
    <authContext.Provider user={props.user}>
      {props.children}
    </authContext.Provider>
  )
}