export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white p-10">
      <h1 className="text-4xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-3 gap-6">
        <div className="rounded-2xl bg-zinc-900 p-6">
          <h2 className="text-xl font-semibold mb-2">Uploaded Documents</h2>

          <p className="text-zinc-400">12 documents indexed</p>
        </div>

        <div className="rounded-2xl bg-zinc-900 p-6">
          <h2 className="text-xl font-semibold mb-2">AI Requests</h2>

          <p className="text-zinc-400">142 processed questions</p>
        </div>

        <div className="rounded-2xl bg-zinc-900 p-6">
          <h2 className="text-xl font-semibold mb-2">Knowledge Status</h2>

          <p className="text-green-400">System operational</p>
        </div>
      </div>
    </main>
  );
}
