import { JSX } from "solid-js";

type NavbarProps = {
    name: string,
    logo: string
}

function Navbar(props: NavbarProps): JSX.Element {
    return (
        <nav class="h-18 px-16 py-4 flex justify-between place-items-center font-brand">
            <div class="flex flex-row place-items-center gap-1">
                <img class="h-9 w-9" alt="AttoLeap's Logo" src={props.logo} />
            </div>
            <div class="flex flex-row place-items-center justify-evenly gap-4 text-sm font-medium text-gray-500 dark:text-gray-300 transition-colors">
                <a class="hover:text-brand-aux" href="/">Home</a>
                <a class="hover:text-brand-aux" href="/">About</a>
                <a class="hover:text-brand-aux" href="/">Contact</a>
            </div>
        </nav>
    )
}

export default Navbar;