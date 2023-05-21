import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Card,
  Typography
} from "@material-tailwind/react";
import { PegrandeItems } from "@/data/pegrandePrice";
import Table from "./table";

const TABLE_HEAD = ["Diaria", "Pessoas"];


function Icon({ id, open }: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${id === open ? "rotate-180" : ""
        } h-6 w-6 transition-transform text-white`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default function Information() {
  const [openItems, setOpenItems] = useState<{ [key: number]: boolean }>({});

  const handleOpen = (id: any) => {
    setOpenItems((prevOpenItems) => ({
      ...prevOpenItems,
      [id]: !prevOpenItems[id],
    }));
  };

  return (
    <div className="bg-[#03124D] w-screen mx-auto justify-center px-0 py-5">
      <div className="w-screen px-5">
        <p className="text-3xl font-bold text-white">Valores</p>
      </div>
      <Fragment>
        {PegrandeItems.map((price, index) => {
          const isOpen = openItems[index] || false;
          const isLast = index === PegrandeItems.length - 1;
          const classes = isLast ? "p-0" : "px-0 py-3 border-b border-blue-gray-50";

          return (
            <Fragment key={index}>
              <Accordion open={isOpen} icon={<Icon id={index} open={isOpen} />}>

                <AccordionHeader
                  onClick={() => handleOpen(index)}
                  className="bg-[#03124D] w-full px-6"
                >
                  <p className="text-white text-base lg:text-2xl"><b>{price.name}</b></p>
                </AccordionHeader>
                <AccordionBody className="px-8 bg-blue-100 md:text-xl text-base">
                  <p>{price.description}</p>

                  <Card className="h-full md:w-[50vw] w-full mt-5">
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

                        <tr key={price.name}
                        >
                          {!!price.price_1 ?
                            <td className={classes}>
                              <Typography variant="small" color="blue-gray" className="font-normal">
                                {price.price_1}
                              </Typography>
                            </td>
                            : null}
                          {!!price.option_1 ?
                            <td className={classes}>
                              <Typography variant="small" color="blue-gray" className="font-normal">
                                {price.option_1}
                              </Typography>
                            </td>
                            : null}
                        </tr>
                        <tr key={price.name}
                        >
                          {!!price.price_2 ?
                            <td className={classes}>
                              <Typography variant="small" color="blue-gray" className="font-normal">
                                {price.price_2}
                              </Typography>
                            </td>
                            : null}
                          {!!price.option_2 ?
                            <td className={classes}>
                              <Typography variant="small" color="blue-gray" className="font-normal">
                                {price.option_2}
                              </Typography>
                            </td>
                            : null}
                        </tr>
                        <tr key={price.name}
                        >
                          {!!price.price_3 ?
                            <td className={classes}>
                              <Typography variant="small" color="blue-gray" className="font-normal">
                                {price.price_3}
                              </Typography>
                            </td>
                            : null}
                          {!!price.option_3 ?
                            <td className={classes}>
                              <Typography variant="small" color="blue-gray" className="font-normal">
                                {price.option_3}
                              </Typography>
                            </td>
                            : null}
                        </tr>
                        <tr key={price.name}
                        >
                          {!!price.price_4 ?
                            <td className={classes}>
                              <Typography variant="small" color="blue-gray" className="font-normal">
                                {price.price_4}
                              </Typography>
                            </td>
                            : null}
                          {!!price.option_4 ?
                            <td className={classes}>
                              <Typography variant="small" color="blue-gray" className="font-normal">
                                {price.option_4}
                              </Typography>
                            </td>
                            : null}
                        </tr>
                        <tr key={price.name}
                        >
                          {!!price.price_5 ?
                            <td className={classes}>
                              <Typography variant="small" color="blue-gray" className="font-normal">
                                {price.price_5}
                              </Typography>
                            </td>
                            : null}
                          {!!price.option_5 ?
                            <td className={classes}>
                              <Typography variant="small" color="blue-gray" className="font-normal">
                                {price.option_5}
                              </Typography>
                            </td>
                            : null}
                        </tr>
                        <tr key={price.name}
                        >
                          {!!price.price_6 ?
                            <td className={classes}>
                              <Typography variant="small" color="blue-gray" className="font-normal">
                                {price.price_6}
                              </Typography>
                            </td>
                            : null}
                          {!!price.option_6 ?
                            <td className={classes}>
                              <Typography variant="small" color="blue-gray" className="font-normal">
                                {price.option_6}
                              </Typography>
                            </td>
                            : null}
                        </tr>

                      </tbody>
                    </table>
                  </Card>

                </AccordionBody>
                {/* <Table price={price} /> */}
              </Accordion>
            </Fragment>
          );
        })}
      </Fragment>
    </div>
  );
}
