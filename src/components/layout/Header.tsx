import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <div className="supports-backdrop-blur:bg-background/60 fixed left-0 right-0 top-0 z-20 pt-5">
      <nav className="flex h-14 items-center justify-between px-4">
        <Link
          to="/"
          className="hover:brightness-75 transition-all duration-200 hidden sm:block"
        >
          <div className="flex items-center justify-center  gap-2">
            <img src="logo.png" width="74px" />
          </div>
        </Link>
        <div className="flex gap-4">
          <Button
            asChild
            variant="secondary"
            className="text-xl bg-[linear-gradient(90deg,#3ec7ef,#3ebff2)] text-white font-bold pt-3 pb-4 px-6 hover:drop-shadow-[0_5px_10px_#9ae3ff] hover:-translate-y-[4px] transition-all duration-500 will-change-transform"
          >
            <Link to="/register">Sign Up</Link>
          </Button>
          <Button
            asChild
            className="text-xl bg-amber-500 text-white font-bold pt-3 pb-4 px-6 bg-[linear-gradient(135deg,#ed942e,#f6b92e)] hover:drop-shadow-[0_5px_10px_#ffd391] hover:-translate-y-[4px] transition-all duration-500 will-change-transform"
          >
            <Link to="/login">Sign In</Link>
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
