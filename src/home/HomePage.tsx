import { Code } from '@chakra-ui/react';
import { api } from '../../convex/_generated/api'
import { useArchedQuery } from "../arched/useArchedQuery";
import LayoutHeader from "../layout/LayoutHeader";
import HomeContent from './HomeContent';
import AuthController from '../auth/AuthController';

export default function HomePage () {
  const homeQuery = useArchedQuery({ args: {}, query: api.getHome.default })
  if (homeQuery.isPending) {
    return <LayoutHeader loading />
  }
  if (homeQuery.isError) {
    return (
      <>
        <LayoutHeader />
        <Code colorScheme='red'>{homeQuery.error.message}</Code>
      </>
    )
  }
  return (
    <AuthController user={homeQuery.data.auth}>
      <HomeContent />
    </AuthController>
  )
}