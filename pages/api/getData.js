function Page({ data }) {
    // Render data...
    console.log("OOO",data);
}

// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://fakestoreapi.com/products`)
    const data = await res.json()
    console.log("PPP",data)

    // Pass data to the page via props
    return { props: { data } }
}

export default Page