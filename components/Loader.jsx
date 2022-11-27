import { Circles } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="fixed bg-[rgba(255,255,255,.3)] backdrop-blur-sm top-0 left-0 w-full h-screen grid justify-center items-center">
      <Circles
        height="120"
        width="120"
        radius="15"
        color="#0369a1"
        ariaLabel="loading"
      />
    </div>
  );
};

export default Loader;
