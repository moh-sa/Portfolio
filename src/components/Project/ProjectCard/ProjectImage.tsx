import Image from "next/image";

type TProps = {
  src: string;
  alt: string;
};
export function ProjectImage({ src, alt }: TProps) {
  return (
    <figure className="relative aspect-video p-1 pb-0">
      <Image
        src={src}
        width={448}
        height={220}
        alt={alt}
        className="aspect-video max-h-56 w-full rounded-t-[0.25rem] object-cover"
      />
    </figure>
  );
}
