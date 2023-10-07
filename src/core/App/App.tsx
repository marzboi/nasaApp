import { Sidebar } from "../../layout/sidebar/sidebar.tsx";
import { Navbar } from "../../layout/navbar/navbar.tsx";
import {List, ProjectsList} from "../../marketplace/components/list/list";

export function App() {
  return (
    <div className="flex flex-col h-full min-h-screen overflow-y-hidden bg-slate-800">
      <Navbar />
      <div className="flex flex-row flex-1">
        <div className="w-full">
          <ProjectsList />
        </div>
        <Sidebar />
      </div>
    </div>
  );
}
