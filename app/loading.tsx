export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white">

      <div className="flex flex-col items-center">

        <div className="h-16 w-16 animate-spin rounded-full border-4 border-cyan-200 border-t-cyan-700" />

        <h2 className="mt-8 text-2xl font-bold text-slate-900">
          MEDİSU
        </h2>

        <p className="mt-2 text-slate-500">
          Yükleniyor...
        </p>

      </div>

    </main>
  );
}
