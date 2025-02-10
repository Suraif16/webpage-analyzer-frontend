import { cardStyles } from "@/styles/components/cards";
import type { PageAnalysis } from "@/types/api";

interface LinksCardProps {
  links: PageAnalysis["links"];
}

export function LinksCard({ links }: LinksCardProps) {
  const linkTypes = [
    { label: "Internal", value: links.internal, color: "bg-blue-500" },
    { label: "External", value: links.external, color: "bg-green-500" },
    { label: "Inaccessible", value: links.inaccessible, color: "bg-red-500" },
  ];

  return (
    <div className={cardStyles.resultCard}>
      <h3 className={cardStyles.title}>Links Analysis</h3>
      <div className="space-y-3">
        {linkTypes.map(({ label, value, color }) => (
          <div
            key={label}
            className="flex items-center justify-between p-2 bg-gray-600 rounded transition-all hover:bg-gray-500"
          >
            <div className="flex items-center">
              <div className={`w-2 h-2 rounded-full ${color} mr-2`} />
              <span className="text-gray-300">{label}</span>
            </div>
            <span className="text-white font-medium">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
