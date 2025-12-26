// ApiResponse<T>

export interface ApiResponse<T> {
    status: string,
    data: T,
}