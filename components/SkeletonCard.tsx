import { Skeleton } from "@/components/ui/skeleton"

const SkeletonCard = () => {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[550px]" />
        <Skeleton className="h-4 w-[500px]" />
      </div>
    </div>
  )
}

export default SkeletonCard