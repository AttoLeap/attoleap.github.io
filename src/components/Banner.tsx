import { JSX } from "solid-js/jsx-runtime"

type BannerProps = {
    headline: string,
    tagline: string
}

export default function Banner(props: BannerProps): JSX.Element {
    return (
        <div class="w-screen h-[calc(100vh_-_72px)] grid grid-rows-1 grid-cols-5 place-items-center p-4 md:p-8 lg:p-12">
            <div class="col-start-2 col-end-5 font-brand flex flex-col gap-8">
            <h1 class="font-bold text-zinc-800 dark:text-zinc-100 text-9xl text-center">{props.headline}</h1>
            <h2 class="text-zinc-600 dark:text-zinc-300 text-3xl text-center">{props.tagline}</h2>
            </div>
        </div>
    )
}