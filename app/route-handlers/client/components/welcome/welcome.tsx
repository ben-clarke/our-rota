import type { JSX } from "react";
import {
  BUTTON_GET_STARTED,
  BUTTON_SIGN_IN,
  DESCRIPTION,
  GET_STARTED_NOW,
} from "~/constants/ui/welcome";

const Welcome = (): JSX.Element => (
  <main className="flex items-center justify-center pt-16 pb-4">
    <div className="relative py-16">
      <div
        aria-hidden="true"
        className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
      >
        <div className="blur-[106px] h-56 bg-gradient-to-br from-teal-500 to-purple-400 dark:from-blue-700" />
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <div className="relative">
          <div className="flex items-center justify-center -space-x-2">
            <img
              loading="lazy"
              width="400"
              height="400"
              src="https://randomuser.me/api/portraits/lego/0.jpg"
              alt="member"
              className="h-8 w-8 rounded-full object-cover"
            />
            <img
              loading="lazy"
              width="200"
              height="200"
              src="https://randomuser.me/api/portraits/lego/0.jpg"
              alt="member"
              className="h-12 w-12 rounded-full object-cover"
            />
            <img
              loading="lazy"
              width="200"
              height="200"
              src="https://randomuser.me/api/portraits/lego/3.jpg"
              alt="member"
              className="z-10 h-16 w-16 rounded-full object-cover"
            />
            <img
              loading="lazy"
              width="200"
              height="200"
              src="https://randomuser.me/api/portraits/lego/1.jpg"
              alt="member"
              className="relative h-12 w-12 rounded-full object-cover"
            />
            <img
              loading="lazy"
              width="200"
              height="200"
              src="https://randomuser.me/api/portraits/lego/2.jpg"
              alt="member"
              className="h-8 w-8 rounded-full object-cover"
            />
          </div>

          <div className="mt-6 m-auto space-y-6 md:w-8/12 lg:w-7/12">
            <h1 className="text-center text-4xl font-bold text-gray-800 dark:text-white md:text-5xl">
              {GET_STARTED_NOW}
            </h1>
            <p className="text-center text-xl text-gray-600 dark:text-gray-300">{DESCRIPTION}</p>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="/get-started"
                className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-teal-500 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
              >
                <span className="relative text-base font-semibold text-white dark:text-dark">
                  {BUTTON_GET_STARTED}
                </span>
              </a>
              <a
                href="/login"
                className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-teal-500/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
              >
                <span className="relative text-base font-semibold text-teal-500 dark:text-white">
                  {BUTTON_SIGN_IN}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
);

export default Welcome;
