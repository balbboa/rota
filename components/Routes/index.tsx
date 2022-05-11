import { AppProps } from 'next/app'
import React from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import AuthenticatedLayout from '../AuthenticatedLayout/AuthenticatedLayout'
import NotAuthenticatedLayout from '../NotAuthenticatedLayout/NotAuthenticatedLayout'

export default function Routes({ Component, pageProps }: AppProps) {
  const {isAuthenticated} = React.useContext(AuthContext)

  const Layout = isAuthenticated ? AuthenticatedLayout : NotAuthenticatedLayout

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
