import Image from "next/image";
import Link from "next/link";
import {
  PhoneIcon,
  MapPinIcon,
  EnvelopeIcon,
  ChevronDownIcon,
  ArrowLongRightIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <>
      <header className="">
        <div className="h-24 w-full bg-primary py-5">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center gap-x-7">
              <div className="phone-number flex items-center gap-x-3">
                <PhoneIcon className="h-4 w-4 text-white" />
                <p className="text-white">(629) 555-0129</p>
              </div>
              <div className="mail flex items-center gap-x-3">
                <EnvelopeIcon className="h-4 w-4 text-white" />
                <p className="text-white">info@example.com</p>
              </div>
              <div className="address flex items-center gap-x-3">
                <MapPinIcon className="h-4 w-4 text-white" />
                <p className="text-white">6391 Elgin St. Celina, 10299</p>
              </div>
            </div>
            <div className="flex items-center gap-x-5">
              <p className="ic-facebook">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 30 30"
                  className="h-6 w-6"
                  fill="white"
                >
                  <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h10v-9h-3v-3h3v-1.611C16,9.339,17.486,8,20.021,8 c1.214,0,1.856,0.09,2.16,0.131V11h-1.729C19.376,11,19,11.568,19,12.718V14h3.154l-0.428,3H19v9h5c1.105,0,2-0.895,2-2V6 C26,4.895,25.104,4,24,4z"></path>
                </svg>
              </p>
              <p className="ic-instagram">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 32 32"
                  className="h-6 w-6"
                  fill="white"
                >
                  <path d="M 11.46875 5 C 7.917969 5 5 7.914063 5 11.46875 L 5 20.53125 C 5 24.082031 7.914063 27 11.46875 27 L 20.53125 27 C 24.082031 27 27 24.085938 27 20.53125 L 27 11.46875 C 27 7.917969 24.085938 5 20.53125 5 Z M 11.46875 7 L 20.53125 7 C 23.003906 7 25 8.996094 25 11.46875 L 25 20.53125 C 25 23.003906 23.003906 25 20.53125 25 L 11.46875 25 C 8.996094 25 7 23.003906 7 20.53125 L 7 11.46875 C 7 8.996094 8.996094 7 11.46875 7 Z M 21.90625 9.1875 C 21.402344 9.1875 21 9.589844 21 10.09375 C 21 10.597656 21.402344 11 21.90625 11 C 22.410156 11 22.8125 10.597656 22.8125 10.09375 C 22.8125 9.589844 22.410156 9.1875 21.90625 9.1875 Z M 16 10 C 12.699219 10 10 12.699219 10 16 C 10 19.300781 12.699219 22 16 22 C 19.300781 22 22 19.300781 22 16 C 22 12.699219 19.300781 10 16 10 Z M 16 12 C 18.222656 12 20 13.777344 20 16 C 20 18.222656 18.222656 20 16 20 C 13.777344 20 12 18.222656 12 16 C 12 13.777344 13.777344 12 16 12 Z"></path>
                </svg>
              </p>
              <p className="ic-twitter">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="white"
                >
                  <path d="M22,3.999c-0.78,0.463-2.345,1.094-3.265,1.276c-0.027,0.007-0.049,0.016-0.075,0.023c-0.813-0.802-1.927-1.299-3.16-1.299 c-2.485,0-4.5,2.015-4.5,4.5c0,0.131-0.011,0.372,0,0.5c-3.353,0-5.905-1.756-7.735-4c-0.199,0.5-0.286,1.29-0.286,2.032 c0,1.401,1.095,2.777,2.8,3.63c-0.314,0.081-0.66,0.139-1.02,0.139c-0.581,0-1.196-0.153-1.759-0.617c0,0.017,0,0.033,0,0.051 c0,1.958,2.078,3.291,3.926,3.662c-0.375,0.221-1.131,0.243-1.5,0.243c-0.26,0-1.18-0.119-1.426-0.165 c0.514,1.605,2.368,2.507,4.135,2.539c-1.382,1.084-2.341,1.486-5.171,1.486H2C3.788,19.145,6.065,20,8.347,20 C15.777,20,20,14.337,20,8.999c0-0.086-0.002-0.266-0.005-0.447C19.995,8.534,20,8.517,20,8.499c0-0.027-0.008-0.053-0.008-0.08 c-0.003-0.136-0.006-0.263-0.009-0.329c0.79-0.57,1.475-1.281,2.017-2.091c-0.725,0.322-1.503,0.538-2.32,0.636 C20.514,6.135,21.699,4.943,22,3.999z"></path>
                </svg>
              </p>
              <p className="ic-linkedin">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="white"
                >
                  <path d="M21,3H3v18h18V3z M9,17H6.477v-7H9V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2 c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302 s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977C13.93,10.407,14.581,10,15.802,10 C17.023,10,18,10.977,18,13.174V17z"></path>
                </svg>
              </p>
            </div>
          </div>
        </div>
        <nav className="container absolute left-1/2 top-24 z-50 mx-auto -mt-10 flex -translate-x-1/2 items-center justify-between rounded-md bg-white px-8 py-5">
          <div className="title flex items-center gap-x-4">
            <Image
              src={`/logo.png`}
              height={41}
              width={41}
              alt="logo"
              className=""
            />
            <p className="text-3xl font-bold text-black">Pixlab</p>
          </div>
          <div className="menu">
            <ul className="flex items-center gap-x-7">
              <li>
                <Link
                  href="#"
                  className="flex items-center gap-x-1 font-semibold text-black"
                >
                  Home
                  <ChevronDownIcon className="h-auto w-2 text-black" />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center gap-x-1 font-semibold text-black"
                >
                  About Us
                  <ChevronDownIcon className="h-auto w-2 text-black" />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center gap-x-1 font-semibold text-black"
                >
                  Services
                  <ChevronDownIcon className="h-auto w-2 text-black" />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center gap-x-1 font-semibold text-black"
                >
                  Projects
                  <ChevronDownIcon className="h-auto w-2 text-black" />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center gap-x-1 font-semibold text-black"
                >
                  Blog
                  <ChevronDownIcon className="h-auto w-2 text-black" />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center gap-x-1 font-semibold text-black"
                >
                  Page
                  <ChevronDownIcon className="h-auto w-2 text-black" />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center gap-x-1 font-semibold text-black"
                >
                  Contact
                  <ChevronDownIcon className="h-auto w-2 text-black" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="contact flex items-center gap-x-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
              <PhoneIcon className="h-4 w-4 text-white" />
            </div>
            <div className="">
              <p className="text-black">Need help?</p>
              <p className="text-black">(808) 555-0111</p>
            </div>
          </div>
        </nav>
        <div className="h-screen w-full bg-header bg-cover">
          <div className="relative flex h-full w-full items-center justify-center bg-[#1E266E] bg-opacity-60">
            <div className="container grid grid-cols-2">
              <div className="">
                <p className="text-2xl font-semibold text-white">
                  Growth Accelerator
                </p>
                <h1 className="mt-3 text-7xl font-bold text-white">
                  Bringing your brand to life
                </h1>
                <p className="mt-7 text-base text-white">
                  Vestibulum rhoncus nisl ac gravida porta. Mauris eu sapien
                  lacus. Etiam molestie justo neque, in convallis massa tempus
                  in.
                </p>
                <button className="mt-6 bg-primary px-5 py-3 font-semibold text-white">
                  Learn More
                </button>
              </div>
              <div className=""></div>
            </div>
            <Image
              src={`/cubic.png`}
              width={678.84}
              height={587.72}
              alt="cubic"
              className="absolute bottom-0 right-0"
            />
          </div>
        </div>
      </header>
      <section className="container mx-auto mt-28">
        <div className="text-center">
          <div className="flex items-center justify-center gap-x-3">
            <div className="h-[2px] w-5 bg-primary"></div>
            <p className="text-lg text-primary">Our Services</p>
            <div className="h-[2px] w-5 bg-primary"></div>
          </div>
          <h3 className="text-4xl font-bold text-black">
            Igniting Your Digital Presence
          </h3>
        </div>
        <div className="mt-20 grid grid-cols-3 gap-7">
          <div className="card-service rounded-md border border-gray-200">
            <Image
              src={`/digital.png`}
              width={410}
              height={274}
              alt="service"
              className="w-full"
            />
            <div className="p-10">
              <p className="text-2xl font-bold text-black">Pixie Digital</p>
              <hr className="mt-5 h-[2px] w-full bg-gray-300" />
              <p className="mt-3 text-base text-[#808285]">
                It is a long established fact that a reader will be distracted
                the readable hkljklkl content of a page layout
              </p>
              <button className="group mt-4 flex items-center gap-x-2.5 border-2 border-primary px-4 py-2 text-base font-bold text-black hover:bg-primary hover:text-white">
                Read More
                <ArrowRightCircleIcon className="h-auto w-5 text-black group-hover:text-white" />
              </button>
            </div>
          </div>
          <div className="card-service rounded-md border border-gray-200">
            <Image
              src={`/agency.png`}
              width={410}
              height={274}
              alt="service"
              className="w-full"
            />
            <div className="p-10">
              <p className="text-2xl font-bold text-black">Fuse Agency</p>
              <hr className="mt-5 h-[2px] w-full bg-gray-300" />
              <p className="mt-3 text-base text-[#808285]">
                It is a long established fact that a reader will be distracted
                the readable hkljklkl content of a page layout
              </p>
              <button className="group mt-4 flex items-center gap-x-2.5 border-2 border-primary px-4 py-2 text-base font-bold text-black hover:bg-primary hover:text-white">
                Read More
                <ArrowRightCircleIcon className="h-auto w-5 text-black group-hover:text-white" />
              </button>
            </div>
          </div>
          <div className="card-service rounded-md border border-gray-200">
            <Image
              src={`/labs.png`}
              width={410}
              height={274}
              alt="service"
              className="w-full"
            />
            <div className="p-10">
              <p className="text-2xl font-bold text-black">Byte Labs</p>
              <hr className="mt-5 h-[2px] w-full bg-gray-300" />
              <p className="mt-3 text-base text-[#808285]">
                It is a long established fact that a reader will be distracted
                the readable hkljklkl content of a page layout
              </p>
              <button className="group mt-4 flex items-center gap-x-2.5 border-2 border-primary px-4 py-2 text-base font-bold text-black hover:bg-primary hover:text-white">
                Read More
                <ArrowRightCircleIcon className="h-auto w-5 text-black group-hover:text-white" />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#FAFAFB] py-10">
        <div className="container mx-auto flex items-center justify-between">
          <Image
            src={`/adaptavist.png`}
            width={155}
            height={40}
            alt="logo"
            className=""
          />
          <Image
            src={`/mailgun.png`}
            width={155}
            height={48}
            alt="logo"
            className=""
          />
          <Image
            src={`/kabbage.png`}
            width={155}
            height={36}
            alt="logo"
            className=""
          />
          <Image
            src={`/ilumos.png`}
            width={155}
            height={72}
            alt="logo"
            className=""
          />
          <Image
            src={`/jasmine.png`}
            width={155}
            height={42}
            alt="logo"
            className=""
          />
        </div>
      </section>
      <section className="container mx-auto mt-28">
        <div className="flex items-center justify-between">
          <div className="">
            <div className="flex items-center gap-x-5">
              <p className="text-lg font-bold text-primary">Pricing Action</p>
              <div className="h-[3px] w-8 bg-primary"></div>
            </div>
            <h1 className="text-5xl font-bold text-[#191919]">
              Innovation For A <br /> Better Tomorrow
            </h1>
          </div>
          <div className="flex">
            <button className="rounded-l-full border border-primary bg-primary px-7 py-3 text-white">
              Monthly
            </button>
            <button className="rounded-r-full border border-[#E1E1E1] px-7 py-3 text-[#191919]">
              Yearly
            </button>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-3 gap-8">
          <div className="card-price rounded-md border border-[#E1E1E1] p-10">
            <div className="text-center">
              <h4 className="text-lg font-medium text-[#191919]">
                Bronze Package
              </h4>
              <h1 className="text-5xl font-bold text-[#191919]">$99</h1>
            </div>
            <Image
              src={`/bronze.png`}
              width={111}
              height={98}
              alt="bronze"
              className="mx-auto mt-10 h-24 w-auto"
            />
            <div className="mt-9">
              <p className="text-lg text-[#808285]">
                Lorem Ipsum is simply dummy text of the printing
              </p>
            </div>
            <div className="list-check mt-3">
              <div className="check-item mt-2 flex items-center gap-x-2">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 0H12C13.0938 0 14 0.90625 14 2V12C14 13.125 13.0938 14 12 14H2C0.875 14 0 13.125 0 12V2C0 0.90625 0.875 0 2 0ZM10.5312 5.53125H10.5C10.8125 5.25 10.8125 4.78125 10.5 4.46875C10.2188 4.1875 9.75 4.1875 9.46875 4.46875L6 7.96875L4.53125 6.5C4.21875 6.1875 3.75 6.1875 3.46875 6.5C3.15625 6.78125 3.15625 7.25 3.46875 7.53125L5.46875 9.53125C5.75 9.84375 6.21875 9.84375 6.53125 9.53125L10.5312 5.53125Z"
                    fill="#5956E9"
                  />
                </svg>
                <p className="text-lg text-[#808285]">Mistakes To Avoid</p>
              </div>
              <div className="check-item mt-2 flex items-center gap-x-2">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 0H12C13.0938 0 14 0.90625 14 2V12C14 13.125 13.0938 14 12 14H2C0.875 14 0 13.125 0 12V2C0 0.90625 0.875 0 2 0ZM10.5312 5.53125H10.5C10.8125 5.25 10.8125 4.78125 10.5 4.46875C10.2188 4.1875 9.75 4.1875 9.46875 4.46875L6 7.96875L4.53125 6.5C4.21875 6.1875 3.75 6.1875 3.46875 6.5C3.15625 6.78125 3.15625 7.25 3.46875 7.53125L5.46875 9.53125C5.75 9.84375 6.21875 9.84375 6.53125 9.53125L10.5312 5.53125Z"
                    fill="#5956E9"
                  />
                </svg>
                <p className="text-lg text-[#808285]">Your Startup</p>
              </div>
              <div className="check-item mt-2 flex items-center gap-x-2">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 0H12C13.0938 0 14 0.90625 14 2V12C14 13.125 13.0938 14 12 14H2C0.875 14 0 13.125 0 12V2C0 0.90625 0.875 0 2 0ZM10.5312 5.53125H10.5C10.8125 5.25 10.8125 4.78125 10.5 4.46875C10.2188 4.1875 9.75 4.1875 9.46875 4.46875L6 7.96875L4.53125 6.5C4.21875 6.1875 3.75 6.1875 3.46875 6.5C3.15625 6.78125 3.15625 7.25 3.46875 7.53125L5.46875 9.53125C5.75 9.84375 6.21875 9.84375 6.53125 9.53125L10.5312 5.53125Z"
                    fill="#5956E9"
                  />
                </svg>
                <p className="text-lg text-[#808285]">Knew About Fonts</p>
              </div>
              <div className="check-item mt-2 flex items-center gap-x-2">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 0H12C13.0938 0 14 0.90625 14 2V12C14 13.125 13.0938 14 12 14H2C0.875 14 0 13.125 0 12V2C0 0.90625 0.875 0 2 0ZM10.5312 5.53125H10.5C10.8125 5.25 10.8125 4.78125 10.5 4.46875C10.2188 4.1875 9.75 4.1875 9.46875 4.46875L6 7.96875L4.53125 6.5C4.21875 6.1875 3.75 6.1875 3.46875 6.5C3.15625 6.78125 3.15625 7.25 3.46875 7.53125L5.46875 9.53125C5.75 9.84375 6.21875 9.84375 6.53125 9.53125L10.5312 5.53125Z"
                    fill="#5956E9"
                  />
                </svg>
                <p className="text-lg text-[#808285]">
                  Winning Metric for Your Startup
                </p>
              </div>
              <div className="check-item mt-2 flex items-center gap-x-2">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 0H12C13.0938 0 14 0.90625 14 2V12C14 13.125 13.0938 14 12 14H2C0.875 14 0 13.125 0 12V2C0 0.90625 0.875 0 2 0ZM10.5312 5.53125H10.5C10.8125 5.25 10.8125 4.78125 10.5 4.46875C10.2188 4.1875 9.75 4.1875 9.46875 4.46875L6 7.96875L4.53125 6.5C4.21875 6.1875 3.75 6.1875 3.46875 6.5C3.15625 6.78125 3.15625 7.25 3.46875 7.53125L5.46875 9.53125C5.75 9.84375 6.21875 9.84375 6.53125 9.53125L10.5312 5.53125Z"
                    fill="#5956E9"
                  />
                </svg>
                <p className="text-lg text-[#808285]">Your Startup</p>
              </div>
            </div>
            <button className="group mx-auto mt-14 flex items-center gap-x-2.5 rounded-md border-2 border-primary px-5 py-3 text-base font-bold text-black hover:bg-primary hover:text-white">
              Get Now
              <ArrowRightCircleIcon className="h-auto w-5 text-black group-hover:text-white" />
            </button>
          </div>
          <div className="card-price rounded-md border border-[#E1E1E1] p-10">
            <div className="text-center">
              <h4 className="text-lg font-medium text-[#191919]">
                Diamond Package
              </h4>
              <h1 className="text-5xl font-bold text-[#191919]">$299</h1>
            </div>
            <Image
              src={`/diamond.png`}
              width={120}
              height={107}
              alt="bronze"
              className="mx-auto mt-10 h-24 w-auto"
            />
            <div className="mt-9">
              <p className="text-lg text-[#808285]">
                Lorem Ipsum is simply dummy text of the printing
              </p>
            </div>
            <div className="list-check mt-3">
              <div className="check-item mt-2 flex items-center gap-x-2">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 0H12C13.0938 0 14 0.90625 14 2V12C14 13.125 13.0938 14 12 14H2C0.875 14 0 13.125 0 12V2C0 0.90625 0.875 0 2 0ZM10.5312 5.53125H10.5C10.8125 5.25 10.8125 4.78125 10.5 4.46875C10.2188 4.1875 9.75 4.1875 9.46875 4.46875L6 7.96875L4.53125 6.5C4.21875 6.1875 3.75 6.1875 3.46875 6.5C3.15625 6.78125 3.15625 7.25 3.46875 7.53125L5.46875 9.53125C5.75 9.84375 6.21875 9.84375 6.53125 9.53125L10.5312 5.53125Z"
                    fill="#5956E9"
                  />
                </svg>
                <p className="text-lg text-[#808285]">Mistakes To Avoid</p>
              </div>
              <div className="check-item mt-2 flex items-center gap-x-2">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 0H12C13.0938 0 14 0.90625 14 2V12C14 13.125 13.0938 14 12 14H2C0.875 14 0 13.125 0 12V2C0 0.90625 0.875 0 2 0ZM10.5312 5.53125H10.5C10.8125 5.25 10.8125 4.78125 10.5 4.46875C10.2188 4.1875 9.75 4.1875 9.46875 4.46875L6 7.96875L4.53125 6.5C4.21875 6.1875 3.75 6.1875 3.46875 6.5C3.15625 6.78125 3.15625 7.25 3.46875 7.53125L5.46875 9.53125C5.75 9.84375 6.21875 9.84375 6.53125 9.53125L10.5312 5.53125Z"
                    fill="#5956E9"
                  />
                </svg>
                <p className="text-lg text-[#808285]">Your Startup</p>
              </div>
              <div className="check-item mt-2 flex items-center gap-x-2">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 0H12C13.0938 0 14 0.90625 14 2V12C14 13.125 13.0938 14 12 14H2C0.875 14 0 13.125 0 12V2C0 0.90625 0.875 0 2 0ZM10.5312 5.53125H10.5C10.8125 5.25 10.8125 4.78125 10.5 4.46875C10.2188 4.1875 9.75 4.1875 9.46875 4.46875L6 7.96875L4.53125 6.5C4.21875 6.1875 3.75 6.1875 3.46875 6.5C3.15625 6.78125 3.15625 7.25 3.46875 7.53125L5.46875 9.53125C5.75 9.84375 6.21875 9.84375 6.53125 9.53125L10.5312 5.53125Z"
                    fill="#5956E9"
                  />
                </svg>
                <p className="text-lg text-[#808285]">Knew About Fonts</p>
              </div>
              <div className="check-item mt-2 flex items-center gap-x-2">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 0H12C13.0938 0 14 0.90625 14 2V12C14 13.125 13.0938 14 12 14H2C0.875 14 0 13.125 0 12V2C0 0.90625 0.875 0 2 0ZM10.5312 5.53125H10.5C10.8125 5.25 10.8125 4.78125 10.5 4.46875C10.2188 4.1875 9.75 4.1875 9.46875 4.46875L6 7.96875L4.53125 6.5C4.21875 6.1875 3.75 6.1875 3.46875 6.5C3.15625 6.78125 3.15625 7.25 3.46875 7.53125L5.46875 9.53125C5.75 9.84375 6.21875 9.84375 6.53125 9.53125L10.5312 5.53125Z"
                    fill="#5956E9"
                  />
                </svg>
                <p className="text-lg text-[#808285]">
                  Winning Metric for Your Startup
                </p>
              </div>
              <div className="check-item mt-2 flex items-center gap-x-2">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 0H12C13.0938 0 14 0.90625 14 2V12C14 13.125 13.0938 14 12 14H2C0.875 14 0 13.125 0 12V2C0 0.90625 0.875 0 2 0ZM10.5312 5.53125H10.5C10.8125 5.25 10.8125 4.78125 10.5 4.46875C10.2188 4.1875 9.75 4.1875 9.46875 4.46875L6 7.96875L4.53125 6.5C4.21875 6.1875 3.75 6.1875 3.46875 6.5C3.15625 6.78125 3.15625 7.25 3.46875 7.53125L5.46875 9.53125C5.75 9.84375 6.21875 9.84375 6.53125 9.53125L10.5312 5.53125Z"
                    fill="#5956E9"
                  />
                </svg>
                <p className="text-lg text-[#808285]">Your Startup</p>
              </div>
            </div>
            <button className="group mx-auto mt-14 flex items-center gap-x-2.5 rounded-md border-2 border-primary px-5 py-3 text-base font-bold text-black hover:bg-primary hover:text-white">
              Get Now
              <ArrowRightCircleIcon className="h-auto w-5 text-black group-hover:text-white" />
            </button>
          </div>
          <div className="card-price rounded-md border border-[#E1E1E1] p-10">
            <div className="text-center">
              <h4 className="text-lg font-medium text-[#191919]">
                Gold Package
              </h4>
              <h1 className="text-5xl font-bold text-[#191919]">$199</h1>
            </div>
            <Image
              src={`/gold.png`}
              width={54}
              height={113}
              alt="bronze"
              className="mx-auto mt-10 h-24 w-auto"
            />
            <div className="mt-9">
              <p className="text-lg text-[#808285]">
                Lorem Ipsum is simply dummy text of the printing
              </p>
            </div>
            <div className="list-check mt-3">
              <div className="check-item mt-2 flex items-center gap-x-2">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 0H12C13.0938 0 14 0.90625 14 2V12C14 13.125 13.0938 14 12 14H2C0.875 14 0 13.125 0 12V2C0 0.90625 0.875 0 2 0ZM10.5312 5.53125H10.5C10.8125 5.25 10.8125 4.78125 10.5 4.46875C10.2188 4.1875 9.75 4.1875 9.46875 4.46875L6 7.96875L4.53125 6.5C4.21875 6.1875 3.75 6.1875 3.46875 6.5C3.15625 6.78125 3.15625 7.25 3.46875 7.53125L5.46875 9.53125C5.75 9.84375 6.21875 9.84375 6.53125 9.53125L10.5312 5.53125Z"
                    fill="#5956E9"
                  />
                </svg>
                <p className="text-lg text-[#808285]">Mistakes To Avoid</p>
              </div>
              <div className="check-item mt-2 flex items-center gap-x-2">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 0H12C13.0938 0 14 0.90625 14 2V12C14 13.125 13.0938 14 12 14H2C0.875 14 0 13.125 0 12V2C0 0.90625 0.875 0 2 0ZM10.5312 5.53125H10.5C10.8125 5.25 10.8125 4.78125 10.5 4.46875C10.2188 4.1875 9.75 4.1875 9.46875 4.46875L6 7.96875L4.53125 6.5C4.21875 6.1875 3.75 6.1875 3.46875 6.5C3.15625 6.78125 3.15625 7.25 3.46875 7.53125L5.46875 9.53125C5.75 9.84375 6.21875 9.84375 6.53125 9.53125L10.5312 5.53125Z"
                    fill="#5956E9"
                  />
                </svg>
                <p className="text-lg text-[#808285]">Your Startup</p>
              </div>
              <div className="check-item mt-2 flex items-center gap-x-2">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 0H12C13.0938 0 14 0.90625 14 2V12C14 13.125 13.0938 14 12 14H2C0.875 14 0 13.125 0 12V2C0 0.90625 0.875 0 2 0ZM10.5312 5.53125H10.5C10.8125 5.25 10.8125 4.78125 10.5 4.46875C10.2188 4.1875 9.75 4.1875 9.46875 4.46875L6 7.96875L4.53125 6.5C4.21875 6.1875 3.75 6.1875 3.46875 6.5C3.15625 6.78125 3.15625 7.25 3.46875 7.53125L5.46875 9.53125C5.75 9.84375 6.21875 9.84375 6.53125 9.53125L10.5312 5.53125Z"
                    fill="#5956E9"
                  />
                </svg>
                <p className="text-lg text-[#808285]">Knew About Fonts</p>
              </div>
              <div className="check-item mt-2 flex items-center gap-x-2">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 0H12C13.0938 0 14 0.90625 14 2V12C14 13.125 13.0938 14 12 14H2C0.875 14 0 13.125 0 12V2C0 0.90625 0.875 0 2 0ZM10.5312 5.53125H10.5C10.8125 5.25 10.8125 4.78125 10.5 4.46875C10.2188 4.1875 9.75 4.1875 9.46875 4.46875L6 7.96875L4.53125 6.5C4.21875 6.1875 3.75 6.1875 3.46875 6.5C3.15625 6.78125 3.15625 7.25 3.46875 7.53125L5.46875 9.53125C5.75 9.84375 6.21875 9.84375 6.53125 9.53125L10.5312 5.53125Z"
                    fill="#5956E9"
                  />
                </svg>
                <p className="text-lg text-[#808285]">
                  Winning Metric for Your Startup
                </p>
              </div>
              <div className="check-item mt-2 flex items-center gap-x-2">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 0H12C13.0938 0 14 0.90625 14 2V12C14 13.125 13.0938 14 12 14H2C0.875 14 0 13.125 0 12V2C0 0.90625 0.875 0 2 0ZM10.5312 5.53125H10.5C10.8125 5.25 10.8125 4.78125 10.5 4.46875C10.2188 4.1875 9.75 4.1875 9.46875 4.46875L6 7.96875L4.53125 6.5C4.21875 6.1875 3.75 6.1875 3.46875 6.5C3.15625 6.78125 3.15625 7.25 3.46875 7.53125L5.46875 9.53125C5.75 9.84375 6.21875 9.84375 6.53125 9.53125L10.5312 5.53125Z"
                    fill="#5956E9"
                  />
                </svg>
                <p className="text-lg text-[#808285]">Your Startup</p>
              </div>
            </div>
            <button className="group mx-auto mt-14 flex items-center gap-x-2.5 rounded-md border-2 border-primary px-5 py-3 text-base font-bold text-black hover:bg-primary hover:text-white">
              Get Now
              <ArrowRightCircleIcon className="h-auto w-5 text-black group-hover:text-white" />
            </button>
          </div>
        </div>
      </section>
      <section className="container mx-auto mt-28">
        <div className="flex w-full items-center justify-between rounded-md bg-primary px-20 py-16">
          <h1 className="text-6xl font-bold text-white">
            Sign Up For Latest Information
          </h1>
          <div className="flex items-center">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="h-fit rounded-l-md border-2 border-white bg-transparent px-7 py-3 text-white placeholder:text-sm placeholder:text-white focus:outline-none"
            />
            <button className="group flex items-center gap-x-2.5 border-2 border-[#00FCFF] bg-[#00FCFF] px-6 py-3 text-base font-bold text-black hover:text-white">
              Subscribe
              <ArrowRightCircleIcon className="h-auto w-5 text-black group-hover:text-white" />
            </button>
          </div>
        </div>
      </section>
      <section className="container mx-auto mt-28">
        <div className="text-center">
          <div className="flex items-center justify-center gap-x-3">
            <div className="h-[2px] w-5 bg-primary"></div>
            <p className="text-lg font-bold text-primary">
              Professional People
            </p>
            <div className="h-[2px] w-5 bg-primary"></div>
          </div>
          <h3 className="mt-5 text-5xl font-bold text-black">
            Connecting Your Business <br /> With The World
          </h3>
        </div>
        <div className="mt-20 grid grid-cols-3 gap-7">
          <div className="people">
            <Image
              src={`/henry.png`}
              width={410}
              height={388}
              alt="people"
              className="w-full"
            />
            <div className="mt-7 text-center">
              <h3 className="text-3xl font-bold text-[#191919]">
                Courtney Henry
              </h3>
              <p className="mt-1 text-lg text-[#808285]">Software Developer</p>
              <p className="mt-2.5 text-lg text-[#808285]">
                There are man variations of passages of Lorem Ipsum available,
                but the{" "}
              </p>
            </div>
            <div className="mt-4 flex items-center justify-center gap-x-4">
              <Link href={`#`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 30 30"
                  className="h-6 w-6"
                  fill="#5956E9"
                >
                  <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h10v-9h-3v-3h3v-1.611C16,9.339,17.486,8,20.021,8 c1.214,0,1.856,0.09,2.16,0.131V11h-1.729C19.376,11,19,11.568,19,12.718V14h3.154l-0.428,3H19v9h5c1.105,0,2-0.895,2-2V6 C26,4.895,25.104,4,24,4z"></path>
                </svg>
              </Link>
              <Link href={`#`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="#5956E9"
                >
                  <path d="M22,3.999c-0.78,0.463-2.345,1.094-3.265,1.276c-0.027,0.007-0.049,0.016-0.075,0.023c-0.813-0.802-1.927-1.299-3.16-1.299 c-2.485,0-4.5,2.015-4.5,4.5c0,0.131-0.011,0.372,0,0.5c-3.353,0-5.905-1.756-7.735-4c-0.199,0.5-0.286,1.29-0.286,2.032 c0,1.401,1.095,2.777,2.8,3.63c-0.314,0.081-0.66,0.139-1.02,0.139c-0.581,0-1.196-0.153-1.759-0.617c0,0.017,0,0.033,0,0.051 c0,1.958,2.078,3.291,3.926,3.662c-0.375,0.221-1.131,0.243-1.5,0.243c-0.26,0-1.18-0.119-1.426-0.165 c0.514,1.605,2.368,2.507,4.135,2.539c-1.382,1.084-2.341,1.486-5.171,1.486H2C3.788,19.145,6.065,20,8.347,20 C15.777,20,20,14.337,20,8.999c0-0.086-0.002-0.266-0.005-0.447C19.995,8.534,20,8.517,20,8.499c0-0.027-0.008-0.053-0.008-0.08 c-0.003-0.136-0.006-0.263-0.009-0.329c0.79-0.57,1.475-1.281,2.017-2.091c-0.725,0.322-1.503,0.538-2.32,0.636 C20.514,6.135,21.699,4.943,22,3.999z"></path>
                </svg>
              </Link>
              <Link href={`#`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 32 32"
                  className="h-6 w-6"
                  fill="#5956E9"
                >
                  <path d="M 11.46875 5 C 7.917969 5 5 7.914063 5 11.46875 L 5 20.53125 C 5 24.082031 7.914063 27 11.46875 27 L 20.53125 27 C 24.082031 27 27 24.085938 27 20.53125 L 27 11.46875 C 27 7.917969 24.085938 5 20.53125 5 Z M 11.46875 7 L 20.53125 7 C 23.003906 7 25 8.996094 25 11.46875 L 25 20.53125 C 25 23.003906 23.003906 25 20.53125 25 L 11.46875 25 C 8.996094 25 7 23.003906 7 20.53125 L 7 11.46875 C 7 8.996094 8.996094 7 11.46875 7 Z M 21.90625 9.1875 C 21.402344 9.1875 21 9.589844 21 10.09375 C 21 10.597656 21.402344 11 21.90625 11 C 22.410156 11 22.8125 10.597656 22.8125 10.09375 C 22.8125 9.589844 22.410156 9.1875 21.90625 9.1875 Z M 16 10 C 12.699219 10 10 12.699219 10 16 C 10 19.300781 12.699219 22 16 22 C 19.300781 22 22 19.300781 22 16 C 22 12.699219 19.300781 10 16 10 Z M 16 12 C 18.222656 12 20 13.777344 20 16 C 20 18.222656 18.222656 20 16 20 C 13.777344 20 12 18.222656 12 16 C 12 13.777344 13.777344 12 16 12 Z"></path>
                </svg>
              </Link>
              <Link href={`#`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="#5956E9"
                >
                  <path d="M 12 2 C 6.477 2 2 6.477 2 12 C 2 17.523 6.477 22 12 22 C 17.523 22 22 17.523 22 12 C 22 6.477 17.523 2 12 2 z M 12 4 C 16.418 4 20 7.582 20 12 C 20 16.418 16.418 20 12 20 C 11.264382 20 10.555494 19.892969 9.8789062 19.707031 C 10.09172 19.278284 10.282622 18.826454 10.386719 18.425781 C 10.501719 17.985781 10.972656 16.191406 10.972656 16.191406 C 11.278656 16.775406 12.173 17.271484 13.125 17.271484 C 15.958 17.271484 18 14.665734 18 11.427734 C 18 8.3227344 15.467031 6 12.207031 6 C 8.1520313 6 6 8.7215469 6 11.685547 C 6 13.063547 6.73325 14.779172 7.90625 15.326172 C 8.08425 15.409172 8.1797031 15.373172 8.2207031 15.201172 C 8.2527031 15.070172 8.4114219 14.431766 8.4824219 14.134766 C 8.5054219 14.040766 8.4949687 13.958234 8.4179688 13.865234 C 8.0299688 13.394234 7.71875 12.529656 7.71875 11.722656 C 7.71875 9.6496562 9.2879375 7.6445312 11.960938 7.6445312 C 14.268937 7.6445313 15.884766 9.2177969 15.884766 11.466797 C 15.884766 14.007797 14.601641 15.767578 12.931641 15.767578 C 12.009641 15.767578 11.317063 15.006312 11.539062 14.070312 C 11.804063 12.953313 12.318359 11.747406 12.318359 10.941406 C 12.318359 10.220406 11.932859 9.6191406 11.130859 9.6191406 C 10.187859 9.6191406 9.4296875 10.593391 9.4296875 11.900391 C 9.4296875 12.732391 9.7109375 13.294922 9.7109375 13.294922 C 9.7109375 13.294922 8.780375 17.231844 8.609375 17.964844 C 8.5246263 18.326587 8.4963381 18.755144 8.4941406 19.183594 C 5.8357722 17.883113 4 15.15864 4 12 C 4 7.582 7.582 4 12 4 z"></path>
                </svg>
              </Link>
            </div>
          </div>
          <div className="people">
            <Image
              src={`/jerome.png`}
              width={410}
              height={388}
              alt="people"
              className="w-full"
            />
            <div className="mt-7 text-center">
              <h3 className="text-3xl font-bold text-[#191919]">Jerome Bell</h3>
              <p className="mt-1 text-lg text-[#808285]">Project Manager</p>
              <p className="mt-2.5 text-lg text-[#808285]">
                There are man variations of passages of Lorem Ipsum available,
                but the{" "}
              </p>
            </div>
            <div className="mt-4 flex items-center justify-center gap-x-4">
              <Link href={`#`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 30 30"
                  className="h-6 w-6"
                  fill="#5956E9"
                >
                  <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h10v-9h-3v-3h3v-1.611C16,9.339,17.486,8,20.021,8 c1.214,0,1.856,0.09,2.16,0.131V11h-1.729C19.376,11,19,11.568,19,12.718V14h3.154l-0.428,3H19v9h5c1.105,0,2-0.895,2-2V6 C26,4.895,25.104,4,24,4z"></path>
                </svg>
              </Link>
              <Link href={`#`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="#5956E9"
                >
                  <path d="M22,3.999c-0.78,0.463-2.345,1.094-3.265,1.276c-0.027,0.007-0.049,0.016-0.075,0.023c-0.813-0.802-1.927-1.299-3.16-1.299 c-2.485,0-4.5,2.015-4.5,4.5c0,0.131-0.011,0.372,0,0.5c-3.353,0-5.905-1.756-7.735-4c-0.199,0.5-0.286,1.29-0.286,2.032 c0,1.401,1.095,2.777,2.8,3.63c-0.314,0.081-0.66,0.139-1.02,0.139c-0.581,0-1.196-0.153-1.759-0.617c0,0.017,0,0.033,0,0.051 c0,1.958,2.078,3.291,3.926,3.662c-0.375,0.221-1.131,0.243-1.5,0.243c-0.26,0-1.18-0.119-1.426-0.165 c0.514,1.605,2.368,2.507,4.135,2.539c-1.382,1.084-2.341,1.486-5.171,1.486H2C3.788,19.145,6.065,20,8.347,20 C15.777,20,20,14.337,20,8.999c0-0.086-0.002-0.266-0.005-0.447C19.995,8.534,20,8.517,20,8.499c0-0.027-0.008-0.053-0.008-0.08 c-0.003-0.136-0.006-0.263-0.009-0.329c0.79-0.57,1.475-1.281,2.017-2.091c-0.725,0.322-1.503,0.538-2.32,0.636 C20.514,6.135,21.699,4.943,22,3.999z"></path>
                </svg>
              </Link>
              <Link href={`#`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 32 32"
                  className="h-6 w-6"
                  fill="#5956E9"
                >
                  <path d="M 11.46875 5 C 7.917969 5 5 7.914063 5 11.46875 L 5 20.53125 C 5 24.082031 7.914063 27 11.46875 27 L 20.53125 27 C 24.082031 27 27 24.085938 27 20.53125 L 27 11.46875 C 27 7.917969 24.085938 5 20.53125 5 Z M 11.46875 7 L 20.53125 7 C 23.003906 7 25 8.996094 25 11.46875 L 25 20.53125 C 25 23.003906 23.003906 25 20.53125 25 L 11.46875 25 C 8.996094 25 7 23.003906 7 20.53125 L 7 11.46875 C 7 8.996094 8.996094 7 11.46875 7 Z M 21.90625 9.1875 C 21.402344 9.1875 21 9.589844 21 10.09375 C 21 10.597656 21.402344 11 21.90625 11 C 22.410156 11 22.8125 10.597656 22.8125 10.09375 C 22.8125 9.589844 22.410156 9.1875 21.90625 9.1875 Z M 16 10 C 12.699219 10 10 12.699219 10 16 C 10 19.300781 12.699219 22 16 22 C 19.300781 22 22 19.300781 22 16 C 22 12.699219 19.300781 10 16 10 Z M 16 12 C 18.222656 12 20 13.777344 20 16 C 20 18.222656 18.222656 20 16 20 C 13.777344 20 12 18.222656 12 16 C 12 13.777344 13.777344 12 16 12 Z"></path>
                </svg>
              </Link>
              <Link href={`#`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="#5956E9"
                >
                  <path d="M 12 2 C 6.477 2 2 6.477 2 12 C 2 17.523 6.477 22 12 22 C 17.523 22 22 17.523 22 12 C 22 6.477 17.523 2 12 2 z M 12 4 C 16.418 4 20 7.582 20 12 C 20 16.418 16.418 20 12 20 C 11.264382 20 10.555494 19.892969 9.8789062 19.707031 C 10.09172 19.278284 10.282622 18.826454 10.386719 18.425781 C 10.501719 17.985781 10.972656 16.191406 10.972656 16.191406 C 11.278656 16.775406 12.173 17.271484 13.125 17.271484 C 15.958 17.271484 18 14.665734 18 11.427734 C 18 8.3227344 15.467031 6 12.207031 6 C 8.1520313 6 6 8.7215469 6 11.685547 C 6 13.063547 6.73325 14.779172 7.90625 15.326172 C 8.08425 15.409172 8.1797031 15.373172 8.2207031 15.201172 C 8.2527031 15.070172 8.4114219 14.431766 8.4824219 14.134766 C 8.5054219 14.040766 8.4949687 13.958234 8.4179688 13.865234 C 8.0299688 13.394234 7.71875 12.529656 7.71875 11.722656 C 7.71875 9.6496562 9.2879375 7.6445312 11.960938 7.6445312 C 14.268937 7.6445313 15.884766 9.2177969 15.884766 11.466797 C 15.884766 14.007797 14.601641 15.767578 12.931641 15.767578 C 12.009641 15.767578 11.317063 15.006312 11.539062 14.070312 C 11.804063 12.953313 12.318359 11.747406 12.318359 10.941406 C 12.318359 10.220406 11.932859 9.6191406 11.130859 9.6191406 C 10.187859 9.6191406 9.4296875 10.593391 9.4296875 11.900391 C 9.4296875 12.732391 9.7109375 13.294922 9.7109375 13.294922 C 9.7109375 13.294922 8.780375 17.231844 8.609375 17.964844 C 8.5246263 18.326587 8.4963381 18.755144 8.4941406 19.183594 C 5.8357722 17.883113 4 15.15864 4 12 C 4 7.582 7.582 4 12 4 z"></path>
                </svg>
              </Link>
            </div>
          </div>
          <div className="people">
            <Image
              src={`/jenny.png`}
              width={410}
              height={388}
              alt="people"
              className="w-full"
            />
            <div className="mt-7 text-center">
              <h3 className="text-3xl font-bold text-[#191919]">
                Jenny Wilson
              </h3>
              <p className="mt-1 text-lg text-[#808285]">Team Leader</p>
              <p className="mt-2.5 text-lg text-[#808285]">
                There are man variations of passages of Lorem Ipsum available,
                but the{" "}
              </p>
            </div>
            <div className="mt-4 flex items-center justify-center gap-x-4">
              <Link href={`#`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 30 30"
                  className="h-6 w-6"
                  fill="#5956E9"
                >
                  <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h10v-9h-3v-3h3v-1.611C16,9.339,17.486,8,20.021,8 c1.214,0,1.856,0.09,2.16,0.131V11h-1.729C19.376,11,19,11.568,19,12.718V14h3.154l-0.428,3H19v9h5c1.105,0,2-0.895,2-2V6 C26,4.895,25.104,4,24,4z"></path>
                </svg>
              </Link>
              <Link href={`#`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="#5956E9"
                >
                  <path d="M22,3.999c-0.78,0.463-2.345,1.094-3.265,1.276c-0.027,0.007-0.049,0.016-0.075,0.023c-0.813-0.802-1.927-1.299-3.16-1.299 c-2.485,0-4.5,2.015-4.5,4.5c0,0.131-0.011,0.372,0,0.5c-3.353,0-5.905-1.756-7.735-4c-0.199,0.5-0.286,1.29-0.286,2.032 c0,1.401,1.095,2.777,2.8,3.63c-0.314,0.081-0.66,0.139-1.02,0.139c-0.581,0-1.196-0.153-1.759-0.617c0,0.017,0,0.033,0,0.051 c0,1.958,2.078,3.291,3.926,3.662c-0.375,0.221-1.131,0.243-1.5,0.243c-0.26,0-1.18-0.119-1.426-0.165 c0.514,1.605,2.368,2.507,4.135,2.539c-1.382,1.084-2.341,1.486-5.171,1.486H2C3.788,19.145,6.065,20,8.347,20 C15.777,20,20,14.337,20,8.999c0-0.086-0.002-0.266-0.005-0.447C19.995,8.534,20,8.517,20,8.499c0-0.027-0.008-0.053-0.008-0.08 c-0.003-0.136-0.006-0.263-0.009-0.329c0.79-0.57,1.475-1.281,2.017-2.091c-0.725,0.322-1.503,0.538-2.32,0.636 C20.514,6.135,21.699,4.943,22,3.999z"></path>
                </svg>
              </Link>
              <Link href={`#`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 32 32"
                  className="h-6 w-6"
                  fill="#5956E9"
                >
                  <path d="M 11.46875 5 C 7.917969 5 5 7.914063 5 11.46875 L 5 20.53125 C 5 24.082031 7.914063 27 11.46875 27 L 20.53125 27 C 24.082031 27 27 24.085938 27 20.53125 L 27 11.46875 C 27 7.917969 24.085938 5 20.53125 5 Z M 11.46875 7 L 20.53125 7 C 23.003906 7 25 8.996094 25 11.46875 L 25 20.53125 C 25 23.003906 23.003906 25 20.53125 25 L 11.46875 25 C 8.996094 25 7 23.003906 7 20.53125 L 7 11.46875 C 7 8.996094 8.996094 7 11.46875 7 Z M 21.90625 9.1875 C 21.402344 9.1875 21 9.589844 21 10.09375 C 21 10.597656 21.402344 11 21.90625 11 C 22.410156 11 22.8125 10.597656 22.8125 10.09375 C 22.8125 9.589844 22.410156 9.1875 21.90625 9.1875 Z M 16 10 C 12.699219 10 10 12.699219 10 16 C 10 19.300781 12.699219 22 16 22 C 19.300781 22 22 19.300781 22 16 C 22 12.699219 19.300781 10 16 10 Z M 16 12 C 18.222656 12 20 13.777344 20 16 C 20 18.222656 18.222656 20 16 20 C 13.777344 20 12 18.222656 12 16 C 12 13.777344 13.777344 12 16 12 Z"></path>
                </svg>
              </Link>
              <Link href={`#`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="#5956E9"
                >
                  <path d="M 12 2 C 6.477 2 2 6.477 2 12 C 2 17.523 6.477 22 12 22 C 17.523 22 22 17.523 22 12 C 22 6.477 17.523 2 12 2 z M 12 4 C 16.418 4 20 7.582 20 12 C 20 16.418 16.418 20 12 20 C 11.264382 20 10.555494 19.892969 9.8789062 19.707031 C 10.09172 19.278284 10.282622 18.826454 10.386719 18.425781 C 10.501719 17.985781 10.972656 16.191406 10.972656 16.191406 C 11.278656 16.775406 12.173 17.271484 13.125 17.271484 C 15.958 17.271484 18 14.665734 18 11.427734 C 18 8.3227344 15.467031 6 12.207031 6 C 8.1520313 6 6 8.7215469 6 11.685547 C 6 13.063547 6.73325 14.779172 7.90625 15.326172 C 8.08425 15.409172 8.1797031 15.373172 8.2207031 15.201172 C 8.2527031 15.070172 8.4114219 14.431766 8.4824219 14.134766 C 8.5054219 14.040766 8.4949687 13.958234 8.4179688 13.865234 C 8.0299688 13.394234 7.71875 12.529656 7.71875 11.722656 C 7.71875 9.6496562 9.2879375 7.6445312 11.960938 7.6445312 C 14.268937 7.6445313 15.884766 9.2177969 15.884766 11.466797 C 15.884766 14.007797 14.601641 15.767578 12.931641 15.767578 C 12.009641 15.767578 11.317063 15.006312 11.539062 14.070312 C 11.804063 12.953313 12.318359 11.747406 12.318359 10.941406 C 12.318359 10.220406 11.932859 9.6191406 11.130859 9.6191406 C 10.187859 9.6191406 9.4296875 10.593391 9.4296875 11.900391 C 9.4296875 12.732391 9.7109375 13.294922 9.7109375 13.294922 C 9.7109375 13.294922 8.780375 17.231844 8.609375 17.964844 C 8.5246263 18.326587 8.4963381 18.755144 8.4941406 19.183594 C 5.8357722 17.883113 4 15.15864 4 12 C 4 7.582 7.582 4 12 4 z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id="portfolio" className="container mx-auto mt-28">
        <div className="flex items-end justify-between">
          <div className="">
            <div className="flex items-center gap-x-5">
              <ArrowLongRightIcon className="h-6 w-auto text-primary" />
              <p className="text-lg font-bold text-primary">Latest Portfolio</p>
            </div>
            <h1 className="text-5xl font-bold text-[#191919]">
              Where Creative <br /> Meet Technology
            </h1>
          </div>
          <div className="flex gap-x-6">
            <button className="rounded-lg bg-white px-5 py-2.5 text-lg text-black shadow-lg hover:bg-primary hover:text-white">
              All Projects
            </button>
            <button className="rounded-lg bg-white px-5 py-2.5 text-lg text-black shadow-lg hover:bg-primary hover:text-white">
              Marketing
            </button>
            <button className="rounded-lg bg-white px-5 py-2.5 text-lg text-black shadow-lg hover:bg-primary hover:text-white">
              Optimization
            </button>
            <button className="rounded-lg bg-white px-5 py-2.5 text-lg text-black shadow-lg hover:bg-primary hover:text-white">
              Consulting
            </button>
          </div>
        </div>
        <div className="mt-14">
          <div className="flex justify-center gap-x-7">
            <Image
              src={`/portfolio/1.png`}
              width={630}
              height={328}
              alt="1"
              className=""
            />
            <Image
              src={`/portfolio/2.png`}
              width={300}
              height={328}
              alt="2"
              className=""
            />
            <Image
              src={`/portfolio/3.png`}
              width={300}
              height={328}
              alt="3"
              className=""
            />
          </div>
          <div className="mt-7 flex justify-center gap-x-7">
            <Image
              src={`/portfolio/4.png`}
              width={300}
              height={328}
              alt="4"
              className=""
            />
            <Image
              src={`/portfolio/5.png`}
              width={300}
              height={328}
              alt="5"
              className=""
            />
            <Image
              src={`/portfolio/6.png`}
              width={630}
              height={328}
              alt="6"
              className=""
            />
          </div>
        </div>
      </section>
      <section id="about" className="container mx-auto mt-28">
        <div className="flex items-stretch gap-x-14">
          <div className="relative h-fit w-1/2">
            <Image
              src={`/about1.png`}
              width={448}
              height={515}
              alt="about1"
              className="mx-auto"
            />
            <Image
              src={`/about2.png`}
              width={350}
              height={334}
              alt="about2"
              className="absolute -bottom-40 right-0"
            />
            <Image
              src={`/about3.png`}
              width={194}
              height={168}
              alt="about2"
              className="absolute -bottom-20 left-20"
            />
            <div className="absolute bottom-12 left-12 flex w-fit items-center justify-center rounded-md border-l-8 border-primary bg-[#EFEFFD] px-10 py-5">
              <p className="text-2xl font-bold text-black">
                Best Awarded <br /> Company
              </p>
            </div>
          </div>
          <div className="w-1/2">
            <div className="flex items-center gap-x-5">
              <div className="h-[3px] w-8 bg-primary"></div>
              <p className="text-lg font-bold text-primary">About Us</p>
            </div>
            <h1 className="mt-5 text-5xl font-bold text-[#191919]">
              Your Financial Success <br /> Is Our Priority
            </h1>
            <p className="mt-10 text-lg text-[#808285]">
              It is a long established fact that a reader will be distracted by
              the readable design content of a page when looking at its layout.
              Lorem Ipsum
            </p>
            <div className="mt-7 grid grid-cols-2 gap-7">
              <div className="flex items-center gap-x-4 rounded-lg bg-white px-5 py-4 shadow-lg">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                  <Image
                    src={`/settings.png`}
                    width={40}
                    height={40}
                    alt="crafters"
                    className="h-10 w-10"
                  />
                </div>
                <p className="text-2xl font-bold text-black">Crafters</p>
              </div>
              <div className="flex items-center gap-x-4 rounded-lg bg-white px-5 py-4 shadow-lg">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                  <Image
                    src={`/coding.png`}
                    width={40}
                    height={40}
                    alt="punch"
                    className="h-10 w-10"
                  />
                </div>
                <p className="text-2xl font-bold text-black">Punch</p>
              </div>
              <div className="flex items-center gap-x-4 rounded-lg bg-white px-5 py-4 shadow-lg">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                  <Image
                    src={`/design.png`}
                    width={40}
                    height={40}
                    alt="busters"
                    className="h-10 w-10"
                  />
                </div>
                <p className="text-2xl font-bold text-black">Busters</p>
              </div>
              <div className="flex items-center gap-x-4 rounded-lg bg-white px-5 py-4 shadow-lg">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                  <Image
                    src={`/creative.png`}
                    width={40}
                    height={40}
                    alt="dazzle"
                    className="h-10 w-10"
                  />
                </div>
                <p className="text-2xl font-bold text-black">Dazzle</p>
              </div>
            </div>
            <div className="mt-12 flex gap-x-14">
              <button className="group flex items-center gap-x-2.5 rounded-md bg-primary px-6 py-3 text-base font-bold text-white">
                Subscribe
                <ArrowRightCircleIcon className="h-auto w-5 text-white" />
              </button>
              <div className="contact flex items-center gap-x-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary bg-opacity-10">
                  <PhoneIcon className="h-4 w-4 text-primary" />
                </div>
                <div className="">
                  <p className="text-[#808285]">Need help?</p>
                  <p className="font-medium text-black">(808) 555-0111</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="services" className="relative mt-28 bg-primary py-28">
        <div className="container mx-auto flex gap-x-7">
          <div className="w-1/2">
            <div className="flex items-center gap-x-5">
              <div className="h-[3px] w-8 bg-white"></div>
              <p className="text-lg font-bold text-white">More Services</p>
            </div>
            <h1 className="mt-5 text-5xl font-bold text-white">
              Transforming Your Digital <br /> Landscape
            </h1>
            <p className="mt-10 text-lg text-white">
              It is a long established fact that a reader will be distracted by
              the readable hkklj content of a page when looking at its layout.
              Lorem Ipsum It is a long established fact that a reader will be
              distracted by the readable
            </p>
            <button className="bprder-whhite group mt-7 flex items-center gap-x-2.5 rounded-md border-2 px-6 py-3 text-base font-bold text-white">
              Read More
              <ArrowRightCircleIcon className="h-auto w-5 text-white" />
            </button>
          </div>
          <div className="w-1/2 overflow-x-visible">
            <div className="flex gap-x-7">
              <div className="card-service min-w-72 bg-white p-5">
                <div className="relative">
                  <Image
                    src={`/strate-consulting.png`}
                    width={260}
                    height={220}
                    alt="consulting"
                    className="h-52 w-full object-cover"
                  />
                  <div className="absolute -bottom-10 left-4 flex h-16 w-16 items-center justify-center bg-primary">
                    <Image
                      src={`/coding.png`}
                      width={40}
                      height={40}
                      alt="consulting"
                      className="h-10 w-10"
                    />
                  </div>
                </div>
                <h3 className="mt-16 text-2xl font-bold text-black">
                  Strate Consulting
                </h3>
                <p className="mt-1 text-lg text-[#808285]">
                  It is a long estashe fact that a reader will be distractd by
                  the readable content
                </p>
                <Link href={`#`} className="mt-2.5 flex items-center gap-x-2">
                  <ArrowRightIcon className="h-6 text-primary" />
                  <span className="text-lg font-bold text-black">
                    Read More
                  </span>
                </Link>
              </div>
              <div className="card-service min-w-72 bg-white p-5">
                <div className="relative">
                  <Image
                    src={`/search-engine.png`}
                    width={260}
                    height={220}
                    alt="search engine"
                    className="h-52 w-full object-cover"
                  />
                  <div className="absolute -bottom-10 left-4 flex h-16 w-16 items-center justify-center bg-primary">
                    <Image
                      src={`/Draft.png`}
                      width={40}
                      height={40}
                      alt="consulting"
                      className="h-10 w-10"
                    />
                  </div>
                </div>
                <h3 className="mt-16 text-2xl font-bold text-black">
                  Search Engine
                </h3>
                <p className="mt-1 text-lg text-[#808285]">
                  It is a long estashe fact that a reader will be distractd by
                  the readable content
                </p>
                <Link href={`#`} className="mt-2.5 flex items-center gap-x-2">
                  <ArrowRightIcon className="h-6 text-primary" />
                  <span className="text-lg font-bold text-black">
                    Read More
                  </span>
                </Link>
              </div>
              <div className="card-service min-w-72 bg-white p-5">
                <div className="relative">
                  <Image
                    src={`/digital-marketing.png`}
                    width={260}
                    height={220}
                    alt="digital marketing"
                    className="h-52 w-full object-cover"
                  />
                  <div className="absolute -bottom-10 left-4 flex h-16 w-16 items-center justify-center bg-primary">
                    <Image
                      src={`/light.png`}
                      width={40}
                      height={40}
                      alt="consulting"
                      className="h-10 w-10"
                    />
                  </div>
                </div>
                <h3 className="mt-16 text-2xl font-bold text-black">
                  Digital Marketing
                </h3>
                <p className="mt-1 text-lg text-[#808285]">
                  It is a long estashe fact that a reader will be distractd by
                  the readable content
                </p>
                <Link href={`#`} className="mt-2.5 flex items-center gap-x-2">
                  <ArrowRightIcon className="h-6 text-primary" />
                  <span className="text-lg font-bold text-black">
                    Read More
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Image
          src={`/circular.png`}
          width={608}
          height={608}
          alt="circular"
          className="absolute left-0 top-0 h-full w-auto"
        />
      </section>
      <section className="container mx-auto mt-28">
        <div className="grid grid-cols-4 gap-7"></div>
      </section>
      <section className="container mx-auto mt-28">
        <div className="text-center">
          <div className="flex items-center justify-center gap-x-3">
            <div className="h-[2px] w-5 bg-primary"></div>
            <p className="text-lg font-bold text-primary">Clients Talk</p>
            <div className="h-[2px] w-5 bg-primary"></div>
          </div>
          <h3 className="mt-5 text-5xl font-bold text-black">
            Unlocking Your Online <br /> Potential
          </h3>
        </div>
      </section>
      <section className="container mx-auto mt-28">
        <div className="text-center">
          <div className="flex items-center justify-center gap-x-3">
            <div className="h-[2px] w-5 bg-primary"></div>
            <p className="text-lg font-bold text-primary">Blog And News</p>
            <div className="h-[2px] w-5 bg-primary"></div>
          </div>
          <h3 className="mt-5 text-5xl font-bold text-black">
            Digital Solution For <br /> Modern Problems
          </h3>
        </div>
      </section>
    </>
  );
}
