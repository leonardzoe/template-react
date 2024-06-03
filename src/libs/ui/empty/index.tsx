import { cn } from "@/libs/tailwind-variants"
import React from "react"
import { LuArchive } from "react-icons/lu"

export const Empty = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(function ({ children, className, ...props }, ref) {
  return (
    <div
      ref={ref}
      className={cn(
        "text-muted p-base flex min-h-56 w-full flex-col items-center justify-center gap-2",
        className,
      )}
      {...props}
    >
      <LuArchive className="text-5xl" />
      <p className="text-center font-medium">
        {children || "No results found"}
      </p>
    </div>
  )
})

Empty.displayName = "Empty"
