import { useAuthActions } from '@convex-dev/auth/react'
import { ButtonRobe, ImpressedActorRobe, ProfileRobe } from 'robes'
import LayoutAdmin from './LayoutAdmin'
import authContext from '../auth/authContext'
import useActor from 'use-actor'

export default function LayoutAuth (props: {
  loading?: boolean
}) {
  const auth = authContext.useMaybe()
  const actions = useAuthActions()
  const createActor = useActor({
    label: 'Create Account',
    action: async (input: string) => {
      const output = await actions.signIn(input)
      console.log('createActor output', output)
    }
  })
  if (props.loading) {
    return <ButtonRobe size='xs' isLoading />
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
  const colorScheme = auth.value.admin ? { colorScheme: 'red' } : {}
  const button = { ...colorScheme, children: auth.value.name, size: 'xs' }
  return (
    <ProfileRobe
      onLogout={handleLogout}
      button={button}
    >
      <LayoutAdmin />
    </ProfileRobe>
  )
}
