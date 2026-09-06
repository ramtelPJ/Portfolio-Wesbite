import { statSync } from "fs";
import path from "path";

// Server-only: reads the file's last-modified time at build time so the
// resume link's cache-busting query changes only when the PDF actually does.
export function getResumeVersion(): number {
  try {
    const filePath = path.join(process.cwd(), "public", "resume.pdf");
    return Math.floor(statSync(filePath).mtimeMs);
  } catch {
    return 0;
  }
}
