import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  ChevronRightIcon,
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon,
  ClockIcon,
} from "@heroicons/react/24/solid";

export default function Footer() {
  return (
    <footer className="relative mt-28 overflow-hidden bg-[#1E266E] pb-6 pt-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-4">
          <div className="">
            <div className="title flex items-center gap-x-4">
              <Image
                src={`/logo.png`}
                height={41}
                width={41}
                alt="logo"
                className=""
              />
              <p className="text-3xl font-bold text-white">Pixlab</p>
            </div>
            <p className="mt-6 text-lg text-white">
              Lorem Ipsum is simply is dumi omy is text Loremo Ipsum is simply
              is out no our o dummy text.
            </p>
          </div>
          <div className="">
            <h3 className="text-2xl font-bold text-white">Get Free Link</h3>
            <ul className="mt-6 flex flex-col gap-y-2">
              <li className="flex items-center gap-x-2">
                <ChevronRightIcon className="h-4 w-auto text-white" />
                <p className="text-lg text-white">Software Development</p>
              </li>
              <li className="flex items-center gap-x-2">
                <ChevronRightIcon className="h-4 w-auto text-white" />
                <p className="text-lg text-white">Data Analyst</p>
              </li>
              <li className="flex items-center gap-x-2">
                <ChevronRightIcon className="h-4 w-auto text-white" />
                <p className="text-lg text-white">IT Consulting</p>
              </li>
              <li className="flex items-center gap-x-2">
                <ChevronRightIcon className="h-4 w-auto text-white" />
                <p className="text-lg text-white">UI/UX Design</p>
              </li>
              <li className="flex items-center gap-x-2">
                <ChevronRightIcon className="h-4 w-auto text-white" />
                <p className="text-lg text-white">Network Solution</p>
              </li>
              <li className="flex items-center gap-x-2">
                <ChevronRightIcon className="h-4 w-auto text-white" />
                <p className="text-lg text-white">Others</p>
              </li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-2xl font-bold text-white">Our Services</h3>
            <ul className="mt-6 flex flex-col gap-y-2">
              <li className="text-lg text-white">Tech Solution</li>
              <li className="text-lg text-white">Digital Marketing</li>
              <li className="text-lg text-white">Web Development</li>
              <li className="text-lg text-white">IT Consulting</li>
              <li className="text-lg text-white">Data Analytics</li>
              <li className="text-lg text-white">Others Services</li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-2xl font-bold text-white">Contact</h3>
            <p className="mt-6 text-lg text-white">
              Lorem Ipsum is simply is dumi omy is text dummy text.
            </p>
            <ul className="mt-3 flex flex-col gap-y-2">
              <li className="flex items-center gap-x-2">
                <EnvelopeIcon className="h-4 w-auto text-primary" />
                <p className="text-lg text-white">info@example.com</p>
              </li>
              <li className="flex items-center gap-x-2">
                <MapPinIcon className="h-4 w-auto text-primary" />
                <p className="text-lg text-white">
                  6391 Elgin St. Celina, 10299
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-14 grid grid-cols-3 justify-items-stretch rounded-md border border-primary bg-[#1E266E] px-7 py-3">
          <div className="contact flex items-center gap-x-5 justify-self-center">
            <PhoneIcon className="h-10 w-10 text-primary" />
            <div className="">
              <p className="text-lg text-white">Requesting A Call:</p>
              <p className="mt-1 text-lg font-medium text-white">
                (629) 555-0129
              </p>
            </div>
          </div>
          <div className="schedule flex items-center gap-x-5 justify-self-center">
            <ClockIcon className="h-10 w-10 text-primary" />
            <div className="">
              <p className="text-lg text-white">Sunday - Friday:</p>
              <p className="mt-1 text-lg font-medium text-white">9 am - 8 pm</p>
            </div>
          </div>
          <div className="location flex items-center gap-x-5 justify-self-center">
            <MapPinIcon className="h-10 w-10 text-primary" />
            <div className="">
              <p className="text-lg text-white">6391 Elgin St. Celina, </p>
              <p className="mt-1 text-lg font-medium text-white">
                Delaware 10299
              </p>
            </div>
          </div>
        </div>
        <div className="mt-5 flex items-center justify-between">
          <p className="text-white text-opacity-70">
            &copy;Yoursitename 2023 | All Rights Reserved
          </p>
          <div className="flex gap-x-3">
            <Link href={`#`} className="text-white text-opacity-70">
              Terms & Conditions
            </Link>
            <Link href={`#`} className="text-white text-opacity-70">
              Privacy Policy
            </Link>
            <Link href={`#`} className="text-white text-opacity-70">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      <Image
        src={`/footer.png`}
        width={1412}
        height={1441}
        alt="footer"
        className="absolute -left-20 top-0 z-40 opacity-10"
      />
    </footer>
  );
}
