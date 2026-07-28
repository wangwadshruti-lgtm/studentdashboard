import { useEffect, useMemo, useState } from 'react';
import Button from '../components/common/Button';
import Input from '../components/common/Input';
import CourseList from '../components/modules/CourseList';
import ProgressCard from '../components/modules/ProgressCard';
import StudentProfile from '../components/modules/StudentProfile';
import DashboardLayout from '../layouts/DashboardLayout';
import { useCourses } from '../hooks/useCourses';
import type { Student } from '../types/student';

const student: Student = {
  name: 'Shruti Wangwad',
  rollNumber: 'CS2024018',
  branch: 'Computer Science',
};

function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [timeSpent, setTimeSpent] = useState(0);
  const { courses, addCourse, deleteCourse, completeCourse, updateProgress, completedCount, pendingCount, averageProgress } = useCourses();

  useEffect(() => {
    document.title = `Completed Courses : ${completedCount}`;
  }, [completedCount]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeSpent((previous) => previous + 1);
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const filteredCourses = useMemo(() => {
    if (!search.trim()) return courses;
    const query = search.toLowerCase();
    return courses.filter((course) => course.title.toLowerCase().includes(query) || course.description.toLowerCase().includes(query));
  }, [courses, search]);

  const formatTime = (totalSeconds: number): string => {
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    const seconds = String(totalSeconds % 60).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <DashboardLayout student={student} isSidebarOpen={isSidebarOpen} onToggleSidebar={() => setIsSidebarOpen((previous) => !previous)}>
      <StudentProfile student={student} />

      <div className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
        <div className="rounded-[30px] border border-slate-200/80 bg-white p-6 shadow-soft">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-medium text-violet-600">Learning Journey</p>
              <h2 className="text-2xl font-semibold text-slate-900">Course Overview</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button onClick={addCourse} variant="primary">
                Add Course
              </Button>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-600">
                Time Spent {formatTime(timeSpent)}
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-[1fr_220px]">
            <Input label="Search Courses" value={search} onChange={setSearch} placeholder="Find your program" />
            <div className="rounded-[24px] border border-violet-100 bg-violet-50 p-4 text-sm text-violet-700">
              <p className="font-semibold">Progress Pulse</p>
              <p className="mt-1">Keep momentum steady for the best outcomes.</p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
          <ProgressCard label="Total Courses" value={courses.length} description="All currently assigned programs" />
          <ProgressCard label="Completed Courses" value={completedCount} description="Courses marked as complete" />
          <ProgressCard label="Pending Courses" value={pendingCount} description="Courses still in progress" />
          <ProgressCard label="Average Progress" value={`${averageProgress}%`} description="Overall learning consistency" />
        </div>
      </div>

      <div className="rounded-[30px] border border-slate-200/80 bg-white p-6 shadow-soft">
        <CourseList courses={filteredCourses} onDelete={deleteCourse} onComplete={completeCourse} onProgressChange={updateProgress} />
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;
