// @ts-ignore
export async function handle({ event, resolve }) {
    try {
      const response = await resolve(event);
      return response;
    } catch (error) {
      return new Response(null, {
        // @ts-ignore
        status: error.status || 500,
        headers: {
          // @ts-ignore
          Location: `/error?code=${error.status || 500}&message=${encodeURIComponent(
            // @ts-ignore
            error.message || "An unexpected error occurred"
          )}`,
        },
      });
    }
  }
  