export async function getHouses() {
    const res = await fetch("/api/houses")
    const data = await res.json()
    return data.houses
}