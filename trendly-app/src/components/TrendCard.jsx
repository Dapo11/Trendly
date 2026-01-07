import React from "react";

const TrendCard = ({ trend }) => {
  if (!trend) return null;

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-xl p-5 shadow-sm dark:border-zinc-800">
      
      {/* Image (only render if it exists) */}
      {trend.image && (
        <img
          src={trend.image}
          alt={trend.title || "Trending news image"}
          className="h-48 w-full object-cover rounded-lg"
        />
      )}

      {/* Title */}
      {trend.title && (
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          {trend.title}
        </h2>
      )}

      {/* Summary */}
      {trend.summary && (
        <p className="mt-3 text-sm text-zinc-700 dark:text-zinc-300">
          {trend.summary}
        </p>
      )}

      {/* Why it matters */}
      {trend.whyItMatters && (
        <p className="mt-4 text-sm font-medium text-zinc-800 dark:text-zinc-400">
          <span className="font-bold">Why it matters:</span>{" "}
          {trend.whyItMatters}
        </p>
      )}
    </div>
  );
};

export default TrendCard;
