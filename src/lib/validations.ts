import { z } from "zod";

export const urlSchema = z.object({
  url: z
    .string()
    .min(1, "URL is required")
    .url("Please enter a valid URL")
    .startsWith("http", "URL must start with http:// or https://")
    .refine((url) => {
      try {
        new URL(url);
        return true;
      } catch {
        return false;
      }
    }, "Invalid URL format")
    .refine((url) => !url.includes(" "), "URL cannot contain spaces")
    .refine(
      (url) => url.length <= 2048,
      "URL is too long (max 2048 characters)"
    ),
});

export type UrlFormData = z.infer<typeof urlSchema>;
