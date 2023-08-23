'use client'

import Link from 'next/link'

import cn from '@/lib/cn'

import { Bank, CaretDoubleLeft, Gear, Receipt, SquaresFour } from '../icons'
import { Button } from '../ui'

interface SidebarProps {
  collapsed: boolean
  onCollapsed: (collapse: boolean) => void
}

interface NavItem {
  label: string
  path: string
  icon: JSX.Element
}

const navItems: NavItem[] = [
  { label: 'Dashboard', path: '/', icon: <SquaresFour /> },
  { label: 'Income', path: '/income', icon: <Bank /> },
  { label: 'Expenses', path: '/expenses', icon: <Receipt /> },
  { label: 'Settings', path: '/settings', icon: <Gear /> },
]

const Sidebar = ({ collapsed, onCollapsed }: SidebarProps) => {
  return (
    <aside id="__sidebar" className="bg-sidebar">
      <div className={cn('h-screen relative')}>
        <nav
          className={cn(
            'flex justify-between flex-col h-full overflow-y-auto overflow-x-hidden whitespace-nowrap',
          )}
        >
          <ul className={cn('my-2 flex flex-col items-stretch gap-2')}>
            {navItems.map(({ label, path, icon }) => (
              <li
                key={label}
                className={cn(
                  'flex transition-colors duration-normal p-2 mx-3',
                  {
                    'rounded-md gap-4': !collapsed,
                    'rounded-full w-10 h-10': collapsed,
                  },
                )}
              >
                <Link href={path} className={cn('flex gap-2 items-center')}>
                  {icon}
                  {!collapsed && <span>{label}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div
          className={cn(
            'absolute bottom-16 transition-common duration-normal',
            {
              'translate-x-12': collapsed,
              'translate-x-60': !collapsed,
            },
          )}
        >
          <div
            className={cn('flex', {
              'rounded-md gap-4': !collapsed,
              'rounded-full': collapsed,
            })}
          >
            <Button
              variant="link"
              onClick={() => onCollapsed(!collapsed)}
              className="rounded-full w-8 h-8 p-0 shadow-sm bg-sidebar"
            >
              <CaretDoubleLeft
                className={cn('w-4 h-4', { 'rotate-180': collapsed })}
              />
            </Button>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
