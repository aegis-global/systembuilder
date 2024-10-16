import type { MetaFunction } from '@remix-run/node';
import SystemDescription from '~/components/SystemDescription';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

const Index: React.FC = () => {
  return (
    <div>
      <h1>Welcome to SystemBuilder</h1>
      <SystemDescription />
    </div>
  );
};

export default Index;
