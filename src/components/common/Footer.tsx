import { FaRocket, FaShieldAlt, FaUsers } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="rounded-[30px] border border-slate-200/80 bg-white px-6 py-5 shadow-soft">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-900">Student Success Workspace</p>
          <p className="text-sm text-slate-500">Insights, performance tracking, and continuous growth.</p>
        </div>
        <div className="flex flex-wrap gap-3 text-sm text-slate-600">
          <span className="flex items-center gap-2 rounded-full bg-violet-50 px-3 py-1.5">
            <FaRocket className="text-violet-600" /> Track progress
          </span>
          <span className="flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5">
            <FaShieldAlt className="text-emerald-600" /> Secure learning
          </span>
          <span className="flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1.5">
            <FaUsers className="text-amber-600" /> Mentored support
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
