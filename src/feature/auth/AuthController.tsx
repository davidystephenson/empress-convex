import { useEffect, useState, type ReactNode } from "react";
import authContext from "./authContext";
import type { Doc } from "../../../convex/_generated/dataModel";
import { useAuthActions } from "@convex-dev/auth/react";

export default function AuthController (props: { children: ReactNode, user?: Doc<'users'> }) {
  const [oldUser, setOldUser] = useState(props.user)
  const authActions = useAuthActions()
  useEffect(() => {
    if (props.user !== oldUser) {
      setOldUser(props.user)
    }
    if (props.user == null && oldUser != null) {
      authActions.signOut()
    }
  }, [props.user, oldUser])

  if (props.user == null) {
    return <>{props.children}</>
  }
  return (
    <authContext.Provider user={props.user}>
      {props.children}
    </authContext.Provider>
  )
}