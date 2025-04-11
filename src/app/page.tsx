import { Breadcrumb } from './components/Breadcrumb';
import { Header } from './components/Header';

export default function Home() {
  const breadcrumbLinks = [
    {
      label: 'Home',
      href: '/',
      title: 'Home',
    },
  ];

  return (
    <div>
      <Header />
      <Breadcrumb links={breadcrumbLinks} />
    </div>
  );
}
