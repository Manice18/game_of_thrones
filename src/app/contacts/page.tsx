import { constructMetaData } from "@/utils/metadata";
import { Metadata } from "next";
import Block from "./_components/Block";

export const metadata: Metadata = constructMetaData({
  title: "Contacts | GOT RCCIIT",
});

const ContactUs = () => {
  return <Block />;
};

export default ContactUs;
