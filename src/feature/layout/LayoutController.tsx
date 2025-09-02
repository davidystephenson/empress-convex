import { useAuthActions } from "@convex-dev/auth/react";
import type { ReactNode } from "react";
import { ButtonRobe, ProfileRobe } from "robes";

export default function LayoutController(props: {
  children?: ReactNode
  loading?: boolean
  name?: string
}) {
  const actions = useAuthActions()
  if (props.loading) {
    return (
      <ButtonRobe size='xs' isLoading />
    )
  }
  if (props.name == null) {
    async function handleCreate() {
      await actions.signIn('anonymous')
    }
    return (
      <ButtonRobe onClick={handleCreate} size='xs'>
        Create Account
      </ButtonRobe>
    )
  }
  async function handleLogout () {
    await actions.signOut()
  }
  return (
    <ProfileRobe onLogout={handleLogout} button={{ size: 'xs' }}>
      {props.name}
    </ProfileRobe>
  )
}