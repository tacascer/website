import Link from "next/link";

const NavBar = () => {
  return (
    <nav>
      <div className="container-fluid">
        <Link href="#" className="navbar-brand mb-0 fs-3 fw-bold">
          Tim&apos;s Corner
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
