import React from "react";
import Image from "next/image";

const TeamCard = () => {
  return (
    <div className="h-[200px] w-[150px] border">
      <Image src={"/assets/events/football2.svg"} height={0} width={0} alt="" />
    </div>
  );
};

export default TeamCard;
