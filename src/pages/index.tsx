import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <div className="flex flex-col gap-2 justify-center h-screen border-3 border-red-800 p-4">
      <Link to={"/driving-ai"}>
        <Button className="w-full">Driving AI</Button>
      </Link>
      <Link to={"/pendulum"}>
        <Button className="w-full">Self Balancing Pendulum</Button>
      </Link>
      <Link to={"/bouncing-balls"}>
        <Button className="w-full">Bouncing Balls</Button>
      </Link>
      <Link to={"/stake"}>
        <Button className="w-full">Stake Engine</Button>
      </Link>
    </div>
  );
};

export default index;
