module.exports = {
    siteMetadata: {
        title: 'Gatsby Default Starter',
        description:
            'Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.',
        author: '@gatsbyjs',
    },
    plugins: [
        'gatsby-plugin-typescript',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-anchor-links',
        'gatsby-plugin-lodash',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        'gatsby-plugin-optimize-svgs',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: 'gatsby-plugin-google-fonts',
            options: {
                fonts: [
                    'Open Sans',
                    'Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap', // you can also specify font weights and styles
                ],
                display: 'auto',
            },
        },
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /\.inline\.svg$/, // See below to configure properly
                },
            },
        },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'gatsby-starter-default',
                short_name: 'starter',
                start_url: '/',
                background_color: '#663399',
                theme_color: '#663399',
                display: 'minimal-ui',
            },
        },
        {
            resolve: 'gatsby-plugin-less',
            options: {
                javascriptEnabled: true,
                cssLoaderOptions: {
                    camelCase: false,
                },
            },
        },
    ],
};
