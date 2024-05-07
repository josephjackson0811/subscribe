import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center md:w-auto md:items-center md:justify-center flex-1 ">
      <Link to="/">
        <img src={"logo-dark.png"} className="block" />
      </Link>
      <br />
      <p className=" text-xl">Subscription Service</p>
    </div>
  );
};

export default Logo;
