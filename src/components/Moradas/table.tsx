import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["Diaria", "Pessoas",];

const TABLE_ROWS = [
  {
    key: '1',
    price_1: "R$300,00",
    option_1: "2 pessoas;",
    price_2: "R$350,00",
    option_2: "2 pessoas e até 2 criança até 7 anos;",
    price_3: "R$380,00",
    option_3: "3 pessoas;",
    price_4: "R$400,00",
    option_4: "3 pessoas e até 1 criança até 7 anos",
    price_5: "R$450,00",
    option_5: "4 pessoas;"
  },
  {
    key: '2',
    price_1: "R$500,00",
    option_1: "2 pessoas;",
    price_2: "R$350,00",
    option_2: "2 pessoas e até 2 criança até 7 anos;",
    price_3: "R$380,00",
    option_3: "3 pessoas;",
    price_4: "R$400,00",
    option_4: "3 pessoas e até 1 criança até 7 anos",
    price_5: "R$450,00",
    option_5: "4 pessoas;"
  },
];

export default function Table({ price }: any) {
  return (
    <Card className="overflow-scroll h-full w-full">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ key, price_1, price_2, price_3, price_4, price_5, option_1, option_2, option_3, option_4, option_5 }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

            return (
              <tr key={key}>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {price_1}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {option_1}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}