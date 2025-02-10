import { cardStyles } from "@/styles/components/cards";
import type { PageAnalysis } from "@/types/api";

interface HeadingsCardProps {
  headings: PageAnalysis["headings"];
}

export function HeadingsCard({ headings }: HeadingsCardProps) {
  return (
    <div className={cardStyles.resultCard}>
      <h3 className={cardStyles.title}>Headings Distribution</h3>
      <div className="grid grid-cols-3 gap-3">
        {Object.entries(headings).map(([level, count]) => (
          <div
            key={level}
            className="bg-gray-600 rounded p-2 text-center transition-all hover:bg-gray-500"
          >
            <div className="text-sm text-gray-300">{level.toUpperCase()}</div>
            <div className="text-xl font-semibold text-white">{count}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
