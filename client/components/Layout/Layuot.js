import Footer from "../Footer";
import Header from "../Header";

export const Layuot = ({ children, headerMenu, footerMenu, globalInfo }) => {
  return (
    <>
      <Header menu={headerMenu} global={globalInfo}/>
      {children}
      <Footer menu={footerMenu} />
    </>
  );
};
