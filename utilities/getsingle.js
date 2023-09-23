import axios from "./axios"
const Api_key = "75842d12fc750d152abce067177a2e53"

export const getsingle =async (id) => {
    try {
        const { data } = await axios.get(`/movie/${id}?api_key=${Api_key}`)
        return data
    } catch (error) {
        console.log(error)
    }
}
