import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import React from 'react'
import AuthenticatedLayout from '../AuthenticatedLayout/AuthenticatedLayout'

export default function Routes({ Component, pageProps, ...appProps }: AppProps) {

  const useContent = () => {

    const router = useRouter();


    if (router.pathname==='/')
      return <Component {...pageProps} />;

    return (
      <AuthenticatedLayout>
        <Component {...pageProps} />{" "}
      </AuthenticatedLayout>
    );
  };

  return (
    useContent()
  )
}
