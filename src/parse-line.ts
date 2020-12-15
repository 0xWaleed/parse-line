
export interface ParseLineOptions
{
    splitter?(line: string): string[];
}

export function parseLine(line: string, options?: ParseLineOptions)
{
    if (options?.splitter) {
        return options.splitter(line);
    }

    return line.match(/(?<!["'])[^\s'"]+(?!['"])|(?<=['"])([^"'][\w\s]+)(?=['"])/g) || [];
}
