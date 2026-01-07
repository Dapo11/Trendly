const Footer = () => {
  return (
    <footer className="mt-20 border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">

        {/* Left */}
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          © {new Date().getFullYear()} Trendly. All rights reserved.
        </p>

        {/* Right */}
        <div className="flex items-center gap-4 text-sm">
          <span className="text-zinc-500 dark:text-zinc-500">
            Built with React & Tailwind
          </span>

          <span className="hidden sm:inline text-zinc-400 dark:text-zinc-600">
            •
          </span>

          <span className="text-zinc-600 dark:text-zinc-400">
            News updates every few hours
          </span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
