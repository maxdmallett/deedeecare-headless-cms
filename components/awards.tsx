import Image from 'next/image'

const Awards = () => {
    return (
        <section id="awards">
            <div className="container grid-lg ">
                <div className="image-holder d-inline-block">
                    <Image src="/images/dbs-logo.png" alt="DBS Checked" width={152} height={131} />
                </div>
                <div className="image-holder d-inline-block">
                    <Image src="/images/surewise-logo.png" alt="Insured with public liability" width={304} height={97}/>
                </div>
            </div>		
        </section>
    )
}

export default Awards