import Link from "next/link"
const AboutPage = () => {
    return (
        <div>
            <h1 className="text-3xl">
                AboutPage
            </h1>
            <Link href='/' className="text-2x">
                homepage</Link>
        </div>
    )
}

export default AboutPage