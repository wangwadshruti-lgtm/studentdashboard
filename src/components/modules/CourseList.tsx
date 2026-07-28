import Card from '../common/Card';
import CourseCard from './CourseCard';
import type { Course } from '../../types/course';

interface CourseListProps {
  courses: Course[];
  onDelete: (id: number) => void;
  onComplete: (id: number) => void;
  onProgressChange: (id: number, value: number) => void;
}

function CourseList({ courses, onDelete, onComplete, onProgressChange }: CourseListProps) {
  if (!courses.length) {
    return (
      <Card className="p-10 text-center">
        <p className="text-lg font-semibold text-slate-800">No Courses Available</p>
        <p className="mt-2 text-sm text-slate-500">Add a new course to start building your learning roadmap.</p>
      </Card>
    );
  }

  return (
    <div className="grid gap-6 xl:grid-cols-2">
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          course={course}
          onDelete={onDelete}
          onComplete={onComplete}
          onProgressChange={onProgressChange}
        />
      ))}
    </div>
  );
}

export default CourseList;
