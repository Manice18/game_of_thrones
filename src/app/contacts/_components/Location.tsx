import { locations } from "@/utils/constant";
import Image from "next/image";
import React from "react";

const Location = () => {
  return (
    <div className="flex flex-col items-start gap-10">
      <h1 className="font-got text-2xl tracking-wider text-primary lg:px-10">
        Locations
      </h1>
      <div className="mx-auto flex w-[90%] flex-col gap-10 ">
        {locations.map((location, index) => {
          return (
            <>
              <div className="text-md flex flex-row gap-2 lg:px-8">
                <Image
                  src="/assets/contacts/redpin.svg"
                  height={0}
                  width={0}
                  className="w-8 lg:w-12"
                  alt="location"
                />
                <p>
                  {location.name}
                  <br /> {location.landmark}
                </p>
              </div>
              <iframe
                className="mx-auto h-[300px] w-[90%] rounded-md lg:h-[500px]"
                loading="lazy"
                src={location.place}
              ></iframe>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Location;
