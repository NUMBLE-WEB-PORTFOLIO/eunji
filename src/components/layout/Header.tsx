import Link from 'next/link';

const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full flex justify-around py-10 text-3xl z-10">
      <Link href={'/'}>
        <h1 className="font-bold">chldmswl</h1>
      </Link>
    </header>
  );
};

export default Header;
