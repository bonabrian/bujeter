import { SidebarContextProvider } from '@/components/context'
import Sidebar from '@/components/sidebar'
import cn from '@/lib/cn'

interface DashboardLayoutProps {
  children: React.ReactNode
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div id="__dashboard">
      <SidebarContextProvider>
        <div className={cn('flex gap-4')}>
          <Sidebar />
          <main id="__content" className={cn('flex-grow flex-1')}>
            {children}
          </main>
        </div>
      </SidebarContextProvider>
    </div>
  )
}

export default DashboardLayout
