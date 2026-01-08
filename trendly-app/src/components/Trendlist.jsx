import { useEffect, useState } from "react";
import TrendCard from "./TrendCard";

const Trendlist = () => {
  const [trends, setTrends] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showNotice, setShowNotice] = useState(false);

  async function fetchTrends() {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch("https://trendly-ty16.onrender.com");

      if (!response.ok) {
        throw new Error("Server error");
      }

      const data = await response.json();

      if (!Array.isArray(data)) {
        throw new Error("Invalid data format");
      }

      setTrends(data);
    } catch (err) {
      console.error(err);
      setError("Failed to load trends");
      setTrends([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchTrends();
  }, []);

  return (
    <section className="px-6 py-16 relative">
      <div className="mx-auto max-w-7xl space-y-6">

        {/* Header + Refresh */}
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            Trending News
          </h2>

          <button
            onClick={() => setShowNotice(true)}
            className="rounded-md bg-black px-4 py-2 text-sm text-white hover:opacity-80"
          >
            Check for updates
          </button>
        </div>

        {/* States */}
        {loading && <p className="text-sm text-gray-500">Loading trends...</p>}
        {error && <p className="text-sm text-red-500">{error}</p>}

        {!loading && !error && trends.length === 0 && (
          <p className="text-sm text-gray-500">No trends available.</p>
        )}

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {trends.map((trend) => (
            <TrendCard key={trend.id} trend={trend} />
          ))}
        </div>
      </div>

      {/* 🔔 Bottom Notification */}
      {showNotice && (
        <div className="fixed inset-0 z-50 flex items-end bg-black/40">
          <div className="w-full bg-white dark:bg-zinc-900 rounded-t-2xl p-6 animate-slide-up">
            <div className="mx-auto max-w-md text-center space-y-4">
              <div className="mx-auto h-1 w-12 rounded-full bg-zinc-300 dark:bg-zinc-700" />

              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                News updates every few hours
              </h3>

              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Trending news does not refresh instantly. Please check back later.
              </p>

              <button
                onClick={() => setShowNotice(false)}
                className="rounded-md bg-black px-4 py-2 text-sm text-white hover:opacity-80"
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Trendlist;
