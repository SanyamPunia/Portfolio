import Refractor from 'react-refractor'
import jsx from 'refractor/lang/jsx'
import SyntaxHighlighter from 'react-syntax-highlighter';
import atomOneDark from "react-syntax-highlighter/dist/cjs/styles/hljs/atom-one-dark"

Refractor.registerLanguage(jsx)

export function Code(props) {
    return (
        <div className='my-4'>
            <SyntaxHighlighter language='javascript' style={atomOneDark}>
                {props.value}
            </SyntaxHighlighter>
        </div>
    )
}

export default Code