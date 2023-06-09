import React from "react";

type HeaderSubpageProps = {
  title: string;
};

const HeaderSubpage = ({ title }: HeaderSubpageProps) => {
  return (
    <>
      <main className="">
        <div className="mx-auto">
          <div className="h-16 flex items-center justify-center sm:h-24 md:h-28">
            <p className="text-black font-bold lg:text-5xl md:text-3xl text-2xl tracking-widest sm:tracking-normal md:tracking-widest">
              {title}
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export { HeaderSubpage };