import { FaUserGraduate } from 'react-icons/fa';
import Card from '../common/Card';
import type { Student } from '../../types/student';

interface StudentProfileProps {
  student: Student;
}

function StudentProfile({ student }: StudentProfileProps) {
  return (
    <Card className="p-6">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-[24px] bg-violet-600 text-white">
            <FaUserGraduate size={28} />
          </div>
          <div>
            <p className="text-sm font-medium text-violet-600">Profile Overview</p>
            <h2 className="text-2xl font-semibold text-slate-900">{student.name}</h2>
            <p className="text-sm text-slate-500">{student.branch}</p>
          </div>
        </div>
        <div className="grid gap-3 rounded-[24px] bg-slate-50 p-4 sm:grid-cols-2">
          <div>
            <p className="text-sm text-slate-500">Roll Number</p>
            <p className="font-semibold text-slate-900">{student.rollNumber}</p>
          </div>
          <div>
            <p className="text-sm text-slate-500">Program</p>
            <p className="font-semibold text-slate-900">B.Tech {student.branch}</p>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default StudentProfile;
