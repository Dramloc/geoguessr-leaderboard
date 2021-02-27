/** @jsxImportSource @emotion/react */
import { Link } from "react-router-dom";
import "twin.macro";
import tw from "twin.macro";
import { Panel } from "../shared/Panel";

const Home = () => {
  return (
    <>
      <main tw="lg:col-span-9 xl:col-span-6">
        <h1 tw="sr-only">Recent questions</h1>
        <ul tw="space-y-4">
          <Panel as="li" tw="px-4 py-6 sm:p-6">
            <article aria-labelledby="question-title-81614">
              <div>
                <div tw="flex space-x-3">
                  <div tw="flex-shrink-0">
                    <img
                      tw="h-10 w-10 rounded-full"
                      src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div tw="min-w-0 flex-1">
                    <p tw="text-sm font-medium text-gray-900 dark:(text-white)">
                      <Link to="/u/driesvincent" tw="hover:underline">
                        Dries Vincent
                      </Link>
                    </p>
                    <p tw="text-sm text-gray-500 dark:(text-gray-400)">
                      <Link to="/g/uuid" tw="hover:underline">
                        December 9 at 11:43 AM
                      </Link>
                    </p>
                  </div>
                  <div tw="flex-shrink-0 self-center flex">
                    <div tw="relative inline-block text-left">
                      <div>
                        <button
                          type="button"
                          tw="-m-2 p-2 rounded-full flex items-center"
                          css={[
                            tw`(text-gray-400 hover:text-gray-600)`,
                            tw`dark:(text-gray-500 hover:text-gray-400)`,
                          ]}
                          id="options-menu-0"
                          aria-expanded="false"
                          aria-haspopup="true"
                        >
                          <span tw="sr-only">Open options</span>
                          {/* Heroicon name: solid/dots-vertical */}
                          <svg
                            tw="h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <h2
                  id="question-title-81614"
                  tw="mt-4 text-base font-medium text-gray-900 dark:(text-white)"
                >
                  What would you have done differently if you ran Jurassic Park?
                </h2>
              </div>
              <div tw="mt-2 text-sm text-gray-700 dark:(text-gray-200) space-y-4">
                <p>
                  Jurassic Park was an incredible idea and a magnificent feat of
                  engineering, but poor protocols and a disregard for human
                  safety killed what could have otherwise been one of the best
                  businesses of our generation.
                </p>
                <p>
                  Ultimately, I think that if you wanted to run the park
                  successfully and keep visitors safe, the most important thing
                  to prioritize would be…
                </p>
              </div>
              <div tw="mt-6 flex justify-between space-x-8">
                <div tw="flex space-x-6">
                  <span tw="inline-flex items-center text-sm">
                    <button
                      tw="inline-flex space-x-2"
                      css={[
                        tw`(text-gray-400 hover:text-gray-500)`,
                        tw`dark:(text-gray-500 hover:text-gray-400)`,
                      ]}
                    >
                      {/* Heroicon name: solid/thumb-up */}
                      <svg
                        tw="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                      </svg>
                      <span tw="font-medium text-gray-900 dark:(text-white)">
                        29
                      </span>
                      <span tw="sr-only">likes</span>
                    </button>
                  </span>
                  <span tw="inline-flex items-center text-sm">
                    <button
                      tw="inline-flex space-x-2"
                      css={[
                        tw`(text-gray-400 hover:text-gray-500)`,
                        tw`dark:(text-gray-500 hover:text-gray-400)`,
                      ]}
                    >
                      {/* Heroicon name: solid/chat-alt */}
                      <svg
                        tw="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span tw="font-medium text-gray-900 dark:(text-white)">
                        11
                      </span>
                      <span tw="sr-only">replies</span>
                    </button>
                  </span>
                  <span tw="inline-flex items-center text-sm">
                    <button
                      tw="inline-flex space-x-2"
                      css={[
                        tw`(text-gray-400 hover:text-gray-500)`,
                        tw`dark:(text-gray-500 hover:text-gray-400)`,
                      ]}
                    >
                      {/* Heroicon name: solid/eye */}
                      <svg
                        tw="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path
                          fillRule="evenodd"
                          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span tw="font-medium text-gray-900 dark:(text-white)">
                        2.7k
                      </span>
                      <span tw="sr-only">views</span>
                    </button>
                  </span>
                </div>
                <div tw="flex text-sm">
                  <span tw="inline-flex items-center text-sm">
                    <button
                      tw="inline-flex space-x-2"
                      css={[
                        tw`(text-gray-400 hover:text-gray-500)`,
                        tw`dark:(text-gray-500 hover:text-gray-400)`,
                      ]}
                    >
                      {/* Heroicon name: solid/share */}
                      <svg
                        tw="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                      </svg>
                      <span tw="font-medium text-gray-900 dark:(text-white)">
                        Share
                      </span>
                    </button>
                  </span>
                </div>
              </div>
            </article>
          </Panel>
        </ul>
      </main>
      <aside tw="hidden xl:block xl:col-span-4">
        <div tw="sticky top-4 space-y-4">
          <section aria-labelledby="who-to-follow-heading">
            <Panel>
              <div tw="p-6">
                <h2
                  id="who-to-follow-heading"
                  tw="text-base font-medium text-gray-900 dark:(text-white)"
                >
                  Who to follow
                </h2>
                <div tw="mt-6 flow-root">
                  <ul tw="-my-4 divide-y divide-gray-200 dark:(divide-gray-700)">
                    <li tw="flex items-center py-4 space-x-3">
                      <div tw="flex-shrink-0">
                        <img
                          tw="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </div>
                      <div tw="min-w-0 flex-1">
                        <p tw="text-sm font-medium text-gray-900 dark:(text-white)">
                          <Link to="/u/leonardkrasner">Leonard Krasner</Link>
                        </p>
                        <p tw="text-sm text-gray-500 dark:(text-gray-400)">
                          <Link to="/u/leonardkrasner">@leonardkrasner</Link>
                        </p>
                      </div>
                      <div tw="flex-shrink-0">
                        <button
                          type="button"
                          tw="inline-flex items-center px-3 py-0.5 rounded-full bg-primary-50 text-sm font-medium text-primary-700 hover:bg-primary-100"
                        >
                          {/* Heroicon name: solid/plus */}
                          <svg
                            tw="-ml-1 mr-0.5 h-5 w-5 text-primary-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span>Follow</span>
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
                <div tw="mt-6">
                  <Link
                    to="/suggested-users"
                    tw="w-full block text-center px-4 py-2 border shadow-sm text-sm font-medium rounded-md"
                    css={[
                      tw`(border-gray-300 text-gray-700 bg-white hover:bg-gray-50)`,
                      tw`dark:(border-transparent text-white bg-gray-600 hover:bg-gray-700)`,
                    ]}
                  >
                    View all
                  </Link>
                </div>
              </div>
            </Panel>
          </section>
          <section aria-labelledby="trending-heading">
            <Panel>
              <div tw="p-6">
                <h2
                  id="trending-heading"
                  tw="text-base font-medium text-gray-900 dark:(text-white)"
                >
                  Trending
                </h2>
                <div tw="mt-6 flow-root">
                  <ul tw="-my-4 divide-y divide-gray-200 dark:(divide-gray-700)">
                    <li tw="flex py-4 space-x-3">
                      <div tw="flex-shrink-0">
                        <img
                          tw="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </div>
                      <div tw="min-w-0 flex-1">
                        <p tw="text-sm text-gray-800 dark:(text-gray-100)">
                          What books do you have on your bookshelf just to look
                          smarter than you actually are?
                        </p>
                        <div tw="mt-2 flex">
                          <span tw="inline-flex items-center text-sm">
                            <button tw="inline-flex space-x-2 text-gray-400 hover:text-gray-500 dark:(text-gray-500 hover:text-gray-400)">
                              {/* Heroicon name: solid/chat-alt */}
                              <svg
                                tw="h-5 w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span tw="font-medium text-gray-900 dark:(text-white)">
                                291
                              </span>
                            </button>
                          </span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div tw="mt-6">
                  <Link
                    to="/r/trending"
                    tw="w-full block text-center px-4 py-2 border shadow-sm text-sm font-medium rounded-md"
                    css={[
                      tw`(border-gray-300 text-gray-700 bg-white hover:bg-gray-50)`,
                      tw`dark:(border-transparent text-white bg-gray-600 hover:bg-gray-700)`,
                    ]}
                  >
                    View all
                  </Link>
                </div>
              </div>
            </Panel>
          </section>
        </div>
      </aside>
    </>
  );
};

export default Home;
