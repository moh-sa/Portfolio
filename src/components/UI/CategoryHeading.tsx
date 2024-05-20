type TProps = {
  text: string;
};
export function CategoryHeading({ text }: TProps) {
  return <h2 className="mb-2 text-2xl font-thin text-slate-300">{text}</h2>;
}
