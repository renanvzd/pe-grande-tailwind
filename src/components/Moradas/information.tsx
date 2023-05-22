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
        <p className="md:text-3xl text-2xl font-bold text-white">Valores</p>
      </div>
      <Fragment>
        {PegrandeItems.map((price, index) => {
          const isOpen = openItems[index] || false;
          const isLast = index === PegrandeItems.length - 1;
          const classes = isLast ? "px-3 py-3 border-b border-blue-gray-200" : "px-3 py-3 border-b border-blue-gray-200";

          return (
            <Fragment key={index}>
              <Accordion open={isOpen} icon={<Icon id={index} open={isOpen} />}>

                <AccordionHeader
                  onClick={() => handleOpen(index)}
                  className="bg-[#03124D] w-full px-6"
                >
                  <p className="text-white text-base lg:text-2xl"><b>{price.name}</b></p>
                </AccordionHeader>
                <AccordionBody className="px-8 bg-blue-100 md:text-xl">
                  <p className="text-black">{price.description}</p>

                  <div className="">
                    <Card className="mt-5 mb-5 md:w-[50vw]">
                      <table className="w-full table-auto">
                        <thead className="">
                          {!!price.option_1 ? (
                            <tr>
                              {TABLE_HEAD.map((head) => (
                                <th key={head} className="border-b border-blue-gray-200 bg-blue-gray-50 py-3 text-center">
                                  <Typography variant="small" color="black" className="leading-non lg:text-lge text-base opacity-70 text-center">

                                    <p className="text-left pl-3 lg:text-lg text-black font-bold">{head}</p>
                                  </Typography>
                                </th>
                              ))}
                            </tr>
                          ) : (
                            <tr>
                              <th className="border-b border-blue-gray-100 bg-blue-gray-50 py-3 text-center">
                                <Typography variant="small" color="black" className="leading-non lg:text-lge text-base opacity-70 text-center">
                                  <p className="text-center lg:text-lg text-black font-bold">Consulte</p>
                                </Typography>
                              </th>
                            </tr>
                          )}
                        </thead>
                        <tbody>

                          <tr key={price.name}
                          >
                            {!!price.price_1 ?
                              <td className={classes}>
                                <Typography variant="" color="black" className="text-black lg:text-lg text-base">
                                  {price.price_1}
                                </Typography>
                              </td>
                              : null}
                            {!!price.option_1 ?
                              <td className={classes}>
                                <Typography variant="small" color="black" className="lg:text-lg text-base">
                                  {price.option_1}
                                </Typography>
                              </td>
                              : null}
                          </tr>
                          <tr key={price.name}
                          >
                            {!!price.price_2 ?
                              <td className={classes}>
                                <Typography variant="" color="black" className="text-black lg:text-lg text-base">
                                  {price.price_2}
                                </Typography>
                              </td>
                              : null}
                            {!!price.option_2 ?
                              <td className={classes}>
                                <Typography variant="small" color="black" className="lg:text-lg text-base">
                                  {price.option_2}
                                </Typography>
                              </td>
                              : null}
                          </tr>
                          <tr key={price.name}
                          >
                            {!!price.price_3 ?
                              <td className={classes}>
                                <Typography variant="" color="black" className="text-black lg:text-lg text-base">
                                  {price.price_3}
                                </Typography>
                              </td>
                              : null}
                            {!!price.option_3 ?
                              <td className={classes}>
                                <Typography variant="small" color="black" className="lg:text-lg text-base">
                                  {price.option_3}
                                </Typography>
                              </td>
                              : null}
                          </tr>
                          <tr key={price.name}
                          >
                            {!!price.price_4 ?
                              <td className={classes}>
                                <Typography variant="" color="black" className="text-black lg:text-lg text-base">
                                  {price.price_4}
                                </Typography>
                              </td>
                              : null}
                            {!!price.option_4 ?
                              <td className={classes}>
                                <Typography variant="small" color="black" className="lg:text-lg text-base">
                                  {price.option_4}
                                </Typography>
                              </td>
                              : null}
                          </tr>
                          <tr key={price.name}
                          >
                            {!!price.price_5 ?
                              <td className={classes}>
                                <Typography variant="" color="black" className="text-black lg:text-lg text-base">
                                  {price.price_5}
                                </Typography>
                              </td>
                              : null}
                            {!!price.option_5 ?
                              <td className={classes}>
                                <Typography variant="small" color="black" className="lg:text-lg text-base">
                                  {price.option_5}
                                </Typography>
                              </td>
                              : null}
                          </tr>
                          <tr key={price.name}
                          >
                            {!!price.price_6 ?
                              <td className={classes}>
                                <Typography variant="" color="black" className="text-black lg:text-lg text-base">
                                  {price.price_6}
                                </Typography>
                              </td>
                              : null}
                            {!!price.option_6 ?
                              <td className={classes}>
                                <Typography variant="small" color="black" className="lg:text-lg text-base">
                                  {price.option_6}
                                </Typography>
                              </td>
                              : null}
                          </tr>

                        </tbody>
                      </table>
                    </Card>
                  </div>
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
