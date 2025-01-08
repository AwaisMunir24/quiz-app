import Image from "next/image";
import styles from "./page.module.css";
import Herosection from "@/components/herosection/herosection";
import ContactForm from "@/components/contact-form/contact-form";
import Pillars from "@/components/pillars/pillars";

export default function Home() {
  return (
    <div >
       <Herosection/>
       <Pillars/>
       <ContactForm/>
    </div>
  );
}
