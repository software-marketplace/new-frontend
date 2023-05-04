const baseUrl =
    process.env.NODE_ENV === "production"
        ? "https://devel-service-app.onrender.com"
        : "http://localhost:8000"

export { baseUrl };
