'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { clsx } from 'clsx'

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t">
      <div className="container mx-auto px-4">
        <div className="flex justify-between py-3">
          <NavItem href="/" icon="home" label="Home" active={pathname === '/'} />
          <NavItem href="/calendar" icon="calendar" label="Calendar" active={pathname === '/calendar'} />
          <NavItem href="/assistant" icon="mic" label="Assistant" active={pathname === '/assistant'} />
          <NavItem href="/docs" icon="document" label="Docs" active={pathname === '/docs'} />
          <NavItem href="/profile" icon="user" label="Profile" active={pathname === '/profile'} />
        </div>
      </div>
    </nav>
  )
}

function NavItem({ href, icon, label, active }: { href: string; icon: string; label: string; active: boolean }) {
  return (
    <Link 
      href={href}
      className={clsx(
        'flex flex-col items-center space-y-1',
        active ? 'text-primary-600' : 'text-gray-600'
      )}
    >
      <span className="text-sm">{label}</span>
    </Link>
  )
}
