import { ColorRing } from 'react-loader-spinner';

export const Loader = () => (
  <ColorRing
    visible={true}
    height="80"
    width="80"
    ariaLabel="blocks-loading"
    wrapperStyle={{}}
    wrapperClass="blocks-wrapper"
    colors={['#19af64', '#9dddf8', '#ce5fef', '#51E5FF', '#429EA6']}
  />
);
