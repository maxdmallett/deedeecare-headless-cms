import Head from 'next/head'

interface IProps {
    title?: string;
}

const CommonHead = (props:IProps) => {
    return (
        <Head>
            <title>{props.title ? `${props.title} - ` : ""}Dee Dee Care - Passionate About People</title>
            <meta name="description" content="Dee Dee Care is small healthcare provider based in Norwich, Norfolk. We are passionate about people and understand the importance of well-being, encouragement and listening. We provide services such as homecare, supporting carers, supported living, hoarding support and care home support." />
            <meta name="author" content="Max Mallett" />
            <link rel="icon" href="/favicon.png" />
            <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
            <meta charSet="UTF-8" />
            <meta name="theme-color" content="#8ac43f" />
            <meta property="og:url" content="https://www.deedeecare.co.uk/images/dee-dee-care-og-image.jpg" />
        </Head>
    )
}

export default CommonHead