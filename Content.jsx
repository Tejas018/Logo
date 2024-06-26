import Head from 'next/head'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>Your Website Name</title>
        <meta name="description" content="Generated by Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Your Website Name</h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Sign Out
        </button>
      </header>

      <main className="flex flex-wrap justify-center mt-10">
        <section className="w-full md:w-1/3 p-4 m-2 bg-gray-100 rounded-lg shadow-md">
          <h3 className="text-lg font-bold mb-2">Popular Topics</h3>
          <ul>
            <li className="flex justify-between items-center py-2 hover:bg-gray-200">
              <span>Introduction to Rocket Science</span>
              <button className="text-blue-500 font-bold">READ</button>
            </li>
            <li className="flex justify-between items-center py-2 hover:bg-gray-200">
              <span>Astro Physics</span>
              <button className="text-blue-500 font-bold">READ</button>
            </li>
            <li className="flex justify-between items-center py-2 hover:bg-gray-200">
              <span>Artificial Intelligence</span>
              <button className="text-blue-500 font-bold">READ</button>
            </li>
          </ul>
        </section>

        <section className="w-full md:w-1/3 p-4 m-2 bg-gray-100 rounded-lg shadow-md">
          <h3 className="text-lg font-bold mb-2">Science</h3>
          <p className="text-gray-700">
            Covers fundamentals, design, construction, operation and programming of robots
          </p>
          <button className="text-blue-500 font-bold mt-4">READ</button>
        </section>
      </main>
    </div>
  )
}