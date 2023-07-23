import { useRef, ReactNode, lazy } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import W3C from "../assets/svg/W3C_Icon.svg";
import Tezos from "../assets/svg/tezos_Icon.svg";
import GDPR from "../assets/svg/GDPR.svg";
import Dashboard from "../assets/img/Dashborad.png";
const Pay1 = () => {
  return (
    <div>
      <div className="bg-gradient-to-b from-w to-maincolor">
        <div className="container m-auto px-6 py-20 md:px-12 lg:px-20">
          <div className="m-auto text-center lg:w-8/12 xl:w-7/12">
            <h2 className="text-2xl text-maincolor font-[sf-pro-text-bold] font-bold md:text-4xl">
              <a className="text-2xl text-black px-2  font-[sf-pro-text-bold] font-bold md:text-4xl">
                Protect your business with
              </a>
              YourD
            </h2>
          </div>
          <div className="mt-12 m-auto -space-y-4 items-center justify-center md:flex md:space-y-0 md:-space-x-4 xl:w-10/12">
            <div className="relative z-10 -mx-4 group md:w-6/12 md:mx-0 lg:w-5/12">
              <div
                aria-hidden="true"
                className="absolute top-0 w-full h-full rounded-2xl bg-white shadow-xl transition duration-500 group-hover:scale-105 lg:group-hover:scale-110"
              ></div>
              <div className="relative p-6 space-y-6 lg:p-8">
                <h3 className="text-3xl text-gray-700 font-[sf-pro-text-semibold] text-center">
                  Organisation
                </h3>
                <div>
                  <div className="relative flex justify-around">
                    <div className="flex items-end">
                      <span className="text-8xl text-gray-800 font-bold leading-0">
                        35
                      </span>
                      <div className="pb-2">
                        <span className="block text-2xl text-gray-700 font-bold">
                          $
                        </span>
                        <span className="block text-xl text-maincolor  font-bold">
                          for month
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <ul
                  role="list"
                  className="w-max space-y-4 py-6 m-auto text-gray-600"
                >
                  <li className="space-x-2">
                    <span className="text-maincolor  font-semibold"></span>
                    <span>Data Analytics</span>
                  </li>
                  <li className="space-x-2">
                    <span className="text-maincolor  font-semibold"></span>
                    <span>Data API</span>
                  </li>
                  <li className="space-x-2">
                    <span className="text-maincolor  font-semibold"></span>
                    <span>Solution Feedback</span>
                  </li>
                </ul>
                <button
                  type="submit"
                  title="Submit"
                  className="block w-full py-3 px-6 text-center rounded-xl transition bg-maincolor hover:bg-purple-700 active:bg-purple-800 focus:bg-indigo-600"
                >
                  <span className="text-white font-semibold">
                    Send us an email
                  </span>
                </button>
              </div>
            </div>

            <div className="relative group md:w-6/12 lg:w-7/12">
              <div
                aria-hidden="true"
                className="absolute top-0 w-full h-full rounded-2xl bg-white shadow-lg transition duration-500 group-hover:scale-105"
              ></div>
              <div className="relative p-6 pt-16 md:p-8 md:pl-12 md:rounded-r-2xl lg:pl-20 lg:p-16">
                <ul role="list" className="space-y-4 py-6 text-gray-600">
                  <li className="space-x-2">
                    <span className="text-maincolor font-semibold">
                      &check;
                    </span>
                    <span>provide data analystics</span>
                  </li>
                  <li className="space-x-2">
                    <span className="text-maincolor font-semibold">
                      &check;
                    </span>
                    <span>can use easy data API</span>
                  </li>
                  <li className="space-x-2">
                    <span className="text-maincolor font-semibold">
                      &check;
                    </span>
                    <span>Weekly solution feedback</span>
                  </li>
                </ul>
                <p className="text-gray-700">
                  Team can be any size, and you can add or switch members as
                  needed. Companies using our platform include:
                </p>
                <div className="mt-6 flex justify-between gap-6">
                  <img
                    className="w-16 lg:w-24"
                    src={W3C}
                    loading="lazy"
                    alt="w3c logo"
                  />
                  <img
                    className="w-16 lg:w-32"
                    src="https://vchained.com/wp-content/uploads/2023/04/tezos.png"
                    loading="lazy"
                    alt="tezos logo"
                  />
                  <img
                    className="w-16  lg:w-32"
                    src={GDPR}
                    loading="lazy"
                  ></img>
                </div>
                {/* <img
                  className="full"
                  src="https://gdpr.eu/wp-content/themes/gdpr/images/logo-gdpr-eu.svg"
                  alt="GDPR.eu"
                ></img> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const DetailPay = () => {
  return (
    <section className="mx-auto px-10 bg-gray-100 text-gray-800">
      <div className="container mx-auto p-6 overflow-x-auto">
        <table className="w-full">
          <caption className="sr-only">Pricing plan comparison</caption>
          <thead>
            <tr>
              <th></th>
              <th scope="col">
                <h2 className="px-2 text-lg font-medium">Starter</h2>
                <p className="mb-3">
                  <span className="text-2xl font-bold sm:text-4xl text-gray-900">
                    0€
                  </span>
                  <span className="font-medium text-gray-600">/mo</span>
                </p>
              </th>
              <th scope="col">
                <h2 className="px-2 text-lg font-medium">Standard</h2>
                <p className="mb-3">
                  <span className="text-2xl font-bold sm:text-4xl text-gray-900">
                    19€
                  </span>
                  <span className="font-medium text-gray-600">/mo</span>
                </p>
              </th>
              <th scope="col">
                <h2 className="px-2 text-lg font-medium">Premium</h2>
                <p className="mb-3">
                  <span className="text-2xl font-bold sm:text-4xl text-gray-900">
                    49€
                  </span>
                  <span className="font-medium text-gray-600">/mo</span>
                </p>
              </th>
            </tr>
          </thead>
          <tbody className="space-y-6 text-center divide-y divide-gray-300">
            <tr>
              <th scope="row" className="text-left">
                <h3 className="py-3">Euismod</h3>
              </th>
              <td>
                <span className="block text-sm">1</span>
              </td>
              <td>
                <span className="block text-sm">10</span>
              </td>
              <td>
                <span className="block text-sm">100</span>
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-left">
                <h3 className="py-3">Principes et</h3>
              </th>
              <td>
                <span className="block text-sm">0,5 GB</span>
              </td>
              <td>
                <span className="block text-sm">5 GB</span>
              </td>
              <td>
                <span className="block text-sm">500 GB</span>
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-left">
                <h3 className="py-3">Et mel porro</h3>
              </th>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-label="Included in Free plan"
                  className="w-5 h-5 mx-auto text-maincolor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </td>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-label="Included in Standard plan"
                  className="w-5 h-5 mx-auto text-maincolor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </td>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-label="Included in Premium plan"
                  className="w-5 h-5 mx-auto text-maincolor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-left">
                <h3 className="py-3">Veniam suscipiantur</h3>
              </th>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-label="Not included in Free plan"
                  className="w-5 h-5 mx-auto text-gray-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </td>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-label="Included in Standard plan"
                  className="w-5 h-5 mx-auto text-maincolor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </td>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-label="Included in Premium plan"
                  className="w-5 h-5 mx-auto text-maincolor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-left">
                <h3 className="py-3">Ornatus tacimates</h3>
              </th>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-label="Not included in Free plan"
                  className="w-5 h-5 mx-auto text-gray-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </td>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-label="Not included in Standard plan"
                  className="w-5 h-5 mx-auto text-gray-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </td>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-label="Included in Premium plan"
                  className="w-5 h-5 mx-auto text-maincolor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-left">
                <h3 className="py-3">Aliquam fastidii in mei</h3>
              </th>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-label="Not included in Free plan"
                  className="w-5 h-5 mx-auto text-gray-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </td>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-label="Not included in Standard plan"
                  className="w-5 h-5 mx-auto text-gray-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </td>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-label="Included in Premium plan"
                  className="w-5 h-5 mx-auto text-maincolor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

const PayPage = () => {
  return (
    <section className="py-20 bg-gray-100 text-gray-800">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <span className="font-bold tracki uppercase text-maincolor">
            Pricing
          </span>
          <h2 className="text-4xl font-bold lg:text-5xl">
            Choose your best plan
          </h2>
        </div>
        <div className="flex flex-wrap items-stretch -mx-4">
          <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
            <div className="flex flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-gray-50">
              <div className="space-y-2">
                <h4 className="text-2xl font-bold">Beginner</h4>
                <span className="text-6xl font-bold">Free</span>
              </div>
              <p className="mt-3 leadi text-gray-600">
                Etiam ac convallis enim, eget euismod dolor.
              </p>
              <ul className="flex-1 mb-6 text-gray-600">
                <li className="flex mb-2 space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="flex-shrink-0 w-6 h-6 text-maincolor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Aenean quis</span>
                </li>
                <li className="flex mb-2 space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="flex-shrink-0 w-6 h-6 text-maincolor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Morbi semper</span>
                </li>
                <li className="flex mb-2 space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="flex-shrink-0 w-6 h-6 text-maincolor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Tristique enim nec</span>
                </li>
              </ul>
              <button
                type="button"
                className="inline-block px-5 py-3 font-semibold tracki text-center rounded bg-maincolor text-gray-50"
              >
                Get Started
              </button>
            </div>
          </div>
          <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
            <div className="flex flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-maincolor text-gray-50">
              <div className="space-y-2">
                <h4 className="text-2xl font-bold">Pro</h4>
                <span className="text-6xl font-bold">
                  $24
                  <span className="text-sm tracki">/month</span>
                </span>
              </div>
              <p className="leadi">
                Morbi cursus ut sapien sit amet consectetur.
              </p>
              <ul className="flex-1 space-y-2">
                <li className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="flex-shrink-0 w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Everything in Free</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="flex-shrink-0 w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Phasellus tellus</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="flex-shrink-0 w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Praesent faucibus</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="flex-shrink-0 w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Aenean et lectus blandit</span>
                </li>
              </ul>
              <a
                rel="noopener noreferrer"
                href="#"
                className="inline-block w-full px-5 py-3 font-bold tracki text-center rounded bg-gray-100 text-maincolor"
              >
                Get Started
              </a>
            </div>
          </div>
          <div className="w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
            <div className="p-6 space-y-6 rounded shadow sm:p-8 bg-gray-50">
              <div className="space-y-2">
                <h4 className="text-2xl font-bold">Team</h4>
                <span className="text-6xl font-bold">
                  $72
                  <span className="text-sm tracki">/month</span>
                </span>
              </div>
              <p className="leadi text-gray-600">
                Phasellus ultrices bibendum nibh in vehicula.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="flex-shrink-0 w-6 h-6 text-maincolor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Everything in Pro</span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="flex-shrink-0 w-6 h-6 text-maincolor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Fusce sem ligula</span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="flex-shrink-0 w-6 h-6 text-maincolor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Curabitur dictum</span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="flex-shrink-0 w-6 h-6 text-maincolor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Duis odio eros</span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="flex-shrink-0 w-6 h-6 text-maincolor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Vivamus ut lectus ex</span>
                </li>
              </ul>
              <a
                rel="noopener noreferrer"
                href="#"
                className="inline-block w-full px-5 py-3 font-semibold tracki text-center rounded bg-maincolor text-gray-50"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Feature1 = () => {
  return (
    <section className="h-screen w-full bg-white text-gray-800">
      <div className="h-full w-full container flex flex-col mx-auto lg:flex-row  py-6 lg:py-12">
        <div className="h-full flex  flex-col  align-middle px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5">
          <p className="pt-32 sm:pt-64 text-4xl  font-[font-sf-pro-text-bold] font-bold text-center text-maincolor mb-4">
            Data analytics
          </p>
          <p className="font-[font-sf-pro-text]  text-xl  text-left">
            Analyzing GDPR-compliant data using ZKP (Zero-Knowledge Proofs)
            technology to provide charts and statistical information.
          </p>
        </div>

        <div className="h-full w-full">
          <div className="h-full w-full flex  items-end justify-center md:p-2 lg:pl-12">
            <img
              src={Dashboard}
              alt=""
              className=" object-contain overflow-hidden relative rounded-l-2xl h-full w-full shadow-lg  aspect-video sm:min-h-96 "
            />
          </div>
        </div>
      </div>
    </section>
  );
};
const Feature2 = () => {
  return (
    <section className="h-screen w-screen bg-white text-gray-800 ">
      <div className="h-full w-full container flex flex-col-reverse mx-auto lg:flex-row">
        <div className="h-full w-full">
          <div className="h-full w-full flex  items-end justify-center md:p-2 ">
            <img
              src={Dashboard}
              alt=""
              className=" object-contain overflow-hidden relative rounded-r-2xl h-full w-full shadow-lg  aspect-video sm:min-h-96 "
            />
          </div>
        </div>
        <div className="h-full flex  flex-col  align-middle px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5">
          <span className="pt-32 sm:pt-64 text-4xl  font-[font-sf-pro-text-bold] font-bold text-center text-maincolor mb-4">
            Data API{" "}
            <p className="text-gray-500 text-xl">with GDPR Compliance</p>
          </span>
          <p className=" font-[font-sf-pro-text]  text-xl  text-left">
            <span>Easy API</span> - If you want custom data like a ranking
            system, we can provide tailored solutions to meet your specific
            needs with ease and efficiency.
          </p>
        </div>
      </div>
    </section>
  );
};
const Feature3 = () => {
  return (
    <section className="h-screen w-full bg-white text-gray-800">
      <div className="h-full w-full container flex flex-col mx-auto lg:flex-row  py-6 lg:py-12">
        <div className="h-full flex  flex-col  align-middle px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5">
          <p className="pt-32 sm:pt-64 text-4xl  font-[font-sf-pro-text-bold] font-bold text-center text-maincolor mb-4">
            Periodic Solution Feedback
          </p>
          <p className="font-[font-sf-pro-text]  text-xl  text-left">
            Weekly user churn feedback based on user data, empowering
            data-driven decisions for improved engagement and retention.
          </p>
        </div>

        <div className="h-full w-full">
          <div className="h-full w-full flex  items-end justify-center md:p-2 lg:pl-12">
            <img
              src={Dashboard}
              alt=""
              className=" object-contain overflow-hidden relative rounded-l-2xl h-full w-full shadow-lg  aspect-video sm:min-h-96 "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export function BusinessPage() {
  return (
    <div>
      <Pay1 />
      <Feature1 />
      <Feature2 />
      <Feature3 />
    </div>
  );
}

// Business
// GDPR compliant 하게 제공한다.
// 1.Data 통계 - 차트나 그래프
// 2.원하는 자료형식에 맞춰서 API제공  , 랭킹, 이런 데이터들
// 3.분석과 해당 솔루션( 통계에 따른)
// ㄴ 게임 - 여러 정보가 있잖아 정보를 바탕으로 게임에 적합한 사람들에 광고 ,
// - 유저관련 이탈율
