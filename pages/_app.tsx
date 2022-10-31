import Head from 'next/head';
// 全局样式在_app.js 引入
import '../styles/globals.scss';
import type { AppProps } from 'next/app';

/**
 * 所有页面的根组件,可以在此定义app所有页面的共有部分
 * 页面切换时 APP 不会销毁，APP 里面的组件会销毁
 * 可用App 保存全局状态
 * @returns The component that is being rendered.
 */
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <h1>all have</h1>
      <Head>
        <title>我的博客--ttttth</title>
        <meta name="viewport" content="width=device-width,initial"></meta>
      </Head>
      <Component {...pageProps} />
    </>

  );
}

export default MyApp;
