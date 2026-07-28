import { FaChartLine } from 'react-icons/fa';
import Card from '../common/Card';

interface ProgressCardProps {
  label: string;
  value: string | number;
  description: string;
}

function ProgressCard({ label, value, description }: ProgressCardProps) {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">{label}</p>
          <p className="mt-2 text-2xl font-semibold text-slate-900">{value}</p>
        </div>
        <div className="rounded-2xl bg-violet-50 p-3 text-violet-600">
          <FaChartLine size={18} />
        </div>
      </div>
      <p className="mt-4 text-sm text-slate-500">{description}</p>
    </Card>
  );
}

export default ProgressCard;
