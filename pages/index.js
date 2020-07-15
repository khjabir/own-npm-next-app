import Head from 'next/head'
import { DTButton } from 'ui-antd-wrapper';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>NPM Module Publish Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          <DTButton 
            label="Hello World"
            onClick={() => console.log('hello')}
            type="primary"
            icon={{name : 'PlusOutlined'}}
          />
        </div>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
