"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-hot-toast";
import axios from "axios";

import { urlSchema, type UrlFormData } from "@/lib/validations";
import { buttonStyles } from "@/styles/components/buttons";
import { cardStyles } from "@/styles/components/cards";
import { formStyles } from "@/styles/components/forms";
import { fadeIn } from "@/styles/animations";
import type { PageAnalysis } from "@/types/api";

import { LoadingSkeleton } from "@/components/LoadingSkeleton";
import { ResultCard } from "@/components/ResultCard";
import { HeadingsCard } from "@/components/HeadingsCard";
import { LinksCard } from "@/components/LinksCard";
import { LoginFormCard } from "@/components/LoginFormCard";

export default function Home() {
  const [analysis, setAnalysis] = useState<PageAnalysis | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<{
    message: string;
    description: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UrlFormData>({
    resolver: zodResolver(urlSchema),
  });

  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

  const onSubmit = async (data: UrlFormData) => {
    try {
      setLoading(true);
      setAnalysis(null);
      setError(null);

      const response = await axios.post<PageAnalysis>(
        `${apiUrl}/analyze`,
        data
      );
      setAnalysis(response.data);
      toast.success("Analysis complete!");
    } catch (err) {
      setAnalysis(null);
      if (axios.isAxiosError(err)) {
        if (!err.response) {
          toast.error("Server unavailable");
          return;
        }

        const apiError = err.response.data;
        setError({
          message: apiError.message,
          description: apiError.description,
        });

        // For specific error messages, don't display toast notifications
        switch (err.response.status) {
          case 400:
            setError({
              message: "Invalid URL format",
              description: "Please check the URL format and try again.",
            });
            break;
          case 404:
            setError({
              message: "Domain not found",
              description: "Please verify the URL.",
            });
            break;
          case 502:
            setError({
              message: "Could not connect to the website",
              description: "The website may be down or unreachable.",
            });
            break;
          case 503:
            setError({
              message: "The site can’t be reached",
              description: "Please try again later.",
            });
            break;
          case 504:
            setError({
              message: "Request timed out",
              description: "The request took too long. Please try again.",
            });
            break;
          default:
            setError({
              message: "Failed to analyze URL",
              description: "Something went wrong. Please try again.",
            });
        }
      } else {
        setError({
          message: "Error",
          description: "An unexpected error occurred. Please try again.",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Web Page Analyzer
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="mb-8">
          <div className="flex gap-4">
            <input
              {...register("url")}
              type="url"
              placeholder="Enter URL to analyze (e.g., https://example.com)"
              className={formStyles.input}
            />
            <button
              type="submit"
              disabled={loading}
              className={`${buttonStyles.base} ${buttonStyles.primary} ${
                loading && buttonStyles.loading
              }`}
            >
              {loading ? "Analyzing..." : "Analyze"}
            </button>
          </div>
          {errors.url && (
            <p className={formStyles.error}>{errors.url.message}</p>
          )}
        </form>

        {loading ? (
          <LoadingSkeleton />
        ) : error ? (
          <div className="text-red-500 bg-red-100 p-4 rounded-lg">
            <h2 className="font-semibold">{error.message}</h2>
            <p>{error.description}</p>
          </div>
        ) : (
          analysis && (
            <div className={`${cardStyles.container} ${fadeIn}`}>
              <h2 className="text-2xl font-semibold text-white mb-6">
                Analysis Results
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ResultCard title="HTML Version" value={analysis.htmlVersion} />
                <ResultCard title="Page Title" value={analysis.pageTitle} />
                <HeadingsCard headings={analysis.headings} />
                <LinksCard links={analysis.links} />
                <LoginFormCard hasLoginForm={analysis.hasLoginForm} />
              </div>
            </div>
          )
        )}
      </div>
    </main>
  );
}
