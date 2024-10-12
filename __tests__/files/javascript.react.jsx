import useProjectconfig from "@/hooks/useProjectconfig";

export default function Index() {
  const { foo } = useProjectconfig();

  return (
    <main className="flex h-screen w-screen items-start justify-center p-32">
      <div className="flex flex-col px-6">
        <span className="text-3xl uppercase dark:text-neutral-50">
          hello {foo}! 👋
        </span>
      </div>
    </main>
  );
}
