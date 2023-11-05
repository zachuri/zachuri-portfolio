import { MainNav } from './main-nav';
import { Icons } from './ui/icons';

const Navbar = () => {
  return (
    <>
      <header className="sticky top-0 z-40 bg-opacity-20 backdrop-blur-lg drop-shadow-lg">
        <div className="p-5 flex justify-center items-center">
          <div className="flex flex-row p-2 gap-x-6 rounded-xl bg-primary text-primary-foreground">
            <Icons.logo />
            <MainNav />
            <Icons.logo />
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
