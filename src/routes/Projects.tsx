import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import scr1 from "@/assets/95gen.png";
import scr2 from "@/assets/chatui.png";
import scr3 from "@/assets/audioplayer.png";
import ProjectComponent from "@/components/project-component";

function Projects() {
  return (
    <div className="flex flex-col min-h-screen text-xl">
      <Navbar />
      <div className="flex-grow  text-start py-4 px-4 sm:px-8 space-y-2">
        <h1 className="text-4xl sm:text-8xl font-bold py-4 sm:py-8">
          Projects
        </h1>
        <p className="px-2">Here are all my projects.</p>
        <ProjectComponent
          title="95gen"
          body="95Gen is a Windows 95 and Office 95 key generator developed in
              Rust, featuring a straightforward user interface and leveraging
              public methods for key generation. Its advantages include low CPU
              usage and the ability to produce unlimited keys. The program
              generates keys based on a simple algorithm where the first three
              digits represent a day of the year, followed by a two-digit year,
              a divisible-by-zero sum of digits in the C section, and random
              numbers in the D section. It is important to note that 95Gen is
              intended for educational and recreational purposes only, exploring
              basic key generation concepts, and is not affiliated with any
              official licensing. Windows 95 is considered abandonware with no
              planned updates."
          scr1={scr1}
          buttonLink="https://github.com/flandolf/95gen"
        />
        <ProjectComponent
          title="Shadcn Chat"
          body="
          Shadcn Chat is a React-based chat application with Firebase integration, enabling real-time messaging and secure user authentication. Its streamlined interface ensures seamless navigation, while Firebase's real-time database ensures instantaneous message delivery. With robust authentication measures, Shadcn Chat provides a secure platform for dynamic conversations, fostering connections and collaboration effortlessly.
          "
          scr1={scr2}
          buttonLink="https://chat.flandolf.site"
        />

        <ProjectComponent
          title="Audioplayer"
          body="
          Audioplayer is a music player app built using Flutter and Youtube API, allowing users to stream music from Youtube. Its intuitive interface and seamless navigation make it easy to browse and play music, with features such as playlists, shuffle, and repeat. Audioplayer offers a rich listening experience, with high-quality audio and a wide selection of tracks to choose from. Whether you're working out, relaxing, or on the go, Audioplayer provides the perfect soundtrack for every moment.
          "
          scr1={scr3}
          buttonLink="https://github.com/flandolf/audioplayer"
        />
      </div>

      <Footer />
    </div>
  );
}

export default Projects;
