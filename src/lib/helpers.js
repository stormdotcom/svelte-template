// 1. Fetch Data with Error Handling
// helpers/api.js
export async function fetchData(url, params = {}, options = {}) {
    try {
        const queryString = new URLSearchParams(params).toString();
        const response = await fetch(`${url}?${queryString}`, options);

        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Fetch error:", error);
        throw error;
    }
}

// Usage
// import { fetchData } from './helpers/api.js';
// const data = await fetchData('/api/posts', { page: 1, limit: 10 });


// 2. Format Dates
// helpers/date.js
export function formatDate(date, options = {}) {
    const defaultOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };

    return new Date(date).toLocaleDateString('en-US', { ...defaultOptions, ...options });
}

// Usage
// import { formatDate } from './helpers/date.js';
// <p>{formatDate('2024-12-29')}</p>


// 3. Throttle Function
// helpers/throttle.js
export function throttle(callback, delay = 300) {
    let timeout = null;

    return (...args) => {
        if (!timeout) {
            timeout = setTimeout(() => {
                callback(...args);
                timeout = null;
            }, delay);
        }
    };
}

// Usage
// import { throttle } from './helpers/throttle.js';
// const handleScroll = throttle(() => console.log('Scrolling...'), 200);
// onMount(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
// });

// 4. Detect Mobile Devices
// helpers/device.js
export function isMobile() {
    return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
}

// Usage
// import { isMobile } from './helpers/device.js';
// <p>{isMobile() ? 'You are on a mobile device' : 'You are not on a mobile device'}</p>

