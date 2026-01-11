/**
 * Generic API response wrapper.
 *
 * Used to strongly type responses returned from the backend API.
 * The generic type T represents the actual payload of the response.
 */
export interface ApiResponse<T> {
    status: string,
    data: T,
    message: string,
}