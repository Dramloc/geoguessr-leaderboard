/** @jsxImportSource @emotion/react */
import { useAuth0 } from "@auth0/auth0-react";
import { Global } from "@emotion/react";
import styled from "@emotion/styled";
import { HTMLAttributes } from "react";
import { Link, NavLink } from "react-router-dom";
import "twin.macro";
import tw from "twin.macro";
import {
  HomeOutlineIcon,
  MenuOutlineIcon,
  SearchSolidIcon,
  TrendingUpOutlineIcon,
  XOutlineIcon,
} from "./Icons";
import { Logo } from "./Logo";
import { PrimaryButtonLink } from "./PrimaryButton";
import { useDisclosure } from "./useDisclosure";

const SearchBar = () => {
  return (
    <div tw="w-full">
      <label htmlFor="search" tw="sr-only">
        Search
      </label>
      <div tw="relative">
        <div tw="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
          <SearchSolidIcon tw="h-5 w-5 text-gray-400" />
        </div>
        <input
          id="search"
          name="search"
          tw="block w-full border rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:(outline-none ring-1 placeholder-gray-400) sm:text-sm"
          css={[
            tw`(bg-white text-gray-900 border-gray-300 focus:(ring-primary-500 border-primary-500))`,
            tw`dark:(bg-gray-900 text-white border-gray-700 focus:(ring-gray-500 border-gray-500))`,
          ]}
          placeholder="Search"
          type="search"
        />
      </div>
    </div>
  );
};

const MobileMenuButton = styled("button")(
  tw`block w-full text-left rounded-md py-2 px-3 text-base font-medium`,
  tw`(text-gray-900 hover:(bg-gray-50))`,
  tw`dark:(text-white hover:(bg-gray-700))`
);

const MobileMenuNavLink = styled(NavLink)(
  tw`block rounded-md py-2 px-3 text-base font-medium`,
  // Light mode
  tw`(text-gray-900 hover:(bg-gray-50))`,
  { "&.active": tw`(bg-gray-100 text-gray-900 hover:(bg-gray-100))` },
  // Dark mode
  tw`dark:(text-white hover:(bg-gray-700))`,
  {
    "&.active": tw`dark:(bg-gray-600 text-white hover:(bg-gray-600))`,
  }
);

const MobileMenu: React.FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  const { isAuthenticated, user, logout } = useAuth0();
  return (
    <nav tw="lg:hidden" aria-label="Global" {...props}>
      <div tw="max-w-3xl mx-auto px-2 pt-2 pb-3 space-y-1 sm:px-4">
        <MobileMenuNavLink to="/" exact>
          Home
        </MobileMenuNavLink>
        <MobileMenuNavLink to="/leaderboard" exact>
          Leaderboard
        </MobileMenuNavLink>
      </div>
      {isAuthenticated && (
        <div tw="border-t border-gray-200 dark:(border-gray-600) pt-4 pb-3">
          <div tw="max-w-3xl mx-auto px-4 flex items-center sm:px-6">
            <div tw="flex-shrink-0">
              <img tw="h-10 w-10 rounded-full" src={user.picture} alt="" />
            </div>
            <div tw="ml-3">
              <div tw="text-base font-medium text-gray-800 dark:(text-white)">
                {user.name}
              </div>
              <div tw="text-sm font-medium text-gray-500 dark:(text-gray-400)">
                {user.email}
              </div>
            </div>
          </div>
          <div tw="mt-3 max-w-3xl mx-auto px-2 space-y-1 sm:px-4">
            <MobileMenuButton
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              Sign out
            </MobileMenuButton>
          </div>
        </div>
      )}
    </nav>
  );
};

