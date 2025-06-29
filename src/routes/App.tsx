import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

// Common utility class strings
const sectionWrapper = "px-4 md:px-8 text-lg";
const titleStyles = "text-4xl font-bold text-center";
const cardGrid = "grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 md:mt-8";

function App() {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <div className="p-6 text-center space-y-6 text-lg">
        <h1 className="text-[9.5rem] font-bold bg-gradient-to-r from-blue-700 to-pink-400 bg-clip-text text-transparent m-0">
          flandolf!
        </h1>
        <p className="font-semibold">
          Hi! I'm a <span className="text-blue-500">React</span>,
          <span className="text-blue-300"> Flutter</span> and
          <span className="text-orange-400"> Rust</span> developer.
        </p>
        <div className="space-y-4 md:space-y-0 md:flex md:justify-center md:space-x-4">
          <a href="https://github.com/flandolf">
            <Button className="w-full md:w-auto">GitHub</Button>
          </a>
          <Link to="/about">
            <Button variant="outline" className="w-full md:w-auto">
              Learn More
            </Button>
          </Link>
        </div>
      </div>

      {/* Skills Section */}
      <section className={sectionWrapper}>
        <h1 className={titleStyles}>Skills</h1>
        <div className={cardGrid}>
          {[
            {
              title: "React",
              color: "text-blue-500",
              desc: "React is my favorite frontend framework, I have built many different projects using React.",
            },
            {
              title: "Flutter",
              color: "text-blue-400",
              desc: "Flutter is my favorite mobile framework, I have built many different apps using Flutter using backends like Firebase.",
            },
            {
              title: "Rust",
              color: "text-orange-400",
              desc: "Rust is my favorite language for building native software. I have built many different projects using Rust.",
            },
          ].map(({ title, color, desc }) => (
            <Card key={title}>
              <CardHeader>
                <CardTitle className={`text-center text-4xl ${color}`}>
                  {title}
                </CardTitle>
              </CardHeader>
              <CardContent>{desc}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className={`${sectionWrapper} mt-4`}>
        <h1 className={titleStyles}>Projects</h1>
        <div className={cardGrid}>
          {[
            {
              title: "Shadcn Chat",
              desc: "React, Firebase",
              content:
                "Shadcn Chat is a chat app built using React and Firebase, it supports realtime messaging and authentication.",
              link: "https://chat.flandolf.site",
            },
            {
              title: "Validator95 + 95gen",
              desc: "Rust, Egui",
              content:
                "Validator95 validates Windows 95 and Office 95 keys using the original algorithm. Gen95 generates keys for Windows 95 and Office 95.",
              link: "https://github.com/flandolf/95gen",
            },
            {
              title: "Audioplayer",
              desc: "Flutter, Youtube",
              content:
                "Audioplayer is a music player app built using Flutter and Youtube API, it supports searching and playing music.",
              link: "https://github.com/flandolf/audioplayer",
            },
          ].map(({ title, desc, content, link }) => (
            <Card key={title}>
              <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{desc}</CardDescription>
              </CardHeader>
              <CardContent>{content}</CardContent>
              <CardFooter>
                <a href={link}>
                  <Button variant="outline">View</Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
