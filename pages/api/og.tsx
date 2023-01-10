import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "edge",
};

export default function () {
  return new ImageResponse(
    (
      <div tw="flex h-full flex-col items-center justify-center bg-[#1d3557] w-full text-gray-200">
        <h1 tw="text-9xl font-semibold -mb-8">M S A</h1>
        <p tw="text-[29px] text-gray-400">Mohammed Sobhi Alafifif</p>
        <h1 tw="text-8xl font-semibold">Portfolio</h1>
      </div>
    ),
    {
      width: 1200,
      height: 600,
    }
  );
}
