import axios from "axios";

/**
 * Preconfigured Axios instance used for all API requests.
 *
 * Centralizes base URL, default headers, and timeout configuration
 * to ensure consistent API communication across the application.
 */
export const api= axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
		"Accept": "application/json",
        "Content-Type": "application/json",
	},
    timeout: 5000,
})


