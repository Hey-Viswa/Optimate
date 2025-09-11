import { MenuIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface Props {

}

export const Navbar = async (props: Props) => {
    return (
        <header className='fixed right-0 left-0 top-0 py-4 px-4 backdrop-blur-lg z-[100] flex items-center justify-between'>
            <aside className='flex items-center gap-1'>
            <p className='text-xl font-bold tracking-tight'>AUTO</p>
            <Image src="/fuzzieLogo.png" alt="Logo" width={10} height={10} />
            <p className='text-xl font-bold tracking-tight'>MATEX</p>
            </aside>
            <nav className='absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block'>
                <div className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 shadow-xl">
                    <ul className="flex items-center gap-6 list-none">
                        <li>
                            <Link href="#" className="text-gray-300 hover:text-white transition-all duration-300 font-medium text-sm hover:bg-white/10 px-4 py-2 rounded-full">Products</Link>
                        </li>
                        <li>
                            <Link href="#" className="text-gray-300 hover:text-white transition-all duration-300 font-medium text-sm hover:bg-white/10 px-4 py-2 rounded-full">Pricing</Link>
                        </li>
                        <li>
                            <Link href="#" className="text-gray-300 hover:text-white transition-all duration-300 font-medium text-sm hover:bg-white/10 px-4 py-2 rounded-full">Clients</Link>
                        </li>
                        <li>
                            <Link href="#" className="text-gray-300 hover:text-white transition-all duration-300 font-medium text-sm hover:bg-white/10 px-4 py-2 rounded-full">Resources</Link>
                        </li>
                        <li>
                            <Link href="#" className="text-gray-300 hover:text-white transition-all duration-300 font-medium text-sm hover:bg-white/10 px-4 py-2 rounded-full">Documentation</Link>
                        </li>
                        <li>
                            <Link href="#" className="text-gray-300 hover:text-white transition-all duration-300 font-medium text-sm hover:bg-white/10 px-4 py-2 rounded-full">Enterprise</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <aside className='flex items-center gap-4'>
                <Link
                    href="/dashboard"
                    className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                >
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                        { // WIP: wireup for user

                            true ? 'Dashboard' : 'Login'}
                    </span>
                </Link>
                {
                    // wire up user 
                }
                <MenuIcon className='w-6 h-6 text-white cursor-pointer md:hidden' />
            </aside>
        </header>
    )
}

export default Navbar;