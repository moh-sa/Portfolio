import OpenGraph from '$/components/OpenGraph/OpenGraph';
import { ImageResponse } from 'next/server';

export const alt = "Mohammed Sobhi's Portfolio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';
export const runtime = 'edge';

export default function og() {
  return new ImageResponse(<OpenGraph />, {
    ...size,
  });
}
