<script>
  // Dynamic year and footer information
  let date = new Date().getFullYear();
  import { PUBLIC_PROJECT_AUTHOR, PUBLIC_PROJECT_NAME } from '$env/static/public'; 
</script>

<!-- Wrapper to ensure footer sticks to the bottom -->
<div class="flex flex-col min-h-screen">
  <!-- Main Content -->
  <main class="flex-grow">
    <slot /> <!-- Your page content goes here -->
  </main>

  <!-- Footer -->
  <footer class="py-4 bg-blueGray-200">
    <div class="container mx-auto px-4">
      <hr class="mb-4 border-b-1 border-blueGray-200" />
      <div class="flex flex-wrap items-center md:justify-between justify-center">
        <div class="w-full md:w-4/12 px-4">
          <div
            class="text-sm text-blueGray-500 font-semibold py-1 text-center md:text-left"
          >
            Copyright © {date} | {PUBLIC_PROJECT_NAME}
            <span> | Made by {PUBLIC_PROJECT_AUTHOR}</span>
          </div>
        </div>
        <div class="w-full md:w-8/12 px-4">
          <ul class="flex flex-wrap list-none md:justify-end justify-center">
            <li>
              <a
                href="https://github.com?ref=ns-footer-admin"
                class="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://vercel.com?ref=ns-footer-admin"
                class="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
              >
                Vercel
              </a>
            </li>
            <li>
              <a
                href="https://onrender.com?ref=ns-footer-admin"
                class="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
              >
                Render
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</div>
