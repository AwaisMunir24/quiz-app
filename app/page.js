import Herosection from "@/components/herosection/herosection";
import ContactForm from "@/components/contact-form/contact-form";
import Pillars from "@/components/pillars/pillars";
import SliderComponent from "@/components/slider/slider";
import MissionStatement from "@/components/mission-statement/mission-statement";

export default function Home() {
  return (
    <div className="main_content">
      <Herosection />
      <SliderComponent />
      <MissionStatement />
      <Pillars />
      <ContactForm />
    </div>
  );
}
