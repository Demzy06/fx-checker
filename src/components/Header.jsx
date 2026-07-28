import CurrencyCount from "./CurrencyCount";
import Logo from "./Logo";

function Header() {
  return (
    <header className="pt-5 pl-3 pr-3 flex justify-between">
      <Logo />
      <CurrencyCount />
    </header>
  );
}

export default Header;
