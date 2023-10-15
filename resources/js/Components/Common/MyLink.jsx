import {Link} from "@inertiajs/react";

export default function MyLink({
    href,
    title
                               }){
    return(
        <Link href={href} className="rounded-full text-center px-4 py-2 bg-blue-500 text-white hover:bg-blue-700 hover:text-gray-100 transition duration-300 ease-in-out">{title}</Link>
        )

}
