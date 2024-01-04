/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { SectionHeader } from "@/components";
import { events } from "@/utils";
import EventCard from "@/app/events/_components/EventCard";

const Events = () => {
  const router = useRouter();

  const [hover, setHover] = useState(false);
  return (
    <section>
      <div className="mx-auto max-w-full ">
        <SectionHeader text="Events" />
        <div className={`mt-[10px] h-full w-full`}>
          <ul className="oveflow-x-scroll accordion hidden justify-center gap-2 space-x-2 xl:flex">
            {events.map((event, index) => (
              <li
                key={index}
                onClick={() => router.push(`/events/${event.id}`)}
              >
                <img
                  src={`${event.image} `}
                  height={0}
                  width={0}
                  alt="image"
                  style={{
                    backgroundPosition: "cover",
                  }}
                />
                <div className="content">
                  <span className="flex flex-col items-center justify-around bg-white bg-opacity-10">
                    <div className="py-5">
                      <h2 className="text-center font-got text-xl font-semibold">
                        {event.title}
                      </h2>
                      <p className="text-center">{event.description}</p>
                    </div>
                    <Link href={`/events/${event.id}`}>
                      <button className="pb-5 tracking-widest duration-300 hover:scale-105 hover:text-green-300">
                        {`Know More >>`}
                      </button>
                    </Link>
                  </span>
                </div>
              </li>
            ))}
          </ul>
          <div className="mx-auto flex max-w-[1600px] flex-wrap items-center justify-center gap-16 rounded-md xl:hidden">
            {events.map((event, index) => (
              <div key={index}>
                <EventCard event={event} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
