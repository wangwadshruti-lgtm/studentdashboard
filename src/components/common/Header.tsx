interface HeaderProps {
  studentName: string;
  onToggleSidebar: () => void;
}

function Header({ studentName, onToggleSidebar }: HeaderProps) {
  return (
    <header className="flex items-center justify-between rounded-[30px] border border-slate-200/80 bg-white px-6 py-4 shadow-soft">
      <div>
        <p className="text-sm font-medium text-violet-600">Student Course Dashboard</p>
        <h1 className="text-xl font-semibold text-slate-900">Welcome back, {studentName}</h1>
      </div>
      <button
        type="button"
        onClick={onToggleSidebar}
        className="rounded-2xl bg-violet-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-violet-700 lg:hidden"
      >
        Menu
      </button>
    </header>
  );
}

export default Header;
