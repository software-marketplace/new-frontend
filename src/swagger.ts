export const options = {
    definition: {
        openapi: '3.0.0', // Specification (optional, defaults to swagger: '2.0')
        info: {
            title: 'Software Marketplace', // Title (required)
            version: '1.0.0', // Version (required)
        },
        securityDefinitions: {
            bearerAuth: {
                type: 'apiKey',
                name: 'Authorization',
                scheme: 'bearer',
                in: 'header',
            },
        },
    },
    apis: ['dist/api/**/*.js', 'src/api/**/*.ts']
};
