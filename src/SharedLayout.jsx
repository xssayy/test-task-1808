import { Suspense } from "react";

const SharedLayout = ({ children }) => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
    </div>
  );
};

export default SharedLayout;
