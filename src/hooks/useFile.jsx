import { useState } from "react";

export function useFileDownload() {
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState(null);
      const [blobUrl, setBlobUrl] = useState(null);
      const [blobData, setBlobData] = useState(null);

      const downloadFile = async (fileUrl, fileName = "downloaded-file") => {
            if (!fileUrl) {
                  setError("No file URL provided");
                  return;
            }

            setLoading(true);
            setError(null);
            setBlobUrl(null);
            setBlobData(null);

            try {
                  const response = await fetch(fileUrl);
                  if (!response.ok) throw new Error("Failed to fetch file");

                  const blob = await response.blob();
                  const url = URL.createObjectURL(blob);

                  // Set state with Blob data and URL
                  setBlobData(blob);
                  setBlobUrl(url);

                  // Trigger download
                  const link = document.createElement("a");
                  link.href = url;
                  link.download = fileName;
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
            } catch (err) {
                  setError(err.message);
                  console.error("Download error:", err);
            } finally {
                  setLoading(false);
            }
      };

      return { downloadFile, loading, error, blobUrl, blobData };
}
