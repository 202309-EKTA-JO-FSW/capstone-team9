import Profile from "./pages/profile/page";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Sidebar from "./components/layout/Sidebar";

export default function Home() {
  return (
    <main className="">
      <Header />
      <div className="flex gap-4">
        {/* <Sidebar /> */}
        {/* <Profile /> */}
      </div>
      <Footer />
    </main>
  );
}
