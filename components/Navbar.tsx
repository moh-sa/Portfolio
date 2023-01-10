import Link from "next/link";

const Navbar = () => {
  return (
    <Link
      href="/"
      className={`mb-14 text-3xl font-semibold`}
      title="Home page"
      aria-label="Home page"
    >
      M S A <span className="text-xs text-gray-400">v1.0</span>
    </Link>
  );
};

export default Navbar;
