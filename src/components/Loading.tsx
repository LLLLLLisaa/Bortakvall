/**
 * LoadingPage
 *
 * Displays a loading indicator while data is being fetched.
 * Used to provide feedback to the user during async operations.
 */
export default function Loading() {
    return (
      <main className="container d-flex justify-content-center align-items-center" style={{ minHeight: "60vh" }}>
        <div className="text-center">
          <div className="spinner-border text-secondary mb-3" role="status" />
          <p className="text-muted">Laddar…</p>
        </div>
      </main>
    );
  }
  