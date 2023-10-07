import {Sidebar} from "../../layout/sidebar/sidebar.tsx";
import {Navbar} from "../../layout/navbar/navbar.tsx";

export function App() {
  return (
    <div className="flex flex-row h-full min-h-screen overflow-y-hidden bg-slate-800">
      <div className="w-full">
        <Navbar/>
      </div>
      <Sidebar/>
    </div>
  )
}
