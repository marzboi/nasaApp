import { Navbar } from "../../layout/navbar/navbar";
import { Sidebar } from "../../layout/sidebar/sidebar";
import { List } from "../../marketplace/components/list/list";
export function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <List />
    </>
  );
}
