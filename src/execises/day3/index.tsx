import * as React from 'react';
import Exersise from '../../components/exercise-layout';
import './exercise/part-two'
import { CodeBlock } from '../../components/code-block';

import partOneText from './exercise/part-one/text';
import partTwoText from './exercise/part-two/text';

const Ex = () => (
    <>
        <p>You and the Elf eventually reach a gondola lift station; he says the gondola lift will take you up to the water source, but this is as far as he can bring you. You go inside.</p>

        <p>It doesn't take long to find the gondolas, but there seems to be a problem: they're not moving.</p>

        <p>"Aaah!"</p>

        <p>You turn around to see a slightly-greasy Elf with a wrench and a look of surprise. "Sorry, I wasn't expecting anyone! The gondola lift isn't working right now; it'll still be a while before I can fix it." You offer to help.</p>

        <p>The engineer explains that an engine part seems to be missing from the engine, but nobody can figure out which one. If you can add up all the part numbers in the engine schematic, it should be easy to work out which part is missing.</p>

        <p>The engine schematic (your puzzle input) consists of a visual representation of the engine. There are lots of numbers and symbols you don't really understand, but apparently any number adjacent to a symbol, even diagonally, is a "part number" and should be included in your sum. (Periods (.) do not count as a symbol.)</p>

        <p>Here is an example engine schematic:</p>

        <pre>
            467..114..<br />
            ...*......<br />
            ..35..633.<br />
            ......#...<br />
            617*......<br />
            .....+.58.<br />
            ..592.....<br />
            ......755.<br />
            ...$.*....<br />
            .664.598..
        </pre>

        <p>In this schematic, two numbers are not part numbers because they are not adjacent to a symbol: 114 (top right) and 58 (middle right). Every other number is adjacent to a symbol and so is a part number; their sum is 4361.</p>

        <p>Of course, the actual engine schematic is much larger. What is the sum of all of the part numbers in the engine schematic?</p>
    </>
);

const Code = () => {
    return (
        <>
            <p>
                <em>--- Part 1 ---</em>
            </p>

            <CodeBlock code={partOneText}/>
        </>
    );
}

export const DayThree: React.FC = () => {
    return (
        <Exersise ExerciseComponent={Ex} CodeComponent={Code} />
    )
}