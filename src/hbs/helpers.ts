import { ImcTable } from 'src/imc-calculator/imc-calculator.dtos';

export function renderImcTable(obj: ImcTable) {
  const outputTemplate = '<table>{rows}</table>';
  const rows = Object.keys(obj)
    .map(
      (propName) => `
    <tr>
        <td>${propName}</td>
        <td>${obj[propName]}</td>    
    </tr>`,
    )
    .join('');

  return outputTemplate.replace('{rows}', rows);
}
