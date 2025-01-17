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
  const fonts = [inter, jet];

  return (
    <ReactLenis root>
      <Navbar font={fonts} />
      <Landing font={fonts} />
      <Agenda font={fonts} />
      <Idea font={fonts} />
      <Concept font={fonts} />
      <CTA_Main font={fonts} />
      <CTA font={fonts} />
      <Contact font={fonts} />
      <Form font={fonts} />
    </ReactLenis>
  );
}
