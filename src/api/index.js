export async function fetchNews(page) {
    const response = await fetch(`https://flems.github.io/test/api/news/${page}/`)
    if (response.ok) {
        return response.json()
    }
    return response.status
}



