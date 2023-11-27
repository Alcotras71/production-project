import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const { isDev } = options;

    const fileLoader: webpack.RuleSetRule = {
        test: /\.(png|jpe?g|gif|woff|woff2)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const svgLoader: webpack.RuleSetRule = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const codeBabelLoader: webpack.RuleSetRule = buildBabelLoader({ ...options, isTsx: false });
    const tsxCodeBabelLoader: webpack.RuleSetRule = buildBabelLoader({ ...options, isTsx: true });
    const cssLoader: webpack.RuleSetRule = buildCssLoader(isDev);

    // Если не используем тайпскрипт - нужен babel-loader
    // const typescriptLoader: webpack.RuleSetRule = {
    //     test: /\.tsx?$/,
    //     use: 'ts-loader',
    //     exclude: /node_modules/,
    // };

    return [
        fileLoader,
        svgLoader,
        codeBabelLoader,
        tsxCodeBabelLoader,
        // typescriptLoader,
        cssLoader,
    ];
}
