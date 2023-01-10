import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "edge",
};

export default function () {
  return new ImageResponse(
    (
      <div
        tw="flex h-full flex-col items-center justify-center w-full text-gray-200"
        style={{
          background:
            "linear-gradient(180deg, rgba(29,53,87,1) 0%, rgba(23,50,79,1) 100%)",
        }}
      >
        <h1 tw="text-9xl text-[#d2bfb7] tracking-widest font-semibold -mb-8">
          M S A
        </h1>
        <p tw="text-[29px] text-gray-400 tracking-tight">
          Mohammed Sobhi Alafifif
        </p>
        <h1 tw="text-8xl text-[#d2bfb7] font-semibold">Portfolio</h1>
      </div>
    ),
    {
      width: 1200,
      height: 600,
    }
  );
}
