import "@/css/style.css";
import PageTitle from "@/components/PageTitle";
import Tags from "@/components/Tags";

export default function Page() {
  return (
    <main className="min-h-screen pt-[50px] pb-[200px]">
      <div className="flex items-center justify-center">
        <div className="font-[Comfortaa] flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0">
          <div className="space-x-2 pb-8 pt-6 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-100 sm:text-4xl sm:leading-10 md:border-r-2 md:px-6 md:text-6xl md:leading-14">
              <PageTitle>Tags</PageTitle>
            </h1>
          </div>
          <div className="flex max-w-lg flex-wrap">

            <div className="mb-2 mr-5 mt-2 text-left sm:text-center">
              <Tags />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}