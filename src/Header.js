import logo from "./logo.svg";
import Navigation from "./Navigation";

function Header() {
  return (
    <header className="">
      <img src={logo} alt="logo" />
      <Navigation />
    </header>
  );
}

export default Header;
