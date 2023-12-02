import * as React from 'react';
import Exersise from '../../exercise-layout';

export { default as text } from './exercise/text';

export const DayOne: React.FC = () => {
    return (
        <Exersise title='day1' active>
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
        </Exersise>
    )
}