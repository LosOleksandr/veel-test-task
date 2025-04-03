import Image from 'next/image';
import React from 'react';

const Loading = () => {
  return (
    <div className="grid min-h-dvh place-content-center">
      <Image src="/images/todo.png" alt="loading" width={192} height={192} />
    </div>
  );
};

export default Loading;
