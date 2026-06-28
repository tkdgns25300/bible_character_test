"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
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
      router.push(`/types/${scoreAnswers(next).id}?from=test`);
    }
  }

  function back() {
    if (index === 0) return;
    setSelected(selected.slice(0, -1));
    setIndex(index - 1);
  }

  return (
    <main className="mx-auto flex w-full max-w-[680px] flex-col px-5 py-10 md:px-8">
      <div className="flex items-center gap-3">
        <Progress value={index} max={QUESTIONS.length} />
        <span className="flex-none whitespace-nowrap text-sm font-semibold tabular-nums text-ink-faint">
          {index + 1} / {QUESTIONS.length}
        </span>
      </div>

      <Card className="mt-6 p-8 text-center shadow-md">
        <p className="text-xs font-bold uppercase tracking-widest text-ink-faint">
          Question {index + 1}
        </p>
        <h1 className="mx-auto mt-4 max-w-md text-2xl font-semibold leading-snug">
          {question.text}
        </h1>
        <div className="mx-auto mt-8 flex max-w-sm flex-col gap-3">
          {question.options.map((option) => (
            <Button
              key={option.pole}
              variant="outline"
              size="lg"
              onClick={() => choose(option.pole)}
            >
              {option.text}
            </Button>
          ))}
        </div>
      </Card>

      {index > 0 && (
        <button
          onClick={back}
          className="mx-auto mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-faint transition-colors hover:text-ink"
        >
          <ArrowLeft size={16} /> Back
        </button>
      )}
    </main>
  );
}
