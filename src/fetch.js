import axios from "axios";
import {ref} from "vue";

export const useFetch = (url, config = {}) => {
    const data = ref(null)
    const response = ref(null)
    const error = ref(null)
    const loading = ref(false)

    const get_cafes = async () => {
        try {
            loading.value = true
            const result = await axios.request({
                url,
                ...config
            })
            response.value = result
            data.value = result.data.data
        } catch (e) {
            error.value = e
        } finally {
            loading.value = false
        }
    }
    !config.skip && get_cafes()

    return {response, error, data, loading, get_cafes}
}