export const PageContent = ({ title, children }: { title: string, children: React.ReactNode }) => {
  return (
    <main>
      <h1>{title}</h1>
      {children}
    </main>
  );
};
