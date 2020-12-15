import {expect} from 'chai';
import {parseLine, ParseLineOptions} from '../src';


describe('parse-line', () =>
{

    it('should return empty array when line is empty', () =>
    {
        expect(parseLine('')).to.be.an('array');
    });

    it('should split the line by space', () =>
    {
        expect(parseLine('hello world')).to.deep.equals(['hello', 'world']);
        expect(parseLine('hello world!')).to.deep.equals(['hello', 'world!']);
    });

    it('should able to split spaces by default if custom splitter not provided', () =>
    {
        expect(parseLine('hello world', {})).to.deep.equals(['hello', 'world']);
    });

    it('should able to split a line by given function', () =>
    {
        let options: ParseLineOptions = {
            splitter: (line: string) : string[]=> {
                return line.split(', ')
            }
        };
        expect(parseLine('hello, world', options)).to.deep.equals(['hello', 'world']);
    });

    it('expects quoted string to be one value', () =>
    {
        expect(parseLine('"hello world"')).to.deep.equals(['hello world']);
        expect(parseLine('say "hello world" now')).to.deep.equals(['say', 'hello world', 'now']);
        expect(parseLine('say \'hello world\' now')).to.deep.equals(['say', 'hello world', 'now']);
    });
});
