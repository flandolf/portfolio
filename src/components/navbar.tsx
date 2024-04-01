import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ChevronDown, MenuIcon } from "lucide-react";

function Navbar() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 500); // Adjust the breakpoint as needed
    };

    handleResize(); // Call on initial load
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="flex flex-row justify-between space-x-3 py-2 px-8">
      <div>
        <a href="/" className="text-orange-400 font-bold text-2xl">
          f!
        </a>
      </div>
      <div className="ml-auto">
        {isSmallScreen ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <MenuIcon />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Link to="/">Home</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/about">About</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/projects">Projects</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/rootguide">Root guide</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/drivers">Drivers</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a
                  href="
                  https://github.com/flandolf"
                >
                  GitHub
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <>
            <Link to="/">
              <Button size="sm" variant="link">
                Home
              </Button>
            </Link>
            <Link to="/about">
              <Button size="sm" variant="link">
                About
              </Button>
            </Link>
            <Link to="/projects">
              <Button size="sm" variant="link">
                Projects
              </Button>
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="sm" variant="link">
                  <span>Android Stuff</span>
                  <ChevronDown />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Link to="/rootguide">Root guide</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/drivers">Drivers</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <a href="https://github.com/flandolf">
              <Button size="sm" variant="link">
                GitHub
              </Button>
            </a>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
