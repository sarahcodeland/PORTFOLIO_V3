type Props = {
  children: React.ReactNode;
};

export default function Template({ children }: Props) {
  return (
    <div className='motion-preset-fade min-h-screen px-4 py-20 motion-duration-1500'>
      {children}
    </div>
  );
}
