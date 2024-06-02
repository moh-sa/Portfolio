type TProps = {
  children: React.ReactNode;
};
export function ProjectFooter({ children }: TProps) {
  return (
    <footer className="flex flex-wrap items-center justify-center gap-2 p-1">
      {children}
    </footer>
  );
}
