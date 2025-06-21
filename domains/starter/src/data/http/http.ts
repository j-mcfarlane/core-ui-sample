import axios, { AxiosInstance } from 'axios'

// Session utils
import { useAppSession } from '@/data'

export async function useAxios(uploadCb?: () => void): Promise<{ http: AxiosInstance }> {
    const session = await useAppSession()

    const instance = axios.create({
        baseURL: process.env.VITE_BASE_URL,
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${session.data.access}`,
        },
        onUploadProgress: uploadCb,
    })

    instance.interceptors.response.use(
        (response) => response,
        async (error) => {
            const sesh = await useAppSession()

            if (!sesh.data.refresh) {
                return Promise.reject(error)
            }

            const originalRequest = error.config

            if (error.response?.status === 401 && !originalRequest._retry) {
                originalRequest._retry = true

                try {
                    const sesh = await useAppSession()

                    const res = await axios.post<{
                        success: boolean
                        data: {
                            access: string
                            refresh: string
                            refresh_id: string
                        }
                    }>(
                        `${process.env.VITE_BASE_URL}/authentication/refresh`,
                        {
                            refresh_id: sesh.data.refresh_id,
                        },
                        {
                            headers: {
                                Authorization: `Bearer ${sesh.data.refresh}`,
                            },
                        },
                    )

                    instance.defaults.headers.common['Authorization'] = `Bearer ${res.data.data.access}`
                    originalRequest.headers['Authorization'] = `Bearer ${res.data.data.access}`

                    sesh.update({
                        access: res.data.data.access,
                        refresh: res.data.data.refresh,
                        refresh_id: res.data.data.refresh_id,
                    })

                    return instance(originalRequest)
                } catch (err) {
                    sesh.clear()

                    return Promise.reject(err)
                }
            }

            return Promise.reject(error)
        },
    )

    return {
        http: instance,
    }
}
