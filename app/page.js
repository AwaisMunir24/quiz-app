import Herosection from "@/components/herosection/herosection";
import ContactForm from "@/components/contact-form/contact-form";
import Pillars from "@/components/pillars/pillars";
import SliderComponent from "@/components/slider/slider";

export default function Home() {
  return (
    <div>
      <Herosection />
      <SliderComponent />
      <Pillars />
      <ContactForm />
    </div>
  );
}
