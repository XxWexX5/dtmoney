import * as Styled from "./styles";

export function TransactionsTable() {
  return (
    <Styled.Container>
      <Styled.Table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">12.000,00</td>
            <td>Desenvolvimento</td>
            <td>20/06/2022</td>
          </tr>

          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- 1.100,00</td>
            <td>Desenvolvimento</td>
            <td>20/06/2022</td>
          </tr>
        </tbody>
      </Styled.Table>
    </Styled.Container>
  );
}
