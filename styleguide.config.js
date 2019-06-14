const { join } = require('path');
const { createConfig, babel, css, sass, setOutput, match, file, devServer } = require('webpack-blocks');
const pkg = require('./package.json');

module.exports = {
    title: pkg.name + ' ' + pkg.version,
    components: 'src/components/[A-Z]*/index.js',
    // Render one section or component per page
    pagePerSection: true,
    // Set the props and methods tabs to be expanded by default
    usageMode: 'expand',
    sections: [
        {
            name: 'Readme',
            content: join(__dirname, 'README.md'),
        },
        // {
        //     name: 'Bigbom Design System',
        //     sectionDepth: 2,
        //     content: join(__dirname, 'internals/styleguide/00-Introduction.md'),
        //     sections: [
        //         {
        //             name: 'Branding',
        //             content: join(__dirname, 'internals/styleguide/01-Branding.md'),
        //         },
        //         {
        //             name: 'Layout',
        //             content: join(__dirname, 'internals/styleguide/02-Layout.md'),
        //         },
        //         {
        //             name: 'Typography',
        //             content: join(__dirname, 'internals/styleguide/03-Typography.md'),
        //         },
        //         {
        //             name: 'Colors',
        //             content: join(__dirname, 'internals/styleguide/04-Colors.md'),
        //         },
        //         {
        //             name: 'Spacing',
        //             content: join(__dirname, 'internals/styleguide/05-Spacing.md'),
        //         },
        //     ],
        // },
        {
            name: 'Bigbom UI Components',
            components: [join(__dirname, 'src/components/[A-Z]*/index.js')],
            sectionDepth: 2,
        },
    ],
    require: [
        // Require global style file
        join(__dirname, 'node_modules/normalize.css/normalize.css'),
        // Require fixing style for Styleguidist
        join(__dirname, 'src/styles/index.scss'),
    ],
    styleguideDir: 'docs',
    theme: {
        sidebarWidth: 250,
        // Colors
        color: {
            base: '#4D4D4D', // '#333' replaced by $basicGrey70
            light: '#7A8082', // '#767676' replaced by $basicGrey50
            lightest: '#DFE3E4', // #ccc replaced by $basicGrey10
            link: '#5472DE', // #1978c8 replaced by $secondaryColor
            linkHover: '#6486FF', // '#f28a25' replaced by $secondaryHighlight
            border: '#DFE3E4', // '#e8e8e8' replaced by $basicGrey10
            name: '#13a849', // '#7f9a44' replaced by $primaryColor
            type: '#8F5FC0', // '#b77daa' replaced by $alternativeColor6
            error: '#E37171', // '#c00' replaced by $alternativeColor1
            baseBackground: '#ffffff', // $white
            codeBackground: '#f3f5f5', // '#f5f5f5' replaced by $basicGrey5
            sidebarBackground: '#f3f5f5', // #f5f5f5 replaced by $basicGrey5
            ribbonBackground: '#f9970d',
            ribbonText: '#fff',
        },
    },
    styles: {
        Heading: {
            heading: {
                fontWeight: 'bold',
            },
        },
    },
    webpackConfig: createConfig([
        setOutput('./build/bundle.js'),
        babel(),
        css(),
        match(['*.scss', '!*node_modules*'], [css(), sass(/* node-sass options */)]),
        match(['*.gif', '*.jpg', '*.jpeg', '*.png', '*.svg', '*.webp'], [file()]),
        match(['*.md'], [file()]),
        devServer()
    ]),
};
