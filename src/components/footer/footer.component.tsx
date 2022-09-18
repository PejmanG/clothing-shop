function Footer() {
  return (
    <footer className="flex justify-center items-center h-10">
      <span className="block text-sm text-slate-600 dark:text-slate-400">
        © {new Date().getFullYear() + " "}
        <a
          href="http://127.0.0.1:5173/"
          target="_blank"
          className="hover:underline hover:text-slate-900 dark:hover:text-white"
          rel="noreferrer"
        >
          Clothing Shop™
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
}

export default Footer;