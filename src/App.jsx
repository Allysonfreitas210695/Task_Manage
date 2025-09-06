import { RouterProvider } from "react-router"
import { Toaster } from "sonner"

import SideBar from "./components/Sidebar"
import { routers } from "./routes/index.route"

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
      <div className="h-full flex-1 overflow-y-auto">
        <RouterProvider router={routers} />
      </div>
    </div>
  )
}

export default App
