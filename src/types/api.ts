export interface PageAnalysis {
  htmlVersion: string;
  pageTitle: string;
  headings: {
    h1: number;
    h2: number;
    h3: number;
    h4: number;
    h5: number;
    h6: number;
  };
  links: {
    internal: number;
    external: number;
    inaccessible: number;
  };
  hasLoginForm: boolean;
}

export interface ApiError {
  statusCode: number;
  message: string;
}
