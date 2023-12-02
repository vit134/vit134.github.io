import React from 'react';
import { CodeBlock as CodeBlockComponent, dracula } from 'react-code-blocks';

export const CodeBlock: React.FC<{ code: string }> = ({ code }) => (
    <CodeBlockComponent
        customStyle={{background: '#0f0f23'}}
        codeContainerStyle={{
            background: '#0f0f23',
            border: `1px solid var(--greenColor)`,
            padding: '4px 12px',
            width: '100%',
            fontSize: '14px',
        }}
        language='ts'
        text={code}
        showLineNumbers={false}
        theme={dracula}
    />
)
