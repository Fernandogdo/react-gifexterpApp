export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Zp8LJjHgCaUg0ZqnGkSksvN9Skr9duEu&q=${category}&limit=10`
    const resp = await fetch(url);
    const { data } = await resp.json();
    // console.log("🚀 ~ file: GifGrid.jsx:8 ~ getGifs ~ data:", data)

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    return gifs;
}
