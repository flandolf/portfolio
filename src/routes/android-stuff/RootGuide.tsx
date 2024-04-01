import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

function RootGuidePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow p-8 lg:p-36 lg:pt-8">
        <h1 className="text-5xl text-orange-300 font-semibold">Root guide</h1>
        <p className="text-gray-500">
          Your warranty is now void. Use at own risk, I am not responsible for
          any damage caused to your device.
        </p>
        <div className="h-4"></div>
        <h2 className="text-2xl">Why should I root?</h2>
        <p>
          Rooting your device gives you full control over your device. You can
          install custom ROMs, remove bloatware, and even install custom
          kernels. Basically, you can do more.
        </p>
        <div className="h-4"></div>
        <h2 className="text-2xl">How do I root?</h2>
        <p>
          This should work for most devices. There are 3 main methods to root:
        </p>
        <ul className="text-xl text-blue-300">
          <li>
            <a href="https://github.com/topjohnwu/Magisk">1. Magisk</a>
          </li>
          <li>
            <a href="https://kernelsu.org/">2. KernelSU</a>
          </li>
          <li>
            <a href="https://github.com/bmax121/APatch">3. APatch</a>
          </li>
        </ul>
        <div className="h-4"></div>
        <h2 className="text-3xl">Magisk method:</h2>
        <ol className="space-y-2 pb-4">
          <li>
            1. Download the latest Magisk APK from the official{" "}
            <a
              className="text-blue-300"
              href="https://github.com/topjohnwu/Magisk"
            >
              Magisk
            </a>{" "}
            page. Install the APK.
          </li>
          <li>
            2. Find the stock boot/init_boot image for your device.{" "}
            <strong>
              It must match the version that you are currently on.{" "}
            </strong>
            Once you have the boot image, transfer it to your device.
          </li>
          <li>
            3. Open Magisk and click on the Install button. Select the option to
            patch a file, and select the boot image you transferred earlier.
          </li>
          <li>
            4. Wait for Magisk to patch the boot image. The patched image will
            be saved in the Downloads folder. Copy the patched image to your
            PC/Mac.
          </li>
          <li>
            5. Enabling USB debugging is required for this step. Go into
            Settings &gt; About phone &gt; tap on the build number 7 times to
            enable developer options. Go back to Settings &gt; System &gt;
            Developer options &gt; enable USB debugging.
          </li>
          <li>
            6. Unlocking the bootloader is required for this step. First, reboot
            your device into fastboot mode using <br />{" "}
            <code>adb reboot bootloader</code> <br /> then, run <br />{" "}
            <code>fastboot flashing unlock</code>{" "}
            <strong className="text-red-400">
              THIS WILL WIPE YOUR DEVICE!
            </strong>{" "}
            <br />
            The device will reboot and you will need to set it up again. Go back
            to step 5 to enable USB debugging.
          </li>
          <li>
            7. Connect your device to your PC/Mac. Open a terminal and run{" "}
            <code>adb devices</code> to check if your device is connected. Run{" "}
            <code>adb reboot bootloader</code> to go into fastboot. Once in
            fastboot, run{" "}
            <code>fastboot flash boot /path/to/magisk_patched.img</code> to
            flash the patched image. Finally, run <code>fastboot reboot</code>{" "}
            to reboot your device.{" "}
            <strong className="text-red-400">
              If you patched init_boot, run{" "}
              <code>
                {" "}
                fastboot flash init_boot /path/to/patched_init_boot.img
              </code>
            </strong>
          </li>
        </ol>
        <h2 className="text-3xl">KernelSU Method:</h2>
        <ol className="space-y-2 pb-4">
          <li>
            1. Download the KernelSU manager app from{" "}
            <a
              className="text-blue-300"
              href="https://github.com/tiann/KernelSU/releases"
            >
              here
            </a>{" "}
            and install.
          </li>
          <li>2. Make sure your device is supported.</li>
          <li>
            3. Find the stock boot/init_boot image for your device.{" "}
            <strong>
              It must match the version that you are currently on.{" "}
            </strong>
            Once you have the boot image, transfer it to your device.
          </li>
          <li>
            4. Open the KernelSU manager app and click on the Patch button.
            Select the boot image you transferred earlier.
          </li>
          <li>
            5. Wait for KernelSU to patch the boot image. The patched image will
            be saved in the Downloads folder. Copy the patched image to your
            PC/Mac.
          </li>
          <li>
            6. Enabling USB debugging is required for this step. Go into
            Settings &gt; About phone &gt; tap on the build number 7 times to
            enable developer options. Go back to Settings &gt; System &gt;
            Developer options &gt; enable USB debugging.
          </li>
          <li>
            7. Unlocking the bootloader is required for this step. First, reboot
            your device into fastboot mode using <br />{" "}
            <code>adb reboot bootloader</code> <br /> then, run <br />{" "}
            <code>fastboot flashing unlock</code>{" "}
            <strong className="text-red-400">
              THIS WILL WIPE YOUR DEVICE!
            </strong>{" "}
            <br />
            The device will reboot and you will need to set it up again. Go back
            to step 6 to enable USB debugging.
          </li>
          <li>
            8. Connect your device to your PC/Mac. Open a terminal and run{" "}
            <code>adb devices</code> to check if your device is connected. Run{" "}
            <code>adb reboot bootloader</code> to go into fastboot. Once in
            fastboot, run{" "}
            <code>fastboot flash boot /path/to/kernel_patched.img</code> to
            flash the patched image. Finally, run <code>fastboot reboot</code>{" "}
            to reboot your device.{" "}
            <strong className="text-red-400">
              If you patched init_boot, run{" "}
              <code>
                {" "}
                fastboot flash init_boot /path/to/patched_init_boot.img
              </code>
            </strong>
          </li>
        </ol>
        <h2 className="text-3xl">APatch Method:</h2>
        <p>Apatch is marginally the same to KernelSU, but with a few differences. You can only patch using boot.img, not init_boot.</p>
        <h3 className="text-2xl">Congratulations!</h3>
      </div>
      <Footer />
    </div>
  );
}

export default RootGuidePage;
