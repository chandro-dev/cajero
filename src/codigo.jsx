import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodigoEjemplo = () => {
    return (
        <div className="my-4 bg-gray-900 rounded-lg p-4 overflow-auto">
            <SyntaxHighlighter language="javascript" style={okaidia} showLineNumbers>
                {`const calcularDenominaciones = () => {
    resultado.push([]);
    while (i < denominaciones.length) {
      if ((auxiliar + denominaciones[i]) > monto) {
        for (let j = i; j >= denominaciones.length; j--) {
          if (auxiliar + denominaciones[j] >= monto) {
            resultado.push([]);
            auxiliar += denominaciones[j];
            resultado[resultado.length - 1].push(denominaciones[j]);
          }
        }
        i++;
      } else {
        auxiliar += denominaciones[i];
        resultado[resultado.length - 1].push(denominaciones[i]);
        i++;
      }
      if ((i == 4) && (auxiliar != monto)) {
        resultado.push([]);
        acarreo++;
        i = acarreo;
      }
    }
}
  `}
            </SyntaxHighlighter>
        </div>
    );
};

export default CodigoEjemplo;
