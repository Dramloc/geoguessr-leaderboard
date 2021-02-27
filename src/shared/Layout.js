/** @jsxImportSource @emotion/react */
import { Global } from "@emotion/react";
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
            tw`(bg-white border-gray-300 focus:(text-gray-900 ring-primary-500 border-primary-500))`,
            tw`dark:(bg-gray-900 border-gray-700 focus:(text-white ring-gray-500 border-gray-500))`,
          ]}
          placeholder="Search"
          type="search"
        />
      </div>
    </div>
  );
};

const MobileMenuLink = ({ as: Component = Link, ...props }) => {
  return (
    <Component
      tw="block rounded-md py-2 px-3 text-base font-medium"
      css={[
        // Light mode
        tw`(text-gray-900 hover:(bg-gray-50))`,
        { "&.active": tw`(bg-gray-100 text-gray-900 hover:(bg-gray-100))` },
        // Dark mode
        tw`dark:(text-white hover:(bg-gray-700))`,
        {
          "&.active": tw`dark:(bg-gray-600 text-white hover:(bg-gray-600))`,
        },
      ]}
      {...props}
    />
  );
};

const MobileMenu = (props) => {
  return (
    <nav tw="lg:hidden" aria-label="Global" {...props}>
      <div tw="max-w-3xl mx-auto px-2 pt-2 pb-3 space-y-1 sm:px-4">
        <MobileMenuLink as={NavLink} to="/" exact>
          Home
        </MobileMenuLink>
        <MobileMenuLink as={NavLink} to="/leaderboard" exact>
          Leaderboard
        </MobileMenuLink>
      </div>
      <div tw="border-t border-gray-200 dark:(border-gray-600) pt-4 pb-3">
        <div tw="max-w-3xl mx-auto px-4 flex items-center sm:px-6">
          <div tw="flex-shrink-0">
            <img
              tw="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>
          <div tw="ml-3">
            <div tw="text-base font-medium text-gray-800 dark:(text-white)">
              Chelsea Hagon
            </div>
            <div tw="text-sm font-medium text-gray-500 dark:(text-gray-400)">
              chelseahagon@example.com
            </div>
          </div>
        </div>
        <div tw="mt-3 max-w-3xl mx-auto px-2 space-y-1 sm:px-4">
          <MobileMenuLink to="/sign-out">Sign out</MobileMenuLink>
        </div>
      </div>
    </nav>
  );
};

const Header = () => {
  const { isOpen, onToggle } = useDisclosure(false);
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
              <div tw="flex-shrink-0 relative ml-5">
                <div>
                  <button
                    type="button"
                    tw="rounded-full flex"
                    css={[
                      tw`(bg-white focus:(outline-none ring-2 ring-offset-2 ring-primary-500))`,
                      tw`dark:(bg-gray-700 focus:(outline-none ring-2 ring-offset-2 ring-offset-gray-800 ring-gray-500))`,
                    ]}
                  >
                    <span tw="sr-only">Open user menu</span>
                    <img
                      tw="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </button>
                </div>
              </div>
              <Link
                to="/g/new"
                tw="ml-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm"
                css={[
                  tw`(text-white bg-primary-600 hover:(bg-primary-700) focus:(outline-none ring-2 ring-offset-2 ring-primary-500))`,
                  tw`(text-white bg-primary-500 hover:(bg-primary-600) focus:(outline-none ring-2 ring-offset-2 ring-primary-500 ring-offset-gray-800))`,
                ]}
              >
                New Game
              </Link>
            </div>
          </div>
        </div>
        {/* Mobile menu, show/hide based on menu state. */}
        <MobileMenu css={isOpen ? tw`block` : tw`hidden`} />
      </header>
    </>
  );
};

const SidebarLink = ({ as: Component = Link, ...props }) => {
  return (
    <NavLink
      tw="flex items-center px-3 py-2 text-sm font-medium rounded-md svg:(flex-shrink-0 -ml-1 mr-3 h-6 w-6)"
      css={[
        // Light mode
        tw`(text-gray-600 hover:(bg-gray-50) svg:(text-gray-400))`,
        {
          "&.active": tw`(bg-gray-200 hover:(bg-gray-200) text-gray-900 svg:(text-gray-500))`,
        },
        // Dark mode
        tw`dark:(text-gray-400 hover:(bg-gray-800) svg:(text-gray-500))`,
        {
          "&.active": tw`dark:(bg-gray-700 hover:(bg-gray-700) text-white svg:(text-white))`,
        },
      ]}
      {...props}
    />
  );
};

const Sidebar = (props) => {
  return (
    <nav
      aria-label="Sidebar"
      tw="sticky top-4 divide-y divide-gray-300"
      {...props}
    >
      <div tw="pb-8 space-y-1">
        <SidebarLink as={NavLink} to="/" exact>
          <HomeOutlineIcon />
          <span tw="truncate">Home</span>
        </SidebarLink>
        <SidebarLink as={NavLink} to="/leaderboard" exact>
          <TrendingUpOutlineIcon />
          <span tw="truncate">Leaderboard</span>
        </SidebarLink>
      </div>
    </nav>
  );
};

export const Layout = ({ children }) => {
  return (
    <div tw="min-h-screen" css={[tw`(bg-gray-100)`, tw`dark:(bg-gray-900)`]}>
      <Header />
      <div tw="max-w-3xl mx-auto py-10 sm:(px-6) lg:(max-w-7xl px-8 grid grid-cols-12 gap-8)">
        <Sidebar tw="hidden lg:(block col-span-3 col-span-2)" />
        {children}
      </div>
    </div>
  );
};
