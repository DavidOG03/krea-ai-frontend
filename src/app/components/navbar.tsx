// import Image from "next/image";
// import kreaLogo from "../../../public/images/krea-logo-black.png";
import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <header className="flex items-center w-full justify-between fixed top-2 right-0 left-0 z-81 px-4">
      <Link href="/">
        <svg
          aria-label="Krea Logo"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className="krea-logo"
        >
          <path
            d="M8.34 1.266c1.766-.124 3.324 1.105 3.551 2.802.216 1.612-.887 3.171-2.545 3.536-.415.092-.877.066-1.317.122a4.63 4.63 0 0 0-2.748 1.34l-.008.004-.01-.001-.006-.005-.003-.009q0-.009.005-.016a.04.04 0 0 0 .007-.022 438 438 0 0 1-.01-4.541c.003-1.68 1.33-3.086 3.085-3.21"
            className="krea-logo"
          ></path>
          <path
            d="M8.526 15.305c-2.247-.018-3.858-2.23-3.076-4.3a3.31 3.31 0 0 1 2.757-2.11c.384-.04.845-.03 1.215-.098 1.9-.353 3.368-1.806 3.665-3.657.066-.41.031-.9.128-1.335.449-2.016 2.759-3.147 4.699-2.236 1.011.476 1.69 1.374 1.857 2.447q.051.33.034.818c-.22 5.842-5.21 10.519-11.279 10.47m2.831.93a.04.04 0 0 1-.021-.02l-.001-.006.002-.006q0-.003.003-.004l.006-.003q3.458-.792 5.992-3.185.045-.042.083.007c.27.357.554.74.78 1.106a10.6 10.6 0 0 1 1.585 4.89q.037.53.023.819c-.084 1.705-1.51 3.08-3.31 3.09-1.592.01-2.992-1.077-3.294-2.597-.072-.36-.05-.858-.11-1.238q-.282-1.755-1.715-2.84zm-3.369 6.64c-1.353-.235-2.441-1.286-2.684-2.593a5 5 0 0 1-.05-.817V15.14q0-.021.016-.007c.884.786 1.814 1.266 3.028 1.346l.326.01c1.581.051 2.92 1.087 3.229 2.592.457 2.225-1.557 4.195-3.865 3.793"
            className="krea-logo"
          ></path>
        </svg>
      </Link>
      <nav
        className="absolute top-0 left-1/2 -translate-x-1/2 bg-primary/10 dark:bg-primary/85 flex w-fit origin-center transform justify-center rounded-2xl backdrop-blur-2xl transition-[transform,opacity,scale,translate,background-color] select-none
    duration-[500ms] ease-[cubic-bezier(0,1,.35,1)]"
      >
        <ul className="m-0 flex list-none p-0">
          <li>
            <Link
              href="/"
              aria-label="go to homepage"
              aria-current="page"
              className="group relative my-1.5 ml-1.5 block h-10 w-13 leading-none transition-colors duration-100 ease-out text-black"
            >
              <svg
                width="18"
                height="18"
                className="absolute inset-0 z-20 m-auto"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 11.7354C2 10.4141 2 9.75338 2.18958 9.15972C2.35736 8.63437 2.63195 8.14939 2.99611 7.73524C3.40763 7.26724 3.97416 6.92732 5.10723 6.24748L8.70722 4.08748C9.90443 3.36916 10.503 3.01 11.142 2.86967C11.7073 2.74555 12.2927 2.74555 12.858 2.86967C13.497 3.01 14.0956 3.36916 15.2928 4.08748L18.8928 6.24748C20.0258 6.92732 20.5924 7.26724 21.0039 7.73524C21.3681 8.14939 21.6426 8.63437 21.8104 9.15972C22 9.75338 22 10.4141 22 11.7354V18.9118C22 20.0319 22 20.592 21.782 21.0198C21.5903 21.3961 21.2843 21.7021 20.908 21.8938C20.4802 22.1118 19.9201 22.1118 18.8 22.1118H18.2C17.0799 22.1118 16.5198 22.1118 16.092 21.8938C15.7157 21.7021 15.4097 21.3961 15.218 21.0198C15 20.592 15 20.0319 15 18.9118V15.7118C15 15.1518 15 14.8717 14.891 14.6578C14.7951 14.4697 14.6422 14.3167 14.454 14.2208C14.2401 14.1118 13.9601 14.1118 13.4 14.1118H10.6C10.0399 14.1118 9.75992 14.1118 9.54601 14.2208C9.35785 14.3167 9.20487 14.4697 9.10899 14.6578C9 14.8717 9 15.1518 9 15.7118V18.9118C9 20.0319 9 20.592 8.78201 21.0198C8.59027 21.3961 8.28431 21.7021 7.90798 21.8938C7.48016 22.1118 6.9201 22.1118 5.8 22.1118H5.2C4.0799 22.1118 3.51984 22.1118 3.09202 21.8938C2.71569 21.7021 2.40973 21.3961 2.21799 21.0198C2 20.592 2 20.0319 2 18.9118V11.7354Z"
                  fill="currentColor"
                ></path>
              </svg>
            </Link>
          </li>
          <li>
            <Link
              href="/"
              aria-label="Open Image"
              className="group relative my-1.5  block h-10 w-13 leading-none transition-colors duration-100 ease-out text-black dark:text-white "
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 z-20 m-auto"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.4763 9.85043C10.4763 10.8104 9.69763 11.589 8.73768 11.589C7.77772 11.589 7 10.8104 7 9.85043C7 8.89049 7.77772 8.11182 8.73768 8.11182C9.69763 8.11182 10.4754 8.88955 10.4763 9.84856V9.85043Z"
                  fill="currentColor"
                ></path>
                <rect
                  x="2.75"
                  y="3.86182"
                  width="18.5"
                  height="16.5"
                  rx="3.25"
                  stroke="currentColor"
                  strokeWidth="1.5"
                ></rect>
                <path
                  d="M15.758 13.1118C17.5271 13.1118 19.1544 14.6938 20 15.4766V19.1118H4C4 19.1118 5.29914 17.0464 6.6586 16.0349C8.01806 15.0235 9.56678 16.6015 11.2673 16.6015C12.9687 16.6015 13.9898 13.1118 15.758 13.1118Z"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </Link>
          </li>
          <li>
            <Link
              href="/"
              aria-label="Open Video"
              className="group relative my-1.5  block h-10 w-13 leading-none transition-colors duration-100 ease-out text-black dark:text-white "
            >
              <svg
                width="18"
                height="18"
                className="absolute inset-0 z-20 m-auto"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22.263 7.17399C21.637 6.41199 20.506 6.30099 19.743 6.92499L18.5167 7.92894C18.2593 8.13966 18.1409 8.46318 18.1571 8.79542C18.1589 8.83351 18.16 8.872 18.16 8.91099V15.312C18.16 15.3533 18.1588 15.3941 18.1568 15.4344C18.14 15.7656 18.2584 16.0881 18.5146 16.2987L19.729 17.297C20.045 17.558 20.448 17.701 20.863 17.701C21.849 17.701 22.654 16.899 22.657 15.912L22.669 8.31399C22.67 7.89899 22.527 7.49299 22.263 7.17399Z"
                  fill="currentColor"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.6444 5.11182H5.68203C3.08003 5.11182 1.33203 6.93982 1.33203 9.66182V15.0618C1.33203 17.7838 3.08003 19.6118 5.68203 19.6118H12.6434C15.2474 19.6118 16.9964 17.7838 16.9964 15.0618V9.66182C16.9964 6.93982 15.2474 5.11182 12.6444 5.11182Z"
                  fill="currentColor"
                ></path>
                <rect
                  x="1"
                  y="5.11182"
                  width="16"
                  height="15"
                  rx="4"
                  fill="currentColor"
                ></rect>
              </svg>
            </Link>
          </li>
          <li>
            <Link
              href="/"
              aria-label="Open Enhancer"
              className="group relative my-1.5  block h-10 w-13 leading-none transition-colors duration-100 ease-out text-black dark:text-white "
            >
              <svg
                width="18"
                height="18"
                className="absolute inset-0 z-20 m-auto"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.49935 13.0083C4.34395 13.5194 3.94455 13.9195 3.43425 14.075C3.94455 14.2306 4.34395 14.6306 4.49935 15.1417C4.65465 14.6306 5.05405 14.2306 5.56445 14.075C5.05405 13.9195 4.65465 13.5194 4.49935 13.0083Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M16.3704 5.57373C16.215 6.08483 15.8156 6.48493 15.3053 6.64043C15.8156 6.79603 16.215 7.19603 16.3704 7.70713C16.5257 7.19603 16.9251 6.79603 17.4355 6.64043C16.9251 6.48493 16.5257 6.08483 16.3704 5.57373Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M7.82105 18.4485H7.83105"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M12.8125 3.69873H12.8025"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <rect
                  x="3.3868"
                  y="5.14091"
                  width="2.5"
                  height="22.0199"
                  rx="1.25"
                  transform="rotate(-44.5361 3.3868 5.14091)"
                  stroke="currentColor"
                  strokeWidth="1.5"
                ></rect>
                <path
                  d="M8.4043 11.3093L11.2555 8.50389L20.2713 17.6668C21.046 18.4542 21.0357 19.7204 20.2484 20.4951C19.461 21.2698 18.1947 21.2596 17.42 20.4722L8.4043 11.3093Z"
                  fill="currentColor"
                ></path>
              </svg>
            </Link>
          </li>
          <li>
            <Link
              href="/"
              aria-label="Open realtime"
              className="group relative my-1.5 block h-10 w-13 leading-none transition-colors duration-100 ease-out text-black dark:text-white "
            >
              <svg
                width="18"
                height="18"
                className="absolute inset-0 z-20 m-auto"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.9472 14.4612C14.6244 14.8306 14.4629 15.0153 14.2819 15.1777C14.121 15.3219 13.9487 15.4529 13.7667 15.5693C13.5618 15.7004 13.3384 15.8077 12.8914 16.0223C11.8174 16.538 11.2804 16.7959 10.9271 16.705C10.6205 16.626 10.3693 16.4065 10.25 16.1132C10.1126 15.7753 10.2963 15.2086 10.6635 14.0752C10.8164 13.6035 10.8928 13.3677 10.9952 13.1471C11.0863 12.9511 11.193 12.7629 11.3144 12.5842C11.4511 12.383 11.6125 12.1983 11.9354 11.8289L17.0023 6.03138C17.076 5.94704 17.1129 5.90487 17.1574 5.88701C17.1966 5.87129 17.2398 5.86839 17.2807 5.87871C17.3273 5.89045 17.3695 5.92731 17.4538 6.00102L19.9838 8.21213C20.0681 8.28584 20.1103 8.3227 20.1281 8.36727C20.1438 8.40647 20.1467 8.44964 20.1364 8.4906C20.1247 8.53715 20.0878 8.57932 20.0141 8.66366L14.9472 14.4612Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M20.8883 7.65066C20.8146 7.73499 20.7778 7.77716 20.7332 7.79503C20.694 7.81075 20.6508 7.81365 20.6099 7.80333C20.5633 7.79159 20.5211 7.75473 20.4368 7.68102L17.9096 5.47231C17.8253 5.3986 17.7831 5.36175 17.7652 5.31718C17.7495 5.27798 17.7466 5.23481 17.7569 5.19385C17.7687 5.14729 17.8055 5.10512 17.8792 5.02079L18.3305 4.50446C18.6354 4.15563 18.7878 3.98121 18.9511 3.87147C19.3968 3.57199 19.9685 3.53354 20.4502 3.77066C20.6267 3.85755 20.8012 4.00999 21.15 4.31486C21.4988 4.61972 21.6732 4.77216 21.783 4.93546C22.0824 5.3811 22.1209 5.95283 21.8838 6.43456C21.7969 6.61108 21.6444 6.7855 21.3396 7.13432L20.8883 7.65066Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M9.5 18C9.5 18 7.2314 20.6818 6 20C4.7686 19.3182 8.43957 14.8136 8.43957 13.0357C8.43957 12.0802 5.54026 16.2053 3.75331 16.7185C0.87539 17.5452 7.17108 5 7.17108 5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </Link>
          </li>
          <li>
            <Link
              href="/"
              aria-label="Open Edit"
              className="group relative my-1.5  block h-10 w-13 leading-none transition-colors duration-100 ease-out text-black dark:text-white "
            >
              <svg
                width="18"
                height="18"
                className="absolute inset-0 z-20 m-auto"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2.854L12 5.51603"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                ></path>
                <circle
                  cx="12.0001"
                  cy="8.17831"
                  r="2.12118"
                  stroke="currentColor"
                  strokeWidth="1.5"
                ></circle>
                <path
                  d="M10.4869 10.1001L7.45996 21.4302"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                ></path>
                <path
                  d="M17.2646 21.2366C17.3715 21.6368 17.1338 22.0479 16.7336 22.1548C16.3334 22.2617 15.9224 22.0239 15.8155 21.6238L17.2646 21.2366ZM14.2377 9.90652L17.2646 21.2366L15.8155 21.6238L12.7885 10.2937L14.2377 9.90652Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M6.42188 16.1118C6.42188 16.1118 7.91228 17.3606 12.0006 17.3606C16.0889 17.3606 17.5793 16.1118 17.5793 16.1118"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                ></path>
              </svg>
            </Link>
          </li>
          <li>
            <Link
              href="/"
              aria-label="Open Assets"
              className="group relative my-1.5  block h-10 w-13 leading-none transition-colors duration-100 ease-out text-black dark:text-white mr-1.5"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="absolute inset-0 z-20 m-auto"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 5C3 4.45 3.45 4 4 4H9.17C9.58 4 9.95 4.21 10.14 4.55L10.86 5.89C11.05 6.23 11.42 6.44 11.83 6.44H20C20.55 6.44 21 6.89 21 7.44V11C21 11.55 20.55 12 20 12H4C3.45 12 3 11.55 3 11V5Z"></path>
                <rect x="3" y="7" width="18" height="12" rx="1"></rect>
                <path
                  d="M3.15 18.5C3.08 18.15 3.08 17.65 3.08 17H20.92C20.92 17.65 20.92 18.15 20.85 18.5H3.15Z"
                  opacity="0.3"
                ></path>
                <path
                  d="M5 20H19C19.8 20 20.2 20 20.5 19.8C20.7 19.7 20.9 19.5 21 19.2C21.05 19.1 21.08 19 21.1 18.5H2.9C2.92 19 2.95 19.1 3 19.2C3.1 19.5 3.3 19.7 3.5 19.8C3.8 20 4.2 20 5 20Z"
                  opacity="0.5"
                ></path>
              </svg>{" "}
            </Link>
          </li>
        </ul>
      </nav>
      <menu className="text-primary-400 dark:text-primary-500 mt-1 flex w-fit items-center justify-center gap-2 pr-5 text-xs font-medium select-none">
        <li>
          <button className="hover:bg-primary/20 dark:bg-primary/80 bg-primary/10 dark:hover:bg-primary/70 flex h-auto w-auto p-1.5 gap-2 items-center justify-center rounded-lg text-black/70 backdrop-blur-lg transition-colors duration-150 ease-[cubic-bezier(.33,0,.2,1)] hover:text-black dark:text-white/80 dark:hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18px"
              height="18px"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M17.5 11c-2.121 0-3.182 0-3.841-.659S13 8.621 13 6.5s0-3.182.659-3.841S15.379 2 17.5 2s3.182 0 3.841.659S22 4.379 22 6.5s0 3.182-.659 3.841S19.621 11 17.5 11m-1.455-2.784c-.765-.67-1.545-1.564-1.545-2.418c0-1.773 1.65-2.435 3-1.065c1.35-1.37 3-.708 3 1.065c0 .854-.78 1.747-1.545 2.418c-.596.523-.894.784-1.455.784c-.56 0-.859-.261-1.455-.784"
                clipRule="evenodd"
              ></path>
              <path
                fill="currentColor"
                d="M21.904 16.441c.083-1.024.094-2.274.096-3.743a.697.697 0 1 0-1.396 0c-.001 1.477-.012 2.658-.091 3.63c-.084 1.032-.242 1.763-.507 2.32l-2.633-2.37a2.79 2.79 0 0 0-3.471-.21l-.277.196a1.86 1.86 0 0 1-2.386-.207l-3.99-3.99a2.14 2.14 0 0 0-2.922-.097l-.931.814V12c0-2.212 0-3.801.163-5.01c.16-1.19.464-1.907.994-2.437S5.8 3.72 6.99 3.56c1.079-.145 2.458-.161 4.313-.163a.699.699 0 0 0 0-1.396c-1.829.002-3.33.02-4.499.177c-1.343.18-2.404.557-3.236 1.39s-1.21 1.893-1.39 3.236C2 8.116 2 9.8 2 11.947V12q0 .736.002 1.396c.007 1.729.044 3.121.243 4.24c.203 1.14.584 2.058 1.322 2.796c.832.833 1.893 1.21 3.236 1.39C8.116 22 9.8 22 11.947 22h.106c2.148 0 3.83 0 5.144-.177c1.344-.18 2.404-.557 3.236-1.39a4.2 4.2 0 0 0 .73-.983c.445-.825.644-1.82.74-3.009"
              ></path>
            </svg>
            Gallery
          </button>
        </li>
        <li>
          <button className="hover:bg-primary/20 dark:bg-primary/80 bg-primary/10 dark:hover:bg-primary/70 flex h-auto w-auto p-1.5 gap-2 items-center justify-center rounded-lg text-black/70 backdrop-blur-lg transition-colors duration-150 ease-[cubic-bezier(.33,0,.2,1)] hover:text-black dark:text-white/80 dark:hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18px"
              height="18px"
              viewBox="0 0 24 24"
            >
              <g fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path d="M17 11.805c0-.346 0-.519.052-.673c.151-.448.55-.621.95-.803c.448-.205.672-.307.895-.325c.252-.02.505.034.721.155c.286.16.486.466.69.714c.943 1.146 1.415 1.719 1.587 2.35c.14.51.14 1.044 0 1.553c-.251.922-1.046 1.694-1.635 2.41c-.301.365-.452.548-.642.655a1.27 1.27 0 0 1-.721.155c-.223-.018-.447-.12-.896-.325c-.4-.182-.798-.355-.949-.803c-.052-.154-.052-.327-.052-.672zm-10 0c0-.436-.012-.827-.364-1.133c-.128-.111-.298-.188-.637-.343c-.449-.204-.673-.307-.896-.325c-.667-.054-1.026.402-1.41.87c-.944 1.145-1.416 1.718-1.589 2.35a2.94 2.94 0 0 0 0 1.553c.252.921 1.048 1.694 1.636 2.409c.371.45.726.861 1.363.81c.223-.018.447-.12.896-.325c.34-.154.509-.232.637-.343c.352-.306.364-.697.364-1.132z"></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20 10.5V9c0-3.866-3.582-7-8-7S4 5.134 4 9v1.5m16 7c0 4.5-4 4.5-8 4.5"
                ></path>
              </g>
            </svg>
            Support
          </button>
        </li>
        <li>
          <button className="gap-2 hover:bg-primary/20 dark:bg-primary/80 bg-primary/10 dark:hover:bg-primary/70 flex h-auto w-auto p-1.5 items-center justify-center rounded-lg text-black/70 backdrop-blur-lg transition-colors duration-150 ease-[cubic-bezier(.33,0,.2,1)] hover:text-black dark:text-white/80 dark:hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18px"
              height="18px"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M21.161 16.656a2.26 2.26 0 0 1-.41 1.088a2.27 2.27 0 0 1-1.89 1h-2.94a4.4 4.4 0 0 1-.23.788a4 4 0 0 1-2.18 2.178c-.495.2-1.026.298-1.56.29h-.08a3.9 3.9 0 0 1-1.44-.29a3.75 3.75 0 0 1-1.32-.87a3.85 3.85 0 0 1-.87-1.308a4.4 4.4 0 0 1-.23-.789h-2.82a2.24 2.24 0 0 1-1.94-.849a2.78 2.78 0 0 1-.26-2.367a6.7 6.7 0 0 1 .88-1.618a3.83 3.83 0 0 0 .82-1.768c0-2.886 0-3.865 1.58-5.743a5.7 5.7 0 0 1 1.9-1.478l.78-.38a.4.4 0 0 0 .1-.09a.3.3 0 0 0 .06-.13a3 3 0 0 1 1.905-2.142a3 3 0 0 1 2.835.434a2.72 2.72 0 0 1 1 1.758v.1a.35.35 0 0 0 .11.1l.72.35c.73.35 1.378.85 1.9 1.468c1.58 1.888 1.58 2.867 1.58 5.753c.134.69.44 1.336.89 1.878c.36.481.652 1.009.87 1.568c.164.332.247.698.24 1.069"
              ></path>
            </svg>
          </button>
        </li>
        <li>
          <button
            aria-label="theme"
            className="hover:bg-primary/20 dark:bg-primary/80 bg-primary/10 dark:hover:bg-primary/70 flex h-[30px] w-[30px] items-center justify-center rounded-lg text-black/70 backdrop-blur-lg transition-colors duration-150 ease-[cubic-bezier(.33,0,.2,1)] hover:text-black dark:text-white/80 dark:hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
            >
              <title>sun_fill</title>
              <g id="sun_fill" fill="none">
                <path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z"></path>
                <path
                  fill="currentColor"
                  d="M12 19a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1m6.364-2.05.707.707a1 1 0 0 1-1.414 1.414l-.707-.707a1 1 0 0 1 1.414-1.414m-12.728 0a1 1 0 0 1 1.497 1.32l-.083.094-.707.707a1 1 0 0 1-1.497-1.32l.083-.094zM12 6a6 6 0 1 1 0 12 6 6 0 0 1 0-12m-8 5a1 1 0 0 1 .117 1.993L4 13H3a1 1 0 0 1-.117-1.993L3 11zm17 0a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2zM4.929 4.929a1 1 0 0 1 1.32-.083l.094.083.707.707a1 1 0 0 1-1.32 1.497l-.094-.083-.707-.707a1 1 0 0 1 0-1.414m14.142 0a1 1 0 0 1 0 1.414l-.707.707a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0M12 2a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1"
                ></path>
              </g>
            </svg>
          </button>
        </li>
        <li>
          <span
            aria-label="theme"
            className="rounded-full inline-block h-[30px] w-[30px] bg-radial-[at_50%_50%] from-[#ff5cb4] via-[#ff5cb4] to-sky-200"
          ></span>
        </li>
      </menu>
    </header>
  );
};

export default Navbar;
