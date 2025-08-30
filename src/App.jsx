import { Toaster } from "sonner"

import SideBar from "./components/Sidebar"
import Tasks from "./components/Tasks"

const App = () => {
  return (
    <div className="flex h-screen gap-2 overflow-hidden">
      <Toaster
        toastOptions={{
          style: {
            color: "#35383E",
          },
        }}
      />
      <SideBar />
      <div className="h-full flex-1 overflow-y-auto">
        <Tasks />
      </div>
    </div>
  )
}

export default App
