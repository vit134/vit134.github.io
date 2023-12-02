import * as React from 'react';
import Exersise from '../../components/exercise-layout';
import { CodeBlock } from '../../components/code-block';

import partOneText from './exercise/part-one/text';
import partTwoText from './exercise/part-two/text';

const Ex:React.FC = () => (
    <>
        <p>
        The newly-improved calibration document consists of lines of text; each line originally contained a specific <em>calibration value</em> that the Elves now need to recover.
        On each line, the calibration value can be found by combining the <em>first digit</em> and the <em>last digit</em> (in that order) to form a single <em>two-digit number</em>.
        </p>

        <p>For example:</p>

        <pre>
            1abc2<br/>
            pqr3stu8vwx<br/>
            a1b2c3d4e5f<br/>
            treb7uchet
        </pre>

        <p>In this example, the calibration values of these four lines are <code>12</code>, <code>38</code>, <code>15</code>, and <code>77</code>. Adding these together produces <code>142</code>.</p>
        <p>
            Consider your entire calibration document.
            <em>What is the sum of all of the calibration values?</em>
        </p>

        <p>--- Part Two ---</p>

        <p>
            Your calculation isn't quite right. It looks like some of the digits are actually spelled out with letters: <code>one</code>, <code>two</code>, <code>three</code>, <code>four</code>, <code>five</code>, <code>six</code>, <code>seven</code>, <code>eight</code>, and <code>nine</code> also count as valid "digits".
        </p>
        <p>
            Equipped with this new information, you now need to find the real first and last digit on each line. For example:
        </p>

        <pre>
            two1nine<br />
            eightwothree<br />
            abcone2threexyz<br />
            xtwone3four<br />
            4nineeightseven2<br />
            zoneight234<br />
            7pqrstsixteen
        </pre>

        <p>
            In this example, the calibration values are <code>29</code>, <code>83</code>, <code>13</code>, <code>24</code>, <code>42</code>, <code>14</code>, and <code>76</code>. Adding these together produces <code><em>281</em></code>.
        </p>

        <p>
            <em>What is the sum of all of the calibration values?</em>
        </p>
    </>
);

const Code = () => {
    return (
        <>
            <p>
                <em>--- Part 1 ---</em>
            </p>

            <CodeBlock code={partOneText}/>

            <p>
                <em>--- Part 2 ---</em>
            </p>

            <CodeBlock code={partTwoText}/>
        </>
    );
}

export const DayOne: React.FC = () => {
    return (
        <Exersise ExerciseComponent={Ex} CodeComponent={Code} />
    )
}