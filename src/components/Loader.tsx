import { LoaderIcon } from "lucide-react";

const Loader = () => {
  return (
    <main className="w-screen h-screeen flex justify-center items-center">
      <LoaderIcon className="animate-spin" />
    </main>
  );
};

export default Loader;
