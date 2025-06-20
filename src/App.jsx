import Footer from "./components/Footer";
import Header from "./components/header";
import HeroSection from "./components/HeroSection";
import TaskBoard from "./components/TaskComponents/TaskBoard";

export default function App() {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center">
        <HeroSection />
        <TaskBoard />
      </div>
      <Footer />
    </>
  );
}
