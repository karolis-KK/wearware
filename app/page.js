import Image from "next/image";
import { Inter } from 'next/font/google'
import { JetBrains_Mono} from 'next/font/google'
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Agenda from "./components/Agenda";
import Idea from "./components/Idea";
import Concept from "./components/Concept";
import CTA from "././components/CTA"
import CTA_Main from "./components/CTA_Main";
import Contact from "./components/Contact"
import Form from "./components/Form";
import { ReactLenis } from 'lenis/react';

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })
const jet = JetBrains_Mono({ subsets: ['latin'] })

export default function Home() {
  return (
    <ReactLenis root>
      <Navbar font={inter}/>
      <Landing />
      <Agenda />
      <Idea />
      <Concept />
      <CTA_Main font={jet} />
      <CTA font={[jet, inter]} />
      <Contact />
      <Form />
    </ReactLenis>
  );
}
