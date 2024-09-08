type FetchOptions = RequestInit & {
  headers?: HeadersInit // HeadersInit 타입 사용
}

const createFetchInstance = (defaultOptions: FetchOptions = {}) => {
  return async (
    baseURL: string,
    endpoint: string,
    options: FetchOptions = {}
  ) => {
    // 기본 Content-Type을 JSON으로 설정하고 헤더 병합
    const headers = new Headers({
      'Content-Type': 'application/json',
      ...(defaultOptions.headers instanceof Headers
        ? Object.fromEntries(defaultOptions.headers.entries())
        : defaultOptions.headers),
      ...(options.headers instanceof Headers
        ? Object.fromEntries(options.headers.entries())
        : options.headers),
    })

    // 요청 구성 설정: 기본 옵션, 사용자 옵션 병합
    const config: FetchOptions = {
      ...defaultOptions,
      ...options,
      headers: headers,
    }

    const response = await fetch(`${baseURL}${endpoint}`, config)

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    return response.json()
  }
}

// 공통적으로 사용할 fetch 인스턴스 생성
export const apiFetch = createFetchInstance({
  headers: {
    // Authorization: 'Bearer your_token_here', // 공통 토큰이나 헤더 설정
  },
})
