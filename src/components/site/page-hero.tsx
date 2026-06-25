type PageHeroProps = {
  title: string
  description: string
}

export function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="border-b border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 md:py-20">
        <h1 className="max-w-4xl text-4xl leading-tight font-semibold tracking-normal text-neutral-950 md:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-700 md:text-xl">
          {description}
        </p>
      </div>
    </section>
  )
}
