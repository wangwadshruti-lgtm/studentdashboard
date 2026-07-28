export const formatProgress = (value: number): string => `${Math.round(value)}%`;

export const getStatusColor = (completed: boolean, progress: number): string => {
  if (completed) return 'bg-emerald-100 text-emerald-700';
  if (progress >= 50) return 'bg-amber-100 text-amber-700';
  return 'bg-rose-100 text-rose-700';
};

export const getStatusLabel = (completed: boolean, progress: number): string => {
  if (completed) return 'Completed';
  if (progress >= 50) return 'In Progress';
  return 'Not Started';
};
