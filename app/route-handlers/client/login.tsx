import type { JSX } from "react";
import {
  BUTTON_LOGIN,
  LOGIN_SUBTITLE,
  LOGIN_TITLE,
  PASSWORD,
  USERNAME,
} from "~/constants/ui/login";
import { Button, Input } from "~/libs/ui";

const Login = (): JSX.Element => (
  <div className="w-screen min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-800 px-4 sm:px-6 lg:px-8">
    <div className="relative py-3 sm:max-w-xs sm:mx-auto">
      <div className="min-h-96 px-8 py-6 mt-4 text-left bg-white dark:bg-gray-900  rounded-xl shadow-lg">
        <div className="flex flex-col justify-center items-center h-full select-none">
          <div className="flex flex-col items-center justify-center gap-2 mb-8">
            <img
              loading="lazy"
              width="200"
              height="200"
              src="https://randomuser.me/api/portraits/lego/3.jpg"
              alt="member"
              className="z-10 h-16 w-16 rounded-full object-cover"
            />
            <p className="m-0 text-[16px] font-semibold dark:text-white">{LOGIN_TITLE}</p>
            <span className="m-0 text-xs max-w-[90%] text-center text-[#8B8E98]">
              {LOGIN_SUBTITLE}
            </span>
          </div>
          <div className="w-full flex flex-col gap-2">
            <Input id="username" placeholder="••••••••">
              {USERNAME}
            </Input>
          </div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <Input id="password" type="password" placeholder="••••••••">
            {PASSWORD}
          </Input>
        </div>
        <div className="mt-5">
          <Button>{BUTTON_LOGIN}</Button>
        </div>
      </div>
    </div>
  </div>
);

export default Login;
