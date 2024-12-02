import request from '@/utils/http1'

export const adviceAPI = (region) => {
    return request({
        url: `/weather/${region}`,
        method: 'GET',
    })
}