import type { ReactNode } from 'react';
import type { Student } from '../types/student';
import Sidebar from '../components/modules/Sidebar';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

interface DashboardLayoutProps {
  student: Student;
  children: ReactNode;
  isSidebarOpen: boolean;
  onToggleSidebar: () => void;
}

function DashboardLayout({ student, children, isSidebarOpen, onToggleSidebar }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-50/70">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-4 lg:flex-row lg:px-6 lg:py-6">
        <Sidebar student={student} isOpen={isSidebarOpen} />
        <div className="flex-1">
          <Header studentName={student.name} onToggleSidebar={onToggleSidebar} />
          <main className="mt-6 space-y-6">{children}</main>
          <div className="mt-6">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
