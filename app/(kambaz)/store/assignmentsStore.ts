"use client";

import { create } from "zustand";

export type Assignment = {
  _id: string;
  title: string;
  course: string;
  description: string;
  points: number;
  due: string;
  available: string;
  until?: string;
};

export const emptyAssignment: Assignment = {
  _id: "",
  title: "",
  course: "",
  description: "",
  points: 100,
  due: "",
  available: "",
  until: "",
};

type AssignmentsStore = {
  assignments: Assignment[];
  addAssignment: (assignment: Assignment) => void;
  deleteAssignment: (assignmentId: string) => void;
  updateAssignment: (assignment: Assignment) => void;
  setAssignments: (assignments: Assignment[]) => void;
};

export const useAssignmentsStore = create<AssignmentsStore>((set) => ({
  assignments: [],
  addAssignment: (assignment) =>
    set((state) => ({
      assignments: [...state.assignments, assignment],
    })),
  deleteAssignment: (assignmentId) =>
    set((state) => ({
      assignments: state.assignments.filter((a) => a._id !== assignmentId),
    })),
  updateAssignment: (assignment) =>
    set((state) => ({
      assignments: state.assignments.map((a) =>
        a._id === assignment._id ? assignment : a,
      ),
    })),

  setAssignments: (assignments) => set({ assignments }),
}));
