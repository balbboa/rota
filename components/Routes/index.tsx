import { AppProps } from 'next/app'
import React from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import AuthenticatedLayout from '../AuthenticatedLayout/AuthenticatedLayout'
import NotAuthenticatedLayout from '../NotAuthenticatedLayout/NotAuthenticatedLayout'

export default function Routes({ Component, pageProps, ...appProps }: AppProps) {
  const {isAuthenticated} = React.useContext(AuthContext)

  const Layout = isAuthenticated ? AuthenticatedLayout : NotAuthenticatedLayout

  // const getContent = () => {
  //   if ([`/`].includes(appProps.router.pathname))
  //     return <Component {...pageProps} />;

  //   return (
  //     <AuthenticatedLayout>
  //       <Component {...pageProps} />{" "}
  //     </AuthenticatedLayout>
  //   );
  // };

  return (
    // getContent()
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
