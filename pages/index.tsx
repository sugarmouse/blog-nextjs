import Image from 'next/image';
import { useEffect, useState } from 'react';
import png from 'assets/images/1.png';
import { GetServerSideProps, GetServerSidePropsContext, NextPage, NextPageContext } from 'next';
import { UAParser } from 'ua-parser-js';

type Props = {
  browser: {
    name: string;
    version: string;
    major: string;
  };
};

const Index: NextPage<Props> = (props) => {
  const { browser } = props;
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // 浏览器宽度之类的在请求时得不到的数据，可以在第一次渲染的时候拿到
    const windowWidth = document.documentElement.clientWidth;
    setWidth(windowWidth);
  }, []);

  return (
    <>
      <h2>Index page</h2>
      <h3>your browser is {browser.name}, version is {browser.version}</h3>
      <h4>your window width is {width}</h4>

      <Image src={png} alt="vercel logo pic" width={200} />
    </>
  );
};


export default Index;

// getServerSideProps 函数是在请求到了之后开始运行
export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const ua = context.req.headers['user-agent'];
  const result = new UAParser(ua).getBrowser();
  return {
    props: {
      browser: result
    }, // will be passed to the page component as props
  };
};
