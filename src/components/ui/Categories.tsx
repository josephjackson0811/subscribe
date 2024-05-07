import { Link } from "react-router-dom";

const Categories = () => {
  const menu = [
    {
      title: "Legal",
      path: "/legal",
    },
    {
      title: "Unsubscribe",
      path: "/cancel",
    },
    {
      title: "Sign In",
      path: "/login",
    },
    {
      title: "Sign Up",
      path: "/register",
    },
  ];

  return (
    <div className="flex w-full flex-col items-center justify-center md:w-auto md:items-start md:justify-start flex-1">
      <h3 className="text-[20px] font-semibold text-veryDarkPurple">
        Navigation
      </h3>
      <div className="mt-4 flex flex-col items-start justify-start gap-2 md:mt-2">
        {menu.map((menuItem, i) => (
          <div
            className="mb-4 flex flex-col gap-4 text-darkPurple md:mb-0 md:flex-row md:pl-[14px] border-b-2 border-white hover:pr-4 hover:border-gray-400 hover:text-gray-400 transition-all"
            key={i}
          >
            <Link
              to={menuItem.path}
              key={i}
              className="text-[18px] font-semibold"
            >
              {menuItem.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
