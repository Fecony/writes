import Link from 'next/link';

const IndexPage = () => (
  <>
    <h1>Hello Writes!</h1>
    <p>
      <Link href='/about'>
        <a>About</a>
      </Link>
    </p>
  </>
);

export default IndexPage;
