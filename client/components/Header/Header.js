import Link from "next/link";

export const Header = ({ global }) => {
  const {
    navbar: {
      button: { text, type },
      logoTitle: { title, subtitle },
      phone,
      links,
    },
  } = global;
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-xl">
      <div className="h-20 lg:h-24 container mx-auto px-3">
        <div className="h-full w-full  flex items-center justify-between">
          <div className="text-primary">
            <Link href="/">
              <a>
                <div className="font-bold lg:text-2xl text-xl">{title}</div>
                <div className="font-normal lg:text-xl text-md -mt-2">
                  {subtitle}
                </div>
              </a>
            </Link>
          </div>
          <div>
            <nav className="hidden lg:grid grid-cols-5 gap-5 text-xl font-semibold text-primary">
              {links.map((menu) => {
                return (
                  <div key={menu.id}>
                    <Link as={menu.url} href={menu.url}>
                      <a>{menu.text}</a>
                    </Link>
                  </div>
                );
              })}
            </nav>
          </div>
          <div className="hidden lg:grid grid-cols-2 gap-5 items-center">
            <div className=" text-xl lg:text-2xl font-semibold hover:underline text-primary">
              {phone}
            </div>
            <button
              className={
                type === "primary"
                  ? "bg-gradient-to-r from-blue-400 via-red-500 to-red-600 px-7 py-3 text-white uppercase font-semibold outline-none shadow-md hover:shadow-xl rounded-md transition-all"
                  : "bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 px-7 py-3 text-white uppercase font-semibold outline-none shadow-md hover:shadow-xl rounded-md transition-all"
              }
            >
              {text}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
