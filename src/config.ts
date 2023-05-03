interface Config {
    JWT_SECRET: string;
    GITHUB_CLIENT_ID: string;
    GITHUB_CLIENT_SECRET: string;
}

const config: Config = {
    JWT_SECRET: process.env.JWT_SECRET ?? "secret",
    GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID ?? "",
    GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET ?? "",
};

export default config;
