type Props = {
  children?: React.ReactNode;
};

export default function LoggedOutLayout({ children }: Props) {
  return (
    <div className="flex flex-col min-h-screen items-center p-24 justify-center gap-4">
      {children}
    </div>
  );
}
