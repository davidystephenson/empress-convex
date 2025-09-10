import { api } from "../../../convex/_generated/api";
import useArchedMutation from "../arched/useArchedMutation";
import authContext from "../auth/authContext";
import { RedMenuItemRobe } from "robes";
import { LiaSkullCrossbonesSolid } from "react-icons/lia";
import { useAuthActions } from "@convex-dev/auth/react";

export default function LayoutAdmin() {
  const resetAll = useArchedMutation({ label: 'Reset All', mutation: api.resetAll.default })
  const auth = authContext.use()
  const authActions = useAuthActions()
  if (!auth.admin) {
    return <></>
  }
  async function handleReset () {
    await resetAll.act({})
    await authActions.signOut()
  }
  return (
    <RedMenuItemRobe icon={<LiaSkullCrossbonesSolid />} onClick={handleReset}>
      RESET ALL
    </RedMenuItemRobe>
  )
}
