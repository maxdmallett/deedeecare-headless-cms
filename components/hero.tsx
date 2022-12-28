import Link from "next/link"

const Hero = () => {
    return (
        <header id="hero">
            <div className="container grid-lg">
                <div id="banner-content" className="columns">
                    <div className="column col-8 col-md-12">
                        <h1>Passionate About People</h1>
                        <p>Dee Dee Care is a small, independent healthcare provider based in Norwich, providing high-quality care in a variety of settings.</p>
                        <Link href="#about-us" >
                            <a className="button shadow">
                                Find out more
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Hero