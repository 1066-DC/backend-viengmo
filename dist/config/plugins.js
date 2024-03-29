"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ env }) => ({
    email: {
        config: {
            provider: 'sendgrid',
            providerOptions: {
                apiKey: env('SENDGRID_API_KEY'),
            },
            settings: {
                defaultFrom: 'sylvain@dorey.io',
                defaultReplyTo: 'sylvain@dorey.io',
            },
        },
    },
    'strapi-plugin-populate-deep': {
        config: {
            defaultDepth: 3, // Default is 5
        }
    },
    "google-map-picker": {
        config: {
            apiKey: env("GOOGLE_MAP_API_KEY"),
            default_center: { lat: 17.98, lng: 102.61 }, // required
        },
    },
    upload: {
        config: {
            provider: 'aws-s3',
            providerOptions: {
                accessKeyId: env('AWS_ACCESS_KEY_ID'),
                secretAccessKey: env('AWS_ACCESS_SECRET'),
                region: env('AWS_REGION'),
                params: {
                    Bucket: env('AWS_BUCKET'),
                },
            },
            actionOptions: {
                upload: {},
                uploadStream: {},
                delete: {},
            },
        },
    },
});
