const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Express API for Instagram Application',
        version: '1.0.0',
        description:
          'These all APIs are dummy for my practice purpose.',
        license: {
          name: 'Licensed Under MIT',
          url: 'https://spdx.org/licenses/MIT.html',
        },
        contact: {
          name: 'Nikhil Gupta',
          url: 'https://wikkipeadia.com',
        },
      },
      servers: [
        {
          url: 'http://localhost:3000',
          description: 'Development server',
        },
      ],
      components: {
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
            }
        }
    },
    security: [{
        bearerAuth: []
    }]
    }

export {swaggerDefinition};