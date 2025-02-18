import {Skeleton} from "@/components/ui/skeleton";

export default function BookPageLoading() {
  return (
    <article className="grid md:grid-cols-3 gap-8">
      <section className="md:col-span-1">
        <Skeleton className="w-full aspect-[3/4] rounded-lg"/>
      </section>
      <section className="md:col-span-2 space-y-4">
        <Skeleton className="h-8 w-1/2"/>
        <Skeleton className="h-6 w-1/3"/>
        <Skeleton className="h-6 w-1/4"/>
        <Skeleton className="h-4 w-full"/>
        <Skeleton className="h-4 w-full"/>
        <div className="flex space-x-4">
          <Skeleton className="h-10 w-24"/>
          <Skeleton className="h-10 w-24"/>
        </div>
      </section>
    </article>
  );
}