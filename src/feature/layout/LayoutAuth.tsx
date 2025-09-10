import { useAuthActions } from "@convex-dev/auth/react";
import { ButtonRobe, ImpressedActorRobe, ImpressedRobe, ProfileRobe } from "robes";
import LayoutAdmin from "./LayoutAdmin";
import authContext from "../auth/authContext";
import { useState } from "react";
import useActor from "use-actor";

export default function LayoutAuth(props: {
  loading?: boolean
}) {
  const auth = authContext.useMaybe()
  const actions = useAuthActions()
  const createActor = useActor({
    label: 'Create Account',
    action: actions.signIn
  })
  if (props.loading) {
    return (
      <ButtonRobe size='xs' isLoading />
    )
  }
  if (!auth.provided) {
    return (
      <ImpressedActorRobe actor={createActor} input='anonymous' size='xs'>
        Create Account
      </ImpressedActorRobe>
    )
  }
  async function handleLogout () {
    await actions.signOut()
  }
  return (
    <ProfileRobe
      onLogout={handleLogout}
      button={{ children: auth.value.name, size: 'xs' }}
    >
      <LayoutAdmin />
    </ProfileRobe>
  )
}