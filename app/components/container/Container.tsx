export const Container = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="w-full lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
  );
};
