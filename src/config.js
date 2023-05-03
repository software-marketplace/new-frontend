const baseUrl =
  process.env.NODE_ENV === "production"
    ? "http://3.110.236.222:8000"
    : "https://devel-service-app.onrender.com";

export { baseUrl };
