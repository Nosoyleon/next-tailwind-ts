import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-between p-16 md:p-24">
        <div className="flex w-full max-w-5xl flex-col justify-between gap-2  p-4 md:flex-row">
          <p className="fixed inset-x-0 top-0 z-10 w-auto whitespace-nowrap border border-gray-200 bg-slate-100 p-3 text-center md:static md:w-full md:text-left">
            Get started by editing&nbsp;
            <code className="font-bold">src/pages/index.tsx</code>
          </p>
          <a
            className="flex w-auto items-center justify-center gap-2 md:w-full md:justify-end"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              className="relative h-[24px] w-[100px]"
              src="/vercel.svg"
              alt="Vercel Logo"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>

        <div className="relative flex items-center justify-center px-0 pt-32 pb-24 md:py-16">
          <Image
            src="/next.svg"
            alt="Next.js Logo"
            className="relative"
            width={180}
            height={37}
            priority
          />
          <Image
            className="relative ml-4 flex h-[75px] w-[75px] items-center justify-center overflow-hidden rounded-lg border py-5 px-4 shadow-md"
            src="/thirteen.svg"
            alt="13"
            width={40}
            height={31}
            priority
          />
          <div />
        </div>

        <div className="grid w-full max-w-sm text-center md:max-w-5xl md:grid-cols-4 md:text-left">
          <a
            className="group rounded-md border border-slate-100 px-10 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 md:px-5"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="mb-2 text-2xl font-bold md:mb-3">
              Docs{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1">
                -&gt;
              </span>
            </h2>
            <p className="opacity-60">
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            className="group rounded-md border border-slate-100 px-10 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 md:px-5"
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="mb-2 text-2xl font-bold md:mb-3">
              Learn{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1">
                -&gt;
              </span>
            </h2>
            <p className="opacity-60">
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            className="group rounded-md border border-slate-100 px-10 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 md:px-5"
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="mb-2 text-2xl font-bold md:mb-3">
              Templates{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1">
                -&gt;
              </span>
            </h2>
            <p className="opacity-60">
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            className="group rounded-md border border-slate-100 px-10 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 md:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="mb-2 text-2xl font-bold md:mb-3">
              Deploy{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1">
                -&gt;
              </span>
            </h2>
            <p className="opacity-60">
              Instantly deploy your Next.js site to a shareable URL with&nbsp;Vercel.
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
