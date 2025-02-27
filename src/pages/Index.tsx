
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Tracks from "@/components/Tracks";
import ImportantDates from "@/components/ImportantDates";
import Committee from "@/components/Committee";
import Registration from "@/components/Registration";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Tracks />
      <ImportantDates />
      <Committee />
      <Registration />
      <Footer />
    </div>
  );
};

export default Index;
