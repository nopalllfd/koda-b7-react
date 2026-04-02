import { Link } from 'react-router';

function Footer() {
  return (
    <footer className="py-10 mt-10 bg-amber-950 flex justify-between px-10 items-center">
      <div>
        <h1 className="text-white font-semibold text-4xl">Rate our Menu</h1>
      </div>
      <nav className="flex justify-center gap-8">
        <Link
          to="/"
          className="text-sm font-semibold text-white"
        >
          Home
        </Link>
        <Link
          to="/counter"
          className="text-sm font-semibold text-white"
        >
          Counter
        </Link>
        <Link
          to="/form"
          className="text-sm font-semibold text-white"
        >
          Form
        </Link>
        <Link
          to="/pokemon"
          className="text-sm font-semibold text-white"
        >
          Pokemon
        </Link>
      </nav>
    </footer>
  );
}

export default Footer;
