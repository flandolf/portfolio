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

function App() {
  return (
    <div>
      <Navbar />
      <div className="px-3 lg:px-8 py-6 lg:py-16 text-center space-y-3 text-lg md:text-xl">
        <h1
          className="text-4xl md:text-6xl font-bold"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(255,246,135,1) 0%, rgba(255,76,0,1) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          flandolf!
        </h1>
        <p>
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
      <div className="px-4 md:px-8 text-lg">
        <h1 className="text-3xl md:text-6xl font-bold text-center">Skills</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 md:mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-center text-4xl text-blue-500">
                React
              </CardTitle>
            </CardHeader>
            <CardContent>
              React is my favorite frontend framework, I have built many
              different projects using React.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-center text-4xl text-blue-400">
                Flutter
              </CardTitle>
            </CardHeader>
            <CardContent>
              Flutter is my favorite mobile framework, I have built many
              different apps using Flutter using backends like Firebase.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-center text-4xl text-orange-400">
                Rust
              </CardTitle>
            </CardHeader>
            <CardContent>
              Rust is my favorite language for building native software. I have
              built many different projects using Rust.
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="px-4 md:px-8 text-lg mt-4">
        <h1 className="text-3xl md:text-6xl font-bold text-center">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 md:mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Shadcn Chat</CardTitle>
              <CardDescription>React, Firebase</CardDescription>
            </CardHeader>
            <CardContent>
              Shadcn Chat is a chat app built using React and Firebase, it
              supports realtime messaging and authentication.
            </CardContent>
            <CardFooter>
              <a href="https://chat.flandolf.site">
                <Button variant="outline">View</Button>
              </a>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Validator95 + 95gen</CardTitle>
              <CardDescription>Rust, Egui</CardDescription>
            </CardHeader>
            <CardContent>
              Validator95 validates Windows 95 and Office 95 keys using the
              original algorithm. Gen95 generates keys for Windows 95 and Office
              95.
            </CardContent>
            <CardFooter>
              <a
                href="
              https://github.com/flandolf/95gen
              "
              >
                <Button variant="outline">View</Button>
              </a>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Audioplayer</CardTitle>
              <CardDescription>Flutter, Youtube</CardDescription>
            </CardHeader>
            <CardContent>
              Audioplayer is a music player app built using Flutter and Youtube
              API, it supports searching and playing music.
            </CardContent>
            <CardFooter>
              <a href="https://github.com/flandolf/audioplayer">
                <Button variant="outline">View</Button>
              </a>
            </CardFooter>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
