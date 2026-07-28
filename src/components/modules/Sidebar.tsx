import { FaBookOpen, FaChartLine, FaGraduationCap, FaHome, FaUserAlt } from 'react-icons/fa';
import type { Student } from '../../types/student';

interface SidebarProps {
  student: Student;
  isOpen: boolean;
}

const links = [
  { label: 'Overview', icon: FaHome },
  { label: 'Courses', icon: FaBookOpen },
  { label: 'Progress', icon: FaChartLine },
  { label: 'Profile', icon: FaUserAlt },
];

function Sidebar({ student, isOpen }: SidebarProps) {
  return (
    <aside className={`transition-all duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} fixed inset-y-0 left-0 z-20 w-72 border-r border-slate-200/80 bg-white/95 p-6 shadow-soft lg:sticky lg:translate-x-0`}>
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-600 text-white">
          <FaGraduationCap size={20} />
        </div>
        <div>
          <p className="text-sm font-semibold text-violet-600">Learning Hub</p>
          <p className="text-sm text-slate-500">Enterprise portal</p>
        </div>
      </div>

      <div className="mt-8 rounded-[24px] border border-violet-100 bg-violet-50 p-4">
        <p className="text-sm text-slate-500">Current student</p>
        <p className="mt-1 text-lg font-semibold text-slate-900">{student.name}</p>
        <p className="text-sm text-slate-600">{student.rollNumber}</p>
        <p className="text-sm text-slate-600">{student.branch}</p>
      </div>

      <nav className="mt-8 space-y-2">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <button
              key={link.label}
              type="button"
              className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:bg-violet-50 hover:text-violet-700"
            >
              <Icon className="text-violet-600" />
              {link.label}
            </button>
          );
        })}
      </nav>

      <div className="mt-8 rounded-[24px] border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
        <p className="font-semibold text-slate-900">Focus mode</p>
        <p className="mt-1">Stay aligned with your learning roadmap.</p>
      </div>
    </aside>
  );
}

export default Sidebar;
