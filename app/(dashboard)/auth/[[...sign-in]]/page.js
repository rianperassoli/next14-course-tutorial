import Link from "next/link";

const SignIn = ({ params }) => {
  console.log(params);
  return (
    <div>
      <h1 className="text-7xl">SignIn Page</h1>
      <Link href="/" className="text-2xl">
        home page
      </Link>
    </div>
  );
};

export default SignIn;
