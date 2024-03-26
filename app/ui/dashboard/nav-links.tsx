'use client';

import {
	UserGroupIcon,
	HomeIcon,
	DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
	{ name: 'Home', href: '/dashboard', icon: HomeIcon },
	{
		name: 'Invoices',
		href: '/dashboard/invoices',
		icon: DocumentDuplicateIcon,
	},
	{ name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
];

export default function NavLinks() {
	const pathname = usePathname();
	return (
		<>
		{links.map((link) => {
			const LinkIcon = link.icon;
			return (
				<Link
					key={link.name}
					href={link.href}
					// CSS for nav inactive nav items
					// https://tailwindcss.com/docs/border-color
					//   - Added border and border hover color
					className={clsx(
						'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium border-2 hover:border-blue-600 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
						{
							// CSS for selected nav item
							//   - Stronger border color but less than hover
							'border-blue-200 bg-sky-100 text-blue-600': pathname === link.href,
						},
					)}
// Original code
//					className={clsx(
//						'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
//						{
//							'bg-sky-100 text-blue-600': pathname === link.href,
//						},
//					)}
				>
					<LinkIcon className="w-6" />
					<p className="hidden md:block">{link.name}</p>
				</Link>
			);
//			return (
//				<a
//					key={link.name}
//					href={link.href}
//					className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
//				>
//					<LinkIcon className="w-6" />
//					<p className="hidden md:block">{link.name}</p>
//				</a>
//			);
		})}
		</>
	);
}
