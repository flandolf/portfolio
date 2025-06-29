import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";

function Footer() {
  return (
    <footer className="text-left py-4 px-4 sm:px-8 flex flex-col sm:flex-row justify-between items-center">
      <div className="flex flex-col sm:flex-row items-center">
        <div className="flex flex-row items-center mb-2 sm:mb-0">
          <h1 className="text-4xl text-pink-400 font-bold mr-2">f!</h1>
          <ModeToggle />
        </div>
        <p className="ml-0 sm:ml-4">&copy; 2025 flandolf</p>
      </div>
      <div className="flex flex-col sm:flex-row mt-4 sm:mt-0">
        <a href="/" className="mr-4">
          <Button size="sm" variant="link">
            Home
          </Button>
        </a>
        <a href="/about" className="mr-4">
          <Button size="sm" variant="link">
            About
          </Button>
        </a>
        <a href="/projects" className="mr-4">
          <Button size="sm" variant="link">
            Projects
          </Button>
        </a>
        <a href="https://github.com/flandolf">
          <Button size="sm" variant="link">
            Github
          </Button>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