const Header: React.FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  const { isOpen, onToggle } = useDisclosure(false);
  const { isAuthenticated, user } = useAuth0();
  return (
    <>
      {/* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */}
      <Global styles={{ body: isOpen && tw`overflow-hidden` }} />

      <header
        css={[
          tw`(bg-white shadow-sm)`,
          tw`dark:(bg-gray-800)`,
          tw`lg:(static overflow-y-visible)`,
          isOpen && tw`fixed inset-0 z-40 overflow-y-auto`,
        ]}
        {...props}
      >
        <div tw="max-w-7xl mx-auto px-4 sm:(px-6) lg:(px-8)">
          <div tw="relative flex justify-between xl:(grid grid-cols-12) lg:(gap-8)">
            {/* Home link and logo */}
            <div tw="flex md:(absolute left-0 inset-y-0) lg:(static) xl:(col-span-2)">
              <div tw="flex-shrink-0 flex items-center">
                <Link to="/">
                  <Logo tw="block h-8 w-auto text-primary-600 dark:(text-primary-500)" />
                </Link>
              </div>
            </div>
            {/* Search bar */}
            <div tw="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
              <div tw="flex items-center px-6 py-4 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0">
                <SearchBar />
              </div>
            </div>
            <div tw="flex items-center md:absolute md:right-0 md:inset-y-0 lg:hidden">
              {/* Mobile menu button */}
              <button
                type="button"
                tw="-mx-2 rounded-md p-2 inline-flex items-center justify-center"
                css={[
                  tw`(text-gray-400 hover:(bg-gray-100 text-gray-500) focus:(outline-none ring-2 ring-inset ring-primary-500))`,
                  tw`dark:(text-gray-500 hover:(bg-gray-700 text-gray-400) focus:(outline-none ring-2 ring-inset ring-gray-500))`,
                ]}
                onClick={onToggle}
              >
                <span tw="sr-only">Open menu</span>
                {/* Icon when menu is closed. */}
                <MenuOutlineIcon
                  tw="h-6 w-6"
                  css={isOpen ? tw`hidden` : tw`block`}
                />
                {/* Icon when menu is open. */}
                <XOutlineIcon
                  tw="h-6 w-6"
                  css={isOpen ? tw`block` : tw`hidden`}
                />
              </button>
            </div>
            <div tw="hidden lg:(flex items-center justify-end) xl:(col-span-4)">
              {/* Profile dropdown */}
              {isAuthenticated && (
                <div tw="flex-shrink-0 relative ml-5">
                  <button
                    type="button"
                    tw="rounded-full flex"
                    css={[
                      tw`(bg-white focus:(outline-none ring-2 ring-offset-2 ring-primary-500))`,
                      tw`dark:(bg-gray-700 focus:(outline-none ring-2 ring-offset-2 ring-offset-gray-800 ring-gray-500))`,
                    ]}
                  >
                    <span tw="sr-only">Open user menu</span>
                    <img tw="h-8 w-8 rounded-full" src={user.picture} alt="" />
                  </button>
                </div>
              )}
              <PrimaryButtonLink to="/g/new" tw="ml-6">
                New game
              </PrimaryButtonLink>
            </div>
          </div>
        </div>
        {/* Mobile menu, show/hide based on menu state. */}
        <MobileMenu css={isOpen ? tw`block` : tw`hidden`} />
      </header>
    </>
  );
};

const SidebarNavLink = styled(NavLink)(
  tw`flex items-center px-3 py-2 text-sm font-medium rounded-md`,
  tw`svg:(flex-shrink-0 -ml-1 mr-3 h-6 w-6)`,
  // Light mode
  tw`(text-gray-600 hover:(bg-gray-50) svg:(text-gray-400))`,
  {
    "&.active": tw`(bg-gray-200 hover:(bg-gray-200) text-gray-900 svg:(text-gray-500))`,
  },
  // Dark mode
  tw`dark:(text-gray-400 hover:(bg-gray-800) svg:(text-gray-500))`,
  {
    "&.active": tw`dark:(bg-gray-700 hover:(bg-gray-700) text-white svg:(text-white))`,
  }
);

const Sidebar: React.FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  return (
    <nav
      aria-label="Sidebar"
      tw="sticky top-4 divide-y divide-gray-300"
      {...props}
    >
      <div tw="pb-8 space-y-1">
        <SidebarNavLink to="/" exact>
          <HomeOutlineIcon />
          <span tw="truncate">Home</span>
        </SidebarNavLink>
        <SidebarNavLink to="/leaderboard" exact>
          <TrendingUpOutlineIcon />
          <span tw="truncate">Leaderboard</span>
        </SidebarNavLink>
      </div>
    </nav>
  );
};

export const Layout: React.FC<{}> = ({ children }) => {
  return (
    <div css={[tw`min-h-screen`, tw`(bg-gray-100)`, tw`dark:(bg-gray-900)`]}>
      <Header />
      <div tw="max-w-3xl mx-auto py-10 sm:(px-6) lg:(max-w-7xl px-8 grid grid-cols-12 gap-8)">
        <Sidebar tw="hidden lg:(block col-span-3 col-span-2)" />
        {children}
      </div>
    </div>
  );
};
