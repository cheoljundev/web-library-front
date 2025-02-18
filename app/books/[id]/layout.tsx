export default function BookPageLayout({children}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="container mx-auto px-4 py-8 max-w-7xl">
      {children}
    </main>
  );
}