"use client";
import { Toaster } from "react-hot-toast";

const Providers = ({ children }) => {
  return (
    <>
      {children}
      <Toaster />
    </>
  );
};
export default Providers;
