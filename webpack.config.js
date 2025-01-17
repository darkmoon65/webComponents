const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js', // Nombre del archivo de salida
        path: path.resolve(__dirname, 'dist'), // Carpeta donde se generará el archivo
    },
    module: {
        rules: [
            {
                test: /\.html$/, // Aplica a archivos .html
                use: 'html-loader', // Usamos 'html-loader' para cargar HTML como cadenas
            },
            {
                test: /\.css$/, // Aplica a archivos .css
                use: ['style-loader', 'css-loader'], // Usamos loaders para CSS
            },
        ],
    },
    devServer: {
        static: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
    },
    plugins: [
        new (require('html-webpack-plugin'))({
            template: './src/index.html',
        }),
    ],
};
