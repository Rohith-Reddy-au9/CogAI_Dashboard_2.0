import React from "react";

export const AnalyticsIconFill = ({ val }) => {
  return (
    <div className="border-b-4 border-blue-500">
      <div className="w-20 flex justify-center">
        <svg
          className="fill-current text-cogAi-blue cursor-pointer w-8 h-8 mb-5"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8.66667 0.130432H8V12.2422H20V11.5694C20 5.25181 14.9259 0.130432 8.66667 0.130432Z" />
          <path d="M17.1014 13.588H6.66667V3.05601C2.8444 3.96731 0 7.43307 0 11.5694C0 16.4004 3.8802 20.3168 8.66667 20.3168C12.7648 20.3168 16.1985 17.4459 17.1014 13.588Z" />
        </svg>
      </div>
    </div>
  );
};

export const AnalyticsIconMinimal = () => {
  return (
    <div className="w-20 flex justify-center">
      <svg
        className="cursor-pointer w-10 h-10 mb-5"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d)">
          <path
            d="M12.6667 0.666656V0.166656C12.3905 0.166656 12.1667 0.390514 12.1667 0.666656L12.6667 0.666656ZM23.3334 11.3333V11.8333C23.6095 11.8333 23.8334 11.6095 23.8334 11.3333H23.3334ZM12.6667 11.3333H12.1667V11.8333H12.6667V11.3333ZM12.6667 19.8333C17.3611 19.8333 21.1667 16.0277 21.1667 11.3333H20.1667C20.1667 15.4755 16.8088 18.8333 12.6667 18.8333V19.8333ZM4.16669 11.3333C4.16669 16.0277 7.97227 19.8333 12.6667 19.8333V18.8333C8.52455 18.8333 5.16669 15.4755 5.16669 11.3333H4.16669ZM5.16669 11.3333C5.16669 7.19119 8.52455 3.83332 12.6667 3.83332V2.83332C7.97227 2.83332 4.16669 6.6389 4.16669 11.3333H5.16669ZM12.6667 1.16666C18.2816 1.16666 22.8334 5.71843 22.8334 11.3333H23.8334C23.8334 5.16614 18.8339 0.166656 12.6667 0.166656V1.16666ZM12.1667 0.666656V11.3333H13.1667V0.666656H12.1667ZM12.6667 11.8333H23.3334V10.8333H12.6667V11.8333Z"
            fill="#E0E0E0"
          />
        </g>
        <defs>
          <filter
            id="filter0_d"
            x="0"
            y="0"
            width="28"
            height="28"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

// className="fill-current text-cogAi-blue cursor-pointer w-8 h-8 mb-5"
