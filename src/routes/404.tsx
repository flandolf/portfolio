import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function Error404() {
  return (
    <div>
      <Navbar />
      <div
        className="
        text-white text-center py-24
      "
      >
        <h1
          className="text-9xl font-bold text-orange-400
        "
        >
          404
        </h1>
        <p className="pb-5">Page not found.</p>

        <Link to="/">
          <Button size="sm">Go Home</Button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Error404;
