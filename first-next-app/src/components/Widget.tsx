import Head from 'next/head';
import { ReactElement, useState } from 'react';

interface WidgetProps {
  pageName: string;
}

const Widget = ({ pageName }: WidgetProps): ReactElement => {
  const [active, setActive] = useState(false);

  if (active) {
    return (
      <>
        <Head>
          <title> {pageName} </title>
        </Head>
        <div>
          <button onClick={() => setActive(!active)}>Original title</button>
        </div>
      </>
    );
  }

  return (
    <>
      <button onClick={() => setActive(!active)}>page title</button>
    </>
  );
};

export default Widget;
