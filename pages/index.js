import Head from 'next/head'
import { DTPageHeader, DTButton, DTDrawer, DTEmpty } from 'ui-antd-wrapper'; 
import { useState } from 'react';

export default function Home() {

  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const loaderIllusion = () => {
    if(!visible) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
    setVisible(!visible);
  }

  return (
    <>
    <div className="container">
      <Head>
        <title>NPM Module Publish Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DTPageHeader title="AntD Wrapper Example" subTitle="This is the subtitle" />

      <main>
        <div>
          <DTButton 
            label="Click to open Drawer"
            onClick={loaderIllusion}
            type="primary"
            icon={{name : 'PlusOutlined'}}
          />
        </div>
      </main>
    </div>
    <DTDrawer
      title="Hello World"
      visible={visible}
      onClose={() => setVisible(false)}
      placement="left"
      loading={loading}
    >
      <DTEmpty description="Hello World" />
    </DTDrawer>
    </>
  )
}
