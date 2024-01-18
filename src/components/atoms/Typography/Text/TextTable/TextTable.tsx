import { Frame } from "vibe-storybook-components";

type TableRow = {
  name: string;
  attribute: string;
  style: string; // Classe CSS para estilização
};

type TextTableProps = {
  rows: TableRow[];
  customStyle?: string; // Estilo adicional opcional para a tabela
};

const TextTable: React.FC<TextTableProps> = ({ rows, customStyle }) => {
  return (
    <table className={`w-4/5 ${customStyle}`}>
      <thead className="flex w-full">
        <th className=" text-lg font-bold p-2 block w-2/4 border-[1px] border-secondary-default bg-primary-default text-white">
          Name
        </th>
        <th className="text-lg font-bold p-4 block w-2/4 border-[1px] border-secondary-default bg-primary-default text-white">
          Attributes
        </th>
      </thead>
      <tbody className="w-full">
        {rows.map((row, index) => (
          <tr key={index} className="flex w-full">
            <td
              className={`p-4 flex justify-center items-center w-2/4 border-[1px] border-secondary-default ${row.style}`}
            >
              {row.name}
            </td>
            <td className="text-md font-bold text-gray-dark-primary p-2 flex justify-center items-center w-2/4 border-[1px] border-secondary-default">
              {row.attribute}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TextTable;
