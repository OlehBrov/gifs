import { downloadFile } from "@/app/lib/download";

export const DownloadLink = ({
  url,
  title,
  fileName,
}: {
  url: string;
  title: string;
  fileName?: string;
}) => {
  return (
    <button
      onClick={() => downloadFile(url, fileName)}
      className="text-white decoration-none rounded-xl bg-green-700 px-4 py-2 hover:bg-green-800 cursor-pointer"
    >
      {title}
    </button>
  );
};
