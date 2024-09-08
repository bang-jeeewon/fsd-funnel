import { apiFetch } from '@/shared/utils/fetchInstance'

export const fetchPricesData = async () => {
  try {
    const data = await apiFetch(
      'https://66d98da34ad2f6b8ed5527b3.mockapi.io/',
      '/api/phone'
    )
    // console.log(data)

    return data
  } catch (error) {
    console.error(error)
  }
}
