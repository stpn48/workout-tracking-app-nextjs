"use client";

import { Exercise, Set } from "@prisma/client";
import React from "react";

type Props = {
  exercise: Exercise & { sets: Set[] };
  onClick?: () => void;
  order: number;
};

export function ExerciseCard({ exercise, onClick, order }: Props) {
  return (
    <div
      onClick={onClick}
      className="main-border-color relative w-[250px] rounded-lg border px-6 py-4 text-sm"
    >
      <p className="text-secondary absolute left-2 top-2 text-xs">{order}</p>
      <h1 className="mb-4 flex w-full justify-center text-lg font-bold">{exercise.name}</h1>
      <div className="flex flex-col gap-2">
        <div className="text-secondary flex justify-between rounded-lg text-xs font-bold">
          <h1>SET NAME</h1>
          <p>SET REPS</p>
        </div>
        {exercise.sets.map((set) => (
          <div className="secondary-bg flex justify-between rounded-lg px-4 py-2" key={set.id}>
            <h1>{set.name}</h1>
            <p>{set.reps}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
