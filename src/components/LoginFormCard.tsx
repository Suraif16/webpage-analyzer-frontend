import { cardStyles } from "@/styles/components/cards";

interface LoginFormCardProps {
  hasLoginForm: boolean;
}

export function LoginFormCard({ hasLoginForm }: LoginFormCardProps) {
  return (
    <div className={`${cardStyles.resultCard} md:col-span-2`}>
      <h3 className={cardStyles.title}>Login Form Detection</h3>
      <div className="flex items-center justify-between p-4 bg-gray-600 rounded">
        <div className="flex items-center">
          <div
            className={`w-3 h-3 rounded-full mr-2 ${
              hasLoginForm ? "bg-green-500" : "bg-red-500"
            }`}
          />
          <span className="text-white">
            {hasLoginForm ? "Login form detected" : "No login form found"}
          </span>
        </div>
        {hasLoginForm && (
          <span className="text-sm text-gray-300">✓ Form elements found</span>
        )}
      </div>
    </div>
  );
}
