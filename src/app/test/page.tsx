"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { QUESTIONS } from "@/data/questions";
import { scoreAnswers } from "@/lib/scoring";
import type { Pole } from "@/types/domain";

export default function TestPage() {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<Pole[]>([]);
  const question = QUESTIONS[index];

  function choose(pole: Pole) {
    const next = [...selected, pole];
    if (index < QUESTIONS.length - 1) {
      setSelected(next);
      setIndex(index + 1);
    } else {
      router.push(`/types/${scoreAnswers(next).id}`);
    }
  }

  return (
    <main className="mx-auto flex w-full max-w-[680px] flex-col px-5 py-10 md:px-8">
      <p className="text-sm font-semibold text-ink-faint">
        Question {index + 1} / {QUESTIONS.length}
      </p>
      <div className="mt-6 rounded-card border border-line bg-surface p-8 text-center shadow-md">
        <h1 className="text-2xl font-semibold leading-snug">{question.text}</h1>
        <div className="mt-8 flex flex-col gap-3">
          {question.options.map((option) => (
            <button
              key={option.pole}
              onClick={() => choose(option.pole)}
              className="h-14 rounded-btn border border-line-strong bg-surface font-semibold hover:bg-surface-2"
            >
              {option.text}
            </button>
          ))}
        </div>
      </div>
      <p className="mt-4 text-center text-sm text-ink-faint">
        Placeholder questions — full test UX &amp; reviewed items to come.
      </p>
    </main>
  );
}
