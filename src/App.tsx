import Header from "./Header";
import Home from "./Home";
import Certificates from "./Certificates";
import Experience from "./Journey";
import Contact from "./Contact";
import Projects from "./Projects";

export default function App(){
  return(
    <div style={{backgroundImage:"url('/bg_img.jpg')",backgroundSize:'cover',backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundAttachment:'fixed'}} className="min-h-screen p-2">
      <Header /> <br /> <br />
      <Home /> <br /> <br />
      <Certificates /> <br /> <br />
      <Experience /> <br /> <br />
      <Projects /> <br /> <br />
      <Contact /> <br /> <br />
    </div>
  )
}