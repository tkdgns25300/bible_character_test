"use client";

import { useState } from "react";
import { Check, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { BibleType } from "@/types/domain";

// UI only for now — wired to ConvertKit/Beehiiv during launch (docs/SPEC.md).
export function EmailCapture({ type }: { type: BibleType }) {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const valid = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);

  if (sent) {
    return (
      <Card className="border-primary/25 bg-primary-50 p-6">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-primary text-white">
            <Check size={22} />
          </span>
          <div>
            <div className="font-bold">Check your inbox</div>
            <div className="text-sm text-ink-soft">
              Your full {type.character} result is on its way.
            </div>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="border-primary/25 bg-primary-50 p-6">
      <div className="text-lg font-bold">Get your full result by email</div>
      <p className="mt-1 mb-3.5 text-sm leading-snug text-ink-soft">
        The complete {type.character} profile, deeper verses, and a 7-day reflection
        guide — free.
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (valid) setSent(true);
        }}
        className="flex flex-wrap gap-2"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="h-12 flex-1 basis-52 rounded-btn border border-line-strong bg-surface px-3.5 text-[15px] outline-none focus:border-primary"
        />
        <Button type="submit" disabled={!valid}>
          Send it to me
        </Button>
      </form>
      <div className="mt-2.5 flex items-center gap-1.5 text-xs text-ink-faint">
        <Lock size={12} /> No spam. Unsubscribe anytime.
      </div>
    </Card>
  );
}
