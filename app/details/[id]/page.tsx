"use client";
import { Container } from "@/app/components/container/Container";
import { DownloadLink } from "@/app/components/ui/downloadLink/DownloadLink";
import { getSingleImage } from "@/app/lib/queryFuncs";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import * as React from "react";

type Props = {
  params: { id: string };
};

export default function Page({ params }: Props) {
  const { id } = useParams();
  console.log("id", id);
  const imageId = id;
  const { data, isPending } = useQuery({
    queryKey: ["singleImage", imageId],
    queryFn: () => getSingleImage(imageId as string),
    enabled: !!imageId,
  });

  if (isPending) {
    return (
      <Container>
        <p className="text-4xl">Loading</p>
      </Container>
    );
  }
  return (
    <Container>
      {" "}
      <div className="py-4">
        <h1 className="text-center font-bold text-2xl">Detailed Image</h1>
        {data && (
          <p className="mb-4">Image title: {data.data.data[0].title}</p>
        )}{" "}
        <div className="grid grid-cols-2">
          <div>
            {data && (
              <Image
                src={data.data.data[0].file.hd.gif.url || ""}
                alt={data.data.data[0].title || "Detailed Image"}
                width={data.data.data[0].file.hd.gif.width}
                height={data.data.data[0].file.hd.gif.height}
                className="rounded shadow"
              />
            )}
          </div>
          <div>
            <h2>Image Details</h2>
            <p className="text-teal-950">
              This section can include more details about the image with ID:{" "}
              {imageId}.
            </p>
            <div className="mt-4 border py-4 px-4 rounded shadow border-gray-200">
              <p className="mb-4">Download section</p>
              {}
              {Object.entries(data.data.data[0].file).map(([size, formats]) => (
                <div
                  key={size}
                  className="mb-2 grid grid-cols-[80px_minmax(0,1fr)] gap-3 border-b pb-2 border-gray-300 items-center"
                >
                  <h3 className="font-semibold">{size.toUpperCase()}</h3>

                  <ul className="flex gap-2 flex-wrap items-center">
                    {Object.entries(
                      formats as Record<string, { url: string }>,
                    ).map(([format, file]) => (
                      <li key={format}>
                        <DownloadLink
                          url={file.url}
                          title={`${format.toUpperCase()}`}
                          fileName={
                            data.data.data[0].title + `_${size}.${format}`
                          }
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
