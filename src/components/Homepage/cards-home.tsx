/* eslint-disable @next/next/no-img-element */
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";
import {
  BanknotesIcon,
  StarIcon,
  HeartIcon,
  WifiIcon,
  HomeIcon,
  TvIcon,
  FireIcon,
} from "@heroicons/react/24/solid";
import { CardsHomeItems } from '@/data/cards-home'
import Link from "next/link";

export default function CardsHome() {

  const cardsHome = CardsHomeItems;

  return (
    <>
      <div className="container-ads flex w-screen mx-auto justify-center items-center ">
        <div className="box-ads max-w-[1250px] gap-y-10 lg:gap-x-16 gap-x-8 py-20 pr-4">
          {cardsHome.map((card, index) => {
            return (
              <div key={index} className="">
                <Link href={card.path}>
                  <Card className="flex mx-auto w-full max-w-[20rem] xs:max-w-[25rem] shadow">
                    <CardHeader floated={false} color="blue-gray">
                      <img
                        src={card.imageCard}
                        alt={card.titleCards}
                        className="h-60 w-full"
                      />
                      {/* <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                      <IconButton
                        size="sm"
                        color="red"
                        variant="text"
                        className="!absolute top-4 right-4 rounded-full"
                      >
                        <HeartIcon className="h-6 w-6" />
                      </IconButton> */}
                    </CardHeader>
                    <CardBody>
                      <div className="mb-3 flex items-center justify-between">
                        <Typography variant="h5" color="blue-gray" className="font-medium">
                          {card.titleCards}
                        </Typography>
                        {/* <Typography
                          color="blue-gray"
                          className="flex items-center gap-1.5 font-normal"
                        >
                          <StarIcon className="-mt-0.5 h-5 w-5 text-yellow-700" />
                          5.0
                        </Typography> */}
                      </div>
                      <Typography color="gray">
                        {card.description}
                      </Typography>
                    </CardBody>
                    <CardFooter className="pt-3">
                      <Button size="lg" fullWidth={true}>
                        {card.knowMore}
                      </Button>
                    </CardFooter>
                  </Card>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </>
  );
}