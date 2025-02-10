import { cardStyles } from "@/styles/components/cards";

interface ResultCardProps {
  title: string;
  value: string;
}

export function ResultCard({ title, value }: ResultCardProps) {
  return (
    <div className={cardStyles.resultCard}>
      <h3 className={cardStyles.title}>{title}</h3>
      <p className="text-gray-300">{value}</p>
    </div>
  );
}
