import { NavLink } from 'react-router-dom';
import { Home, Users, Award, UserCircle } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const BottomNav = () => {
  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Teams', path: '/teams', icon: Users },
    { name: 'Sponsors', path: '/sponsors', icon: Award },
    { name: 'My Team', path: '/my-team', icon: UserCircle },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-brand-navy/80 backdrop-blur-xl border-t border-white/10 px-6 py-3 pb-8 z-50">
      <div className="flex justify-between items-center max-w-md mx-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                "flex flex-col items-center gap-1 transition-all duration-300",
                isActive ? "text-brand-orange scale-110" : "text-white/50 hover:text-white/80"
              )
            }
          >
            <item.icon size={24} />
            <span className="text-[10px] font-medium uppercase tracking-wider">{item.name}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
