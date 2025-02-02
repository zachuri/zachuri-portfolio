import Link from "next/link";
import { MainNav } from "./main-nav";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { Icons } from "./ui/icons";

const Navbar = () => {
	return (
		<>
			<header className='sticky top-0 z-40'>
				<div className='pt-5 flex justify-center items-center'>
					<div className='flex flex-row items-center justify-center p-1 gap-x-1 rounded-xl bg-primary shadow-lg dark:shadow-gray-600'>
						<Button size='sm'>
							<Link href='/'>
								<Icons.logo />
							</Link>
						</Button>
						<MainNav />
						<ModeToggle
							className='text-primary-foreground'
							variant={"ghost"}
							size={"sm"}
						/>
					</div>
				</div>
			</header>
		</>
	);
};

export default Navbar;
