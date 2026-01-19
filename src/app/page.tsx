const Home = () => {
  return (
    <div className="min-h-screen">
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <h1 className="text-3xl font-bold text-foreground">
            {"Welcome to Sydney Health Partners"}
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            {"Sydney Health Partners in action."}
          </p>

          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="rounded-lg border bg-card p-6">
              <h2 className="text-xl font-semibold text-card-foreground mb-2">
                {`Section ${i + 1}`}
              </h2>
              <p className="text-muted-foreground">
                {
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris."
                }
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
