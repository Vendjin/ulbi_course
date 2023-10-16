import {ResolveOptions} from "webpack";

export function buildResolvers(): ResolveOptions{
    return {
        extensions: ['.tsx', '.ts', '.js', '.jsx'], // расширения файлов для которых не указываем в пути
                                                    // при импорте вместо ./test.ts/ можно ./test
    }
}