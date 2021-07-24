import clsx from "clsx";
import "tailwindcss/tailwind.css";
import { Footer } from "../components/footer";
// import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import { Spacer } from "../components/spacer";
import { ThemeProvider, useTheme } from "../utils/theme-context";

function MyApp({ Component, pageProps }) {
  const [theme] = useTheme();

  return (
    <>
      <html lang="en" className={theme ?? ""}>
        <body
          className={clsx("dark:bg-gray-900 bg-white")}
          style={{
            // we want a transition delay, but only on the opacity transition
            // I'm unaware of any easy way to do this with tailwind
            // so we'll just do this with inline styles 🙃
            // TODO: maybe come up with a better way to show the pending state
            transition: "opacity 0.5s linear 0.5s",
          }}
        >
          <Navbar />
          <main>
            <Component {...pageProps} />
          </main>
          <Spacer size="medium" />
          <Footer />
        </body>
      </html>
    </>
  );
}

function MyAppWithProviders({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <MyApp Component={Component} pageProps={pageProps} />
    </ThemeProvider>
  );
}

export default MyAppWithProviders;
