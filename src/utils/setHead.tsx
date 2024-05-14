import Head from "next/head";

interface iData {
    url?: string;
    title?: string;
    keywords?: string;
    description: string;
}

export function SetHead (data: iData) {
    let title = data.title || "Beranda";
    let description = data.description;
    let keywords = data.keywords;
    let url = data.url;
    
    title += " | Bimbel Griselda";

    return (
        <Head>
            <title>{ title }</title>
            <link rel="icon" href="/assets/logo.png" />

            <meta name="author" content="Reclas Technology" />
            <meta name="keywords" content={ keywords } />
            <meta name="description" content={ description } />

            <meta property="og:description" content={ description } />
            <meta property="og:image" content="https://bimbelgriselda.com/assets/logo.png" />
            <meta property="og:url" content={ url } />
        </Head>
    )
}