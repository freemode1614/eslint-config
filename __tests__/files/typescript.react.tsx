import { useNavigate } from "react-router";

export default function PageNotFound() {
  const navigate = useNavigate();

  return (
    <main className="flex h-screen w-screen items-start justify-center p-32">
      <div className="flex flex-col px-6">
        <span className="text-3xl font-extrabold text-gray-700">
          Whoops!
        </span>
        <span className="mt-6 text-2xl font-extrabold text-gray-600">
          404 Page Not Found
        </span>
        <span className="mt-6 text-2xl font-extrabold text-gray-600">
          Looks like this page went on vacation.
        </span>
        <span
          role="none"
          className="mt-6"
          onClick={() => {
            navigate("/");
          }}
        >
          Back to home
        </span>
      </div>
    </main>
  );
}
