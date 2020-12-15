
interface LineParseOptions
{
    splitter?(line: string): string[];
}

export function parseLine(line: string, options?: LineParseOptions)
{
    if (options?.splitter) {
        return options.splitter(line);
    }

    return line.match(/(?<!["'])[^\s'"]+(?!['"])|(?<=['"])([^"'][\w\s]+)(?=['"])/g) || [];
}
