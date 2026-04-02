import { Link } from 'react-router';

function Header() {
  return (
    <header className="bg-amber-100 border-b border-amber-200 w-full py-3 shadow-sm">
      <nav className="flex justify-center gap-8">
        <Link
          to="/"
          className="text-sm font-semibold text-gray-800"
        >
          Home
        </Link>
        <Link
          to="/counter"
          className="text-sm font-semibold text-gray-800"
        >
          Counter
        </Link>
        <Link
          to="/form"
          className="text-sm font-semibold text-gray-800"
        >
          Form
        </Link>
        <Link
          to="/pokemon"
          className="text-sm font-semibold text-gray-800"
        >
          Pokemon
        </Link>
      </nav>
    </header>
  );
}

export default Header;
