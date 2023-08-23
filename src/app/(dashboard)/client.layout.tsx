'use client'

import { useState } from 'react'

import Sidebar from '@/components/sidebar'
import cn from '@/lib/cn'

interface DashboardClientLayoutProps {
  children: React.ReactNode
}

const DashboardClientLayout = ({ children }: DashboardClientLayoutProps) => {
  const [collapsed, setCollapsed] = useState(true)

  return (
    <div
      className={cn(
        'grid min-h-screen transition-[grid-template-columns] duration-normal ease-in-out',
        {
          'grid-cols-sidebar': !collapsed,
          'grid-cols-sidebar-collapsed': collapsed,
        },
      )}
    >
      <Sidebar
        collapsed={collapsed}
        onCollapsed={(collapse) => setCollapsed(collapse)}
      />
      <div>{children}</div>
    </div>
  )
}

export default DashboardClientLayout
