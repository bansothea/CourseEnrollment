import Navbar from "../components/navbar";
import Logo from "../components/logo";
const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <Logo/>
      <main className="flex-grow">{children}</main>
    </div>
  );
};

export default MainLayout;