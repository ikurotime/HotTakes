import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger
} from '../components/ui/dropdown-menu'

import { LogOut } from 'lucide-react'
import { useState } from 'react'

type ProfileProps = {
  src: string
}
export default function Profile({ src }: ProfileProps) {
  function handleLogout() {
    fetch('/api/auth/signout').then(() => {
      window.location.reload()
    })
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <img src={src} className='rounded-full size-12' alt='Profile Image' />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {/*  <DropdownMenuItem>Profile</DropdownMenuItem /> */}
        <DropdownMenuItem onClick={handleLogout}>
          <LogOut className='w-4 h-4 mr-2' />
          <span>Log out</span>
        </DropdownMenuItem>{' '}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
