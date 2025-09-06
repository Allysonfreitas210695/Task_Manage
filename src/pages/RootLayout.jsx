import { Outlet } from "react-router"

import SideBar from "../components/Sidebar"

const RootLayout = () => {
  return (
    <div className="flex h-screen gap-2 overflow-hidden">
      <SideBar />
      <div className="h-full flex-1 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  )
}

export default RootLayout
