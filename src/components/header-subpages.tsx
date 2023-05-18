import React from "react";

type HeaderSubpageProps = {
  title: string;
};

const HeaderSubpage = ({ title }: HeaderSubpageProps) => {
  return (
    <>
      <main className="bg-background bg-gradient-to-b from-background to-background-gradient bg-gray-900">
        <div className="mx-auto relative">
          <div className="h-16 flex items-center justify-center sm:h-24 md:h-20">
            <p className="text-white font-bold lg:text-5xl md:text-3xl text-4xl tracking-widest sm:tracking-normal md:tracking-widest">
              {title}
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export { HeaderSubpage };