import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';

// eslint-disable-next-line react/prop-types
const CodigoEjemplo = () => {
  return (
    <div className="my-4 bg-gray-900 rounded-lg p-4 overflow-auto">
      <SyntaxHighlighter language="javascript" style={okaidia} showLineNumbers>
        {`  while (acarreo < this.denominaciones.length && auxiliar < monto) {
            for (let j = acarreo; j < this.denominaciones.length; j++) {
                if ((auxiliar + this.denominaciones[j]) <= monto) {
                    auxiliar += this.denominaciones[j];
                    resultado[resultado.length - 1].push(this.denominaciones[j]);
                }
            }
            resultado.push([]);
            acarreo++;
              }`}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodigoEjemplo;
