import { useRouter } from "next/router";
import { ElementType, useEffect } from "react";

export default function withAuth(WrappedComponent: ElementType){
  const Wrapper = (props:unknown) => {
    const router = useRouter()

    useEffect(()=>{
    const token = localStorage.getItem('auth_token')

    if(!token){
      router.replace('/')
    }
  })

  return <WrappedComponent {...props} />
  }

  return Wrapper
}