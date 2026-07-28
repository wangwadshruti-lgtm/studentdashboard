import { FaCheckCircle, FaClock, FaTrophy } from 'react-icons/fa';
import Button from '../common/Button';
import Card from '../common/Card';
import { formatProgress, getStatusColor, getStatusLabel } from '../../utils/helpers';
import type { Course } from '../../types/course';

interface CourseCardProps {
  course: Course;
  onDelete: (id: number) => void;
  onComplete: (id: number) => void;
  onProgressChange: (id: number, value: number) => void;
}

function CourseCard({ course, onDelete, onComplete, onProgressChange }: CourseCardProps) {
  const statusClass = getStatusColor(course.completed, course.progress);
  const statusLabel = getStatusLabel(course.completed, course.progress);

  return (
    <Card className="p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{course.title}</h3>
          <p className="mt-2 text-sm text-slate-500">{course.description}</p>
        </div>
        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusClass}`}>{statusLabel}</span>
      </div>

      <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-600">
        <span className="flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1.5">
          <FaClock /> {course.duration}
        </span>
        <span className="flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1.5">
          <FaTrophy /> {course.trainer}
        </span>
      </div>

      <div className="mt-5">
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="text-slate-500">Progress</span>
          <span className="font-semibold text-slate-900">{formatProgress(course.progress)}</span>
        </div>
        <div className="h-2.5 w-full rounded-full bg-slate-100">
          <div className="h-2.5 rounded-full bg-violet-600 transition-all" style={{ width: `${course.progress}%` }} />
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        <Button onClick={() => onProgressChange(course.id, course.progress + 10)} variant="primary">
          Increase Progress
        </Button>
        <Button onClick={() => onProgressChange(course.id, course.progress - 10)} variant="secondary">
          Decrease Progress
        </Button>
        <Button onClick={() => onComplete(course.id)} variant="secondary">
          <span className="flex items-center gap-2">
            <FaCheckCircle /> Complete
          </span>
        </Button>
        <Button onClick={() => onDelete(course.id)} variant="danger">
          Delete Course
        </Button>
      </div>
    </Card>
  );
}

export default CourseCard;
