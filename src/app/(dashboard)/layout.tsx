import DashboardClientLayout from './client.layout'

interface DashboardLayoutProps {
  children: React.ReactNode
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div id="__dashboard">
      <DashboardClientLayout>{children}</DashboardClientLayout>
    </div>
  )
}

export default DashboardLayout
