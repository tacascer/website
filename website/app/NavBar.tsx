import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg text-bg-light">
      <div className="container-fluid">
        <Link href="#" className="navbar-brand mb-0 h1">
          Tacascer&apos;s corner
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
