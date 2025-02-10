import { z } from "zod";

export const urlSchema = z.object({
  url: z
    .string()
    .url("Please enter a valid URL")
    .startsWith("http", "URL must start with http:// or https://"),
});

export type UrlFormData = z.infer<typeof urlSchema>;
