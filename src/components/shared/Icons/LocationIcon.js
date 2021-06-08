import React from "react";

export const LocationIconFill = ({ val }) => {
  return (
    <div className="border-b-4 border-blue-500">
      <div className="w-20 flex justify-center">
        <svg
          className="fill-current text-cogAi-blue cursor-pointer w-8 h-8 mb-5"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.99992 8.66142C7.99992 7.55898 8.89569 6.66317 9.99992 6.66317C11.1041 6.66317 11.9999 7.55898 11.9999 8.66142C11.9999 9.76387 11.1041 10.6597 9.99992 10.6597C8.89571 10.6597 7.99992 9.76387 7.99992 8.66142Z"
            // fill="#2D9CDB"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.33325 8.66142C1.33325 3.87836 5.21481 0 9.99992 0C14.785 0 18.6666 3.87836 18.6666 8.66142C18.6666 12.2268 16.8822 15.0514 14.9712 16.9612C14.0135 17.9183 13.0102 18.6604 12.1509 19.1668C11.7215 19.4199 11.3201 19.6188 10.9712 19.7565C10.6418 19.8865 10.2961 19.9878 9.99992 19.9878C9.70377 19.9878 9.358 19.8865 9.0286 19.7565C8.67969 19.6188 8.27835 19.4199 7.84892 19.1668C6.98962 18.6604 5.98637 17.9183 5.02867 16.9612C3.11764 15.0514 1.33325 12.2268 1.33325 8.66142ZM9.99992 5.32983C8.16014 5.32983 6.66658 6.82177 6.66658 8.66142C6.66658 10.501 8.16013 11.993 9.99992 11.993C11.8397 11.993 13.3333 10.501 13.3333 8.66142C13.3333 6.82177 11.8397 5.32983 9.99992 5.32983Z"
            // fill="#2D9CDB"
          />
        </svg>
      </div>
    </div>
  );
};

export const LocationIconMinimal = () => {
  return (
    <div className="w-20 flex justify-center">
      <svg
        className="cursor-pointer w-8 h-8 mb-5"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10 11.3264C11.472 11.3264 12.6667 10.1324 12.6667 8.66141C12.6667 7.19037 11.472 5.99649 10 5.99649C8.528 5.99649 7.33333 7.19037 7.33333 8.66141C7.33333 10.1324 8.528 11.3264 10 11.3264Z"
            stroke="#E0E0E0"
          stroke-linecap="square"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18 8.66141C18 15.3237 11.3333 19.3212 10 19.3212C8.66667 19.3212 2 15.3237 2 8.66141C2 4.24695 5.58267 0.666656 10 0.666656C14.4173 0.666656 18 4.24695 18 8.66141Z"
            stroke="#E0E0E0"
          stroke-linecap="square"
        />
      </svg>
    </div>
  );
};
