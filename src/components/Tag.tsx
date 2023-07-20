import { PropsWithChildren } from 'react';

const Tag = ({ children }: PropsWithChildren) => {
  return (
    <div
      className={
        'px-6 py-4 rounded-full bg-[#f723fb] text-white text-3xl font-extrabold'
      }
    >
      {children}
    </div>
  );
};

export default Tag;
