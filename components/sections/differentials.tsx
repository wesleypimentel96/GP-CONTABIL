import { DIFFERENTIALS } from "@/lib/site";
import { Reveal } from "@/components/shared/reveal";
import { Sparkles, Target, RefreshCcw } from "lucide-react";

const ICONS = [Sparkles, Target, RefreshCcw];

export function Differentials() {
  return (
    <section className="bg-ink-dark text-cream" aria-label="Diferenciais">
      <div className="container grid gap-6 py-10 md:grid-cols-3">
        {DIFFERENTIALS.map((item, i) => {
          const Icon = ICONS[i % ICONS.length];
          return (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="flex gap-4">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-card bg-bege text-ink-dark">
                  <Icon className="size-5" aria-hidden />
                </span>
                <div>
                  <h2 className="font-semibold">{item.title}</h2>
                  <p className="mt-1 text-sm text-cream/70">{item.description}</p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
