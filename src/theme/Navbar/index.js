import React from 'react';
import Navbar from '@theme-original/Navbar';

import TwitterIcon from '../../components/icons/TwitterIcon';
import DiscordIcon from '../../components/icons/DiscordIcon';
import MediumIcon from '../../components/icons/MediumIcon';
import TelegramIcon from '../../components/icons/TelegramIcon';
import { APP_URL } from '../../constants';

const NavigationItems = () => {
  return (
    <div className="flex gap-x-9">
      <a>Blog</a>
      <a>Community</a>
      <a>Docs</a>
      <a>Governance</a>
    </div>
  );
};

const iconsClassNames =
  'h-7 hover:text-indigo-300 cursor-pointer transition-all duration-200';

const SocialIcons = () => {
  return (
    <div className="hidden lg:flex gap-x-8 px-8">
      <TwitterIcon className={iconsClassNames} />
      <TelegramIcon className={iconsClassNames} />
      <DiscordIcon className={iconsClassNames} />
      <MediumIcon className={iconsClassNames} />
    </div>
  );
};

export default function NavbarWrapper(props) {
  return (
    <>
      <div className="hidden md:flex justify-end items-center h-[90px] px-4 md:px-6">
        <img
          src="../../../img/logo.svg"
          alt="logo"
          className="h-[32px] mr-auto"
        />
        <div className="flex gap-16 items-center">
          <NavigationItems />
          <SocialIcons />
          <button
            className="uppercase rounded-2xl bg-primary py-2 px-6 text-[13px] font-medium text-white hover:bg-white hover:text-primary transition-all duration-500"
            onClick={() => window.open(APP_URL, '_blank')}
          >
            Enter app
          </button>
        </div>
      </div>
      <Navbar {...props} />
    </>
  );
}
