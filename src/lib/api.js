// src/lib/utils/api.js
export async function apiRequest(endpoint, method = "GET", data = null) {
    const baseUrl = import.meta.env.VITE_API_BASE_URL || "https://api.example.com"; // Set your base API URL here
    const headers = {
      "Content-Type": "application/json",
    };
  
    try {
      const response = await fetch(`${baseUrl}${endpoint}`, {
        method,
        headers,
        body: data ? JSON.stringify(data) : null,
      });
  
      if (!response.ok) {
        throw new Error(`API error: ${response.statusText}`);
      }
  
      const result = await response.json();
      return result;
    } catch (error) {
      console.error("API request failed:", error.message);
      throw error;
    }
  }
  