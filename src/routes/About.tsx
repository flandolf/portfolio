import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow text-start py-8 px-4 sm:px-8 space-y-3">
        <h1 className="text-4xl md:text-8xl font-bold">About</h1>
        <h2 className="text-2xl md:text-4xl font-bold text-orange-400">
          Hi, I'm Andy!
        </h2>
        <p className="text-lg md:text-xl">
          a developer who enjoys building innovative solutions to "real-world"
          problems. With over 5 years of experience in software development, I
          mostly engage in web development using modern technologies like React,
          Node.js, and Express.
        </p>
        <p className="text-lg md:text-xl">
          In my free time, I enjoy contributing to open-source projects,
          experimenting with new technologies.
        </p>
        <h1 className="text-3xl md:text-4xl font-bold pt-8">Setup Specs</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-lg md:text-xl">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Main PC (Custom)</h2>
            <p>
              <span className="font-bold">CPU:</span> Ryzen 7 7800X3D
            </p>
            <p>
              <span className="font-bold">RAM:</span> 32GB DDR5 @ 6400MHz
            </p>
            <p>
              <span className="font-bold">SSD:</span> 1TB Crucial P5 NVMe
            </p>
            <p>
              <span className="font-bold">GPU:</span> NVIDIA RTX 4070 (MSI
              Ventus 2X)
            </p>
            <p>
              <span className="font-bold">OS:</span> Windows 11
            </p>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">
              Laptop (Macbook Pro 2023)
            </h2>
            <p>
              <span className="font-bold">CPU:</span> Apple M2 Pro
            </p>
            <p>
              <span className="font-bold">RAM:</span> 16GB Unified Memory
            </p>
            <p>
              <span className="font-bold">SSD:</span> 512GB NVMe
            </p>
            <p>
              <span className="font-bold">GPU:</span> 16 Core Apple GPU
            </p>
            <p>
              <span className="font-bold">OS:</span> macOS 15 (Sequoia Beta)
            </p>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">
              Phone (Oneplus 12)
            </h2>
            <p>
              <span className="font-bold">CPU:</span> Snapdragon 8 Gen 3
            </p>
            <p>
              <span className="font-bold">RAM:</span> 24GB LPDDR5X
            </p>
            <p>
              <span className="font-bold">SSD:</span> 1TB UFS 4.0
            </p>
            <p>
              <span className="font-bold">GPU:</span> Adreno 750
            </p>
            <p>
              <span className="font-bold">OS:</span> OxygenOS 14 (Android 14)
            </p>
          </div>
        </div>
        <div>
          <h1 className="text-3xl md:text-4xl font-bold pt-8">Other Info:</h1>
          <p className="text-lg md:text-xl">
            <span className="font-bold">Editor:</span> Visual Studio Code
          </p>
          <p className="text-lg md:text-xl">
            <span className="font-bold">Hobbies:</span> I enjoy playing video
            games and watching and playing sports.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
