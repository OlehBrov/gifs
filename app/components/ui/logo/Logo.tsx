import Link from "next/link";

export const Logo = () => {
  return (
    <Link
      href="/"
      className=" flex items-center justify-center hover:scale-110 transition-transform duration-300"
    >
      <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.8333 2.5H4.16667C3.24619 2.5 2.5 3.24619 2.5 4.16667V15.8333C2.5 16.7538 3.24619 17.5 4.16667 17.5H15.8333C16.7538 17.5 17.5 16.7538 17.5 15.8333V4.16667C17.5 3.24619 16.7538 2.5 15.8333 2.5Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.49998 9.16671C8.42045 9.16671 9.16665 8.42052 9.16665 7.50004C9.16665 6.57957 8.42045 5.83337 7.49998 5.83337C6.57951 5.83337 5.83331 6.57957 5.83331 7.50004C5.83331 8.42052 6.57951 9.16671 7.49998 9.16671Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.5 12.5L14.9283 9.92828C14.6158 9.61583 14.1919 9.44031 13.75 9.44031C13.3081 9.44031 12.8842 9.61583 12.5717 9.92828L5 17.5"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <p className="ml-3 text-lg font-semibold text-black">Find A Gif</p>
    </Link>
  );
};
