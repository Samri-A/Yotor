'use client'
import { useLinkStatus } from "next/link"

export function LoadingIndicator(){
    const pending = useLinkStatus()
    return(
        <span aria-hidden className={`link-hint ${pending ? 'is-pending' : ''}`}/>
    );

}