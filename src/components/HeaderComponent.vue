<template>
  <header class="h-24 w-full bg-white shadow">
    <div class="mx-auto flex h-full max-w-6xl items-center justify-between">
      <h1 class="text-2xl">NBA App</h1>
      <nav>
        <ul class="flex items-center gap-8">
          <li>
            <router-link to="/">HOME</router-link>
          </li>
          <li>
            <div class="group relative inline-block text-left" tabindex="-1">
              <button
                class="inline-flex w-full justify-center items-center"
                type="button"
                aria-haspopup="true"
              >
                <span>CHARTS</span>

                <svg class="ml-2 -mr-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <div
                class="invisible origin-top scale-95 opacity-0 transition-all duration-300 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:scale-100 group-focus-within:opacity-100"
              >
                <div
                  class="absolute right-0 mt-2 w-56 origin-top divide-y divide-gray-100 rounded-md border border-gray-200 bg-white shadow-lg outline-none"
                  role="menu"
                >
                  <div class="px-4 py-3">
                    <p class="text-sm leading-5">Signed in as</p>
                    <p class="truncate text-sm font-medium leading-5 text-gray-900">
                      tom@example.com
                    </p>
                  </div>

                  <div class="py-1">
                    <a
                      href="javascript:void(0);"
                      class="flex w-full justify-between px-4 py-2 text-left text-sm leading-5 text-gray-700 focus-visible:outline-1 focus-visible:outline-blue-500"
                      role="menuitem"
                      >Account settings</a
                    >
                    <a
                      href="javascript:void(0);"
                      class="flex w-full justify-between px-4 py-2 text-left text-sm leading-5 text-gray-700 focus-visible:outline-1 focus-visible:outline-blue-500"
                      role="menuitem"
                      >Support</a
                    >
                    <span
                      role="menuitem"
                      tabindex="-1"
                      class="flex w-full cursor-not-allowed justify-between px-4 py-2 text-left text-sm leading-5 text-gray-700 opacity-50"
                      aria-disabled="true"
                      >New feature (soon)</span
                    >

                    <a
                      href="javascript:void(0);"
                      class="flex w-full justify-between px-4 py-2 text-left text-sm leading-5 text-gray-700 focus-visible:outline-1 focus-visible:outline-blue-500"
                      role="menuitem"
                      >License</a
                    >
                  </div>

                  <div class="py-1">
                    <a
                      href="javascript:void(0);"
                      class="flex w-full justify-between px-4 py-2 text-left text-sm leading-5 text-gray-700 focus-visible:outline-1 focus-visible:outline-blue-500"
                      role="menuitem"
                      >Sign out</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <a href="#">GAMES</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script></script>
