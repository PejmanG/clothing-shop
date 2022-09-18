import Link from "next/link";

function NotFound() {
  return (
    <div className="h-[85vh] flex flex-col justify-center items-center">
      <p className="text-4xl pb-4">
        There&apos;s nothing here!
      </p>
      <Link href={"/"}>
        <a className="pt-4 text-slate-600 dark:text-slate-400 hover:underline hover:text-slate-900 dark:hover:text-white">
          Go Back Home
        </a>
      </Link>
    </div>
  );
}
export default NotFound;