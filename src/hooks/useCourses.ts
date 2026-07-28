import { useCallback, useEffect, useMemo, useState } from 'react';
import { dummyCourses } from '../data/dummyCourses';
import type { Course } from '../types/course';

interface UseCoursesResult {
  courses: Course[];
  addCourse: () => void;
  deleteCourse: (id: number) => void;
  completeCourse: (id: number) => void;
  updateProgress: (id: number, value: number) => void;
  completedCount: number;
  pendingCount: number;
  averageProgress: number;
}

export function useCourses(): UseCoursesResult {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    setCourses(dummyCourses);
    console.log('Dashboard Loaded Successfully');
  }, []);

  const addCourse = useCallback(() => {
    const nextId = courses.length ? Math.max(...courses.map((course) => course.id)) + 1 : 1;
    const newCourse: Course = {
      id: nextId,
      title: `New Course ${nextId}`,
      description: 'Freshly added from the dashboard action bar.',
      progress: 0,
      completed: false,
      duration: '2 Weeks',
      trainer: 'New Trainer',
    };
    setCourses((previous) => [newCourse, ...previous]);
  }, [courses.length]);

  const deleteCourse = useCallback((id: number) => {
    setCourses((previous) => previous.filter((course) => course.id !== id));
  }, []);

  const completeCourse = useCallback((id: number) => {
    setCourses((previous) =>
      previous.map((course) =>
        course.id === id ? { ...course, completed: !course.completed, progress: course.completed ? Math.max(course.progress - 10, 0) : Math.max(course.progress, 100) } : course,
      ),
    );
  }, []);

  const updateProgress = useCallback((id: number, value: number) => {
    setCourses((previous) =>
      previous.map((course) =>
        course.id === id
          ? {
              ...course,
              progress: Math.min(100, Math.max(0, value)),
              completed: value >= 100,
            }
          : course,
      ),
    );
  }, []);

  const completedCount = useMemo(() => courses.filter((course) => course.completed).length, [courses]);
  const pendingCount = useMemo(() => courses.filter((course) => !course.completed).length, [courses]);
  const averageProgress = useMemo(() => {
    if (!courses.length) return 0;
    const total = courses.reduce((sum, course) => sum + course.progress, 0);
    return Math.round(total / courses.length);
  }, [courses]);

  return {
    courses,
    addCourse,
    deleteCourse,
    completeCourse,
    updateProgress,
    completedCount,
    pendingCount,
    averageProgress,
  };
}
