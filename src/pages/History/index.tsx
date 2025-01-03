import { HistoryContainer, HistoryList, Status } from "./styles";

export function History() {
  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <HistoryList>
        <table>
            <thead>
                <th>Tarefa</th>
                <th>Duração</th>
                <th>Início</th>
                <th>Status</th>
            </thead>
            <tbody>
                <tr>
                    <td>Tarefa</td>
                    <td>20 Minutos</td>
                    <td>Há 2 meses</td>
                    <td>
                      <Status statusColor="green">Concluído</Status>
                    </td>
                </tr>
                <tr>
                    <td>Tarefa</td>
                    <td>20 Minutos</td>
                    <td>Há 2 meses</td>
                    <td>
                        <Status statusColor="yellow">Em andamento</Status>
                    </td>
                </tr>
                <tr>
                    <td>Tarefa</td>
                    <td>20 Minutos</td>
                    <td>Há 2 meses</td>
                    <td>
                      <Status statusColor="red">Interompido</Status>
                    </td>
                </tr>
                <tr>
                    <td>Tarefa</td>
                    <td>20 Minutos</td>
                    <td>Há 2 meses</td>
                    <td>
                      <Status statusColor="green">Concluído</Status>
                    </td>
                </tr>
            </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
}
