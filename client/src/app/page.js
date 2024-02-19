import Profile from "./components/pages/profile/page";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

export default function Home() {
  return (
    <main className="">
      <div className="">
        <Header/>
        <Profile/>
        <Footer/>
      </div>
    </main>
  );
}
