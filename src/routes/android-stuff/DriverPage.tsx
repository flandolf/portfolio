import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";

function DriverPage() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col min-h-screen px-4 lg:px-8 space-y-8">
        <h1 className="text-5xl text-pink-400 font-semibold">
          Driver Downloads
        </h1>
        <div className="flex flex-col space-y-4">
          <DriverSection
            title="ADB Platform-tools"
            description="Android Debug Bridge (ADB) is a versatile command-line tool that lets you communicate with a device."
            link="https://developer.android.com/studio/releases/platform-tools"
          />
          {/* <DriverSection
            title="Qualcomm Drivers"
            description="Drivers for Qualcomm chipsets, commonly found in many Android devices."
            link="https://flandolf.site/drivers/QComDrivers.zip"
          />
          <DriverSection
            title="MTK Drivers"
            description="Drivers for MediaTek chipsets, commonly found in some Android devices."
            link="https://flandolf.site/drivers/MTKDrivers.zip"
          /> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

interface DriverSectionProps {
  title: string;
  description: string;
  link: string;
}

function DriverSection({ title, description, link }: DriverSectionProps) {
  return (
    <div className="flex flex-col space-y-2">
      <h2 className="text-3xl font-semibold">{title}</h2>
      <p className="text-gray-500">{description}</p>
      <a href={link}>
        <Button size="sm" variant="default">
          Download
        </Button>
      </a>
    </div>
  );
}

export default DriverPage;
