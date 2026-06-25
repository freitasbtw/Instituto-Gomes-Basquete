type SectionHeadingProps = {
  label?: string
  title: string
  description?: string
}

export function SectionHeading({ label, title, description }: SectionHeadingProps) {
  return (
    <div>
      {label ? (
        <p className="text-sm font-semibold tracking-[0.08em] text-[#d9491e] uppercase">
          {label}
        </p>
      ) : null}
      <h2 className="mt-3 max-w-3xl text-3xl leading-tight font-semibold tracking-normal text-neutral-950 md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-700">
          {description}
        </p>
      ) : null}
    </div>
  )
}
