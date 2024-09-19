import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-950 p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-white text-xl font-bold">MyApp</h1>
        <div>
          <Link href="/" className="text-white mx-4">Home</Link>
          <Link href="/about" className="text-white mx-4">About</Link>
          <Link href="/contact" className="text-white mx-4">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;