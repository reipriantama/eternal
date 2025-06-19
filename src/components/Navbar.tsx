'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Members', href: '/members' },
  { name: 'Music', href: '/music' },
  { name: 'Videos', href: '/videos' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <header className="w-full bg-zinc-900 shadow-sm">
      <nav className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-widest text-white">ETERNAL</h1>
        <ul className="flex gap-6 text-sm font-medium">
          {navItems.map(item => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={clsx(
                  'transition-colors hover:text-cyan-400',
                  pathname === item.href ? 'text-cyan-400' : 'text-white'
                )}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}