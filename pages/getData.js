import Image from "next/image"


function Page({ data }) {
    <div className="container">
        PPPPPPPp
        <header>
            <div className="icon flex">
                <Image
                    // loader={myLoader}
                    src="RaMarket.png"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                /></div>
            <div className="category"></div>
            <div className="search-bar"></div>
            <div className="icon-nav"></div>
            <div className="profile-nav"></div>
        </header>
        <body>
            <div className="carousel-section"></div>
            <div className="list-product"></div>
        </body>
        <footer></footer>
    </div>

}

// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://fakestoreapi.com/products`)
    const data = await res.json()
    console.log("PPP", data)

    // Pass data to the page via props
    return { props: { data } }
}

export default Page