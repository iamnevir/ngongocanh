"use client";
import { useEyes } from "@/hooks/use-eyes";
import { cn } from "@/lib/utlis";
import { useState } from "react";
import SoundButton from "./sound-button";

const AnimateButton = ({
  text,
  onClick,
  className,
  classNameFill,
}: {
  text: string;
  onClick?: () => void;
  className?: string;
  classNameFill?: string;
}) => {
  const eyes = useEyes();
  const [isPlay, setIsPlay] = useState(false);
  return (
    <>
      <SoundButton isPlay={isPlay} url="/button-hover.mp3" />

      <div
        onMouseEnter={() => {
          setIsPlay(true);
          eyes.setClassName("-translate-x-3");
          eyes.onOpen();
        }}
        onMouseLeave={() => {
          setIsPlay(false);
          eyes.setClassName("");
          eyes.onClose();
        }}
        onClick={(e) => {
          e.stopPropagation();
          onClick ? onClick() : null;
        }}
        className={cn(
          " relative group grap hover:shadow-md bg-white flex bg-transparent space-x-2 justify-center items-center rounded-full  px-20 py-5 transition-all  duration-500 cursor-pointer",
          className
        )}
      >
        <div
          className={cn(
            " right-[50%] bottom-0 absolute group-hover:right-0 rounded-full w-0 h-0 group-hover:w-full group-hover:h-full group-hover:bg-black bg-rose-100 group-hover:absolute duration-300",
            classNameFill
          )}
        />

        <div
          className={cn(
            "text3d duration-500 relative cursor-pointer text-6xl "
          )}
        >
          <div className="flex items-center whitespace-nowrap gap-5 font-medium text-6xl duration-300 textShadow group-hover:-translate-y-[100%]">
            {text}
            <Butterfly color="black" />
          </div>
          <div className="flex items-center whitespace-nowrap gap-7 but origin-bottom absolute font-italic  text-rose-100 textShadowWhite opacity-0 duration-300  group-hover:opacity-100">
            {text}
            <Butterfly color="#FFE4E6" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimateButton;
const Butterfly = ({ color }: { color: "black" | "#FFE4E6" }) => {
  return (
    <svg
      fill={color}
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      width={50}
      height={50}
      viewBox="0 0 32 32"
    >
      <path d="M31.957,25.278c-0.095-0.678-0.308-1.334-0.624-1.937c0.007-0.042,0.016-0.078,0.021-0.122 c0.02-0.119,0.036-0.249,0.052-0.385c0.005-0.068,0.022-0.142,0.007-0.208c-0.019-0.066-0.06-0.127-0.074-0.196 c-0.167-0.544-0.406-1.174-0.782-1.808c-0.374-0.63-0.904-1.271-1.605-1.729l-0.27-0.162l-0.302-0.152l-0.245-0.104 c-0.133-0.052-0.191-0.065-0.29-0.101c-0.354-0.125-0.717-0.221-1.072-0.29c-0.354-0.07-0.705-0.116-1.04-0.131 c-0.27-0.02-0.523-0.011-0.77,0.004l0.036-0.047c0.09-0.128,0.161-0.252,0.242-0.378l0.236-0.377l0.131-0.251 c0.036-0.073,0.075-0.146,0.108-0.218c0.537-1.176,0.833-2.437,0.819-3.751c-0.014-0.655-0.109-1.335-0.402-1.995 c-0.271-0.658-0.83-1.289-1.549-1.599c-0.721-0.304-1.472-0.295-2.13-0.183c-0.666,0.117-1.281,0.332-1.854,0.598 c-0.58,0.257-1.117,0.568-1.646,0.887l-0.556,0.367c-0.145-1.229-0.397-2.45-0.801-3.638c-0.27-0.779-0.604-1.542-1.022-2.27 c-0.422-0.724-0.922-1.419-1.562-2.018c-0.638-0.588-1.416-1.112-2.382-1.294c-0.479-0.084-0.993-0.067-1.477,0.073 c-0.49,0.135-0.916,0.415-1.271,0.728C9.17,3.233,8.753,4.055,8.463,4.86C8.177,5.652,8.029,6.529,7.981,7.352 c-0.085,1.666,0.132,3.279,0.4,4.863c0.142,0.793,0.371,1.563,0.598,2.329c0.235,0.765,0.479,1.522,0.747,2.271 c0.234,0.67,0.483,1.332,0.742,1.989c-0.875-1.396-1.706-2.815-2.467-4.27C7.15,12.893,6.375,11.207,5.82,9.473L5.623,8.822 L5.456,8.167C5.36,7.729,5.274,7.292,5.228,6.856c-0.05-0.438-0.068-0.869-0.044-1.29c-0.002-0.214,0.053-0.41,0.073-0.617 c0.03-0.186,0.09-0.358,0.136-0.536l0.101-0.16c0.043-0.064,0.075-0.144,0.128-0.188l0.14-0.154 C5.81,3.859,5.874,3.848,5.92,3.804s0.09-0.086,0.139-0.122c0.047-0.039,0.094-0.091,0.158-0.113 c0.061-0.023,0.116-0.074,0.19-0.086C6.477,3.468,6.55,3.44,6.628,3.43l0.246-0.021l0.262,0.014c0.18,0.019,0.364,0.05,0.55,0.101 c0.185,0.05,0.37,0.113,0.558,0.183C8.429,3.78,8.616,3.86,8.794,3.958C8.546,3.633,8.26,3.323,7.919,3.065 c-0.17-0.133-0.355-0.25-0.554-0.359C7.264,2.657,7.158,2.607,7.051,2.562L6.705,2.459C6.586,2.431,6.457,2.423,6.329,2.407 c-0.128-0.021-0.263,0.004-0.398,0.01C5.793,2.42,5.662,2.462,5.527,2.503C5.39,2.54,5.255,2.584,5.148,2.673 C5.04,2.753,4.926,2.84,4.837,2.934L4.579,3.223C4.484,3.319,4.435,3.425,4.366,3.527L4.177,3.838l-0.024,0.04L4.141,3.922 C4.072,4.181,3.983,4.441,3.939,4.703c-0.031,0.259-0.093,0.524-0.093,0.78C3.815,6,3.839,6.51,3.896,7.007 C3.95,7.505,4.046,7.99,4.15,8.47l0.182,0.711l0.211,0.697c0.592,1.848,1.396,3.588,2.271,5.278 c0.884,1.688,1.849,3.321,2.868,4.919l0.309,0.473L9.79,20.252c-0.073-0.029-0.147-0.055-0.228-0.071 c-0.344-0.069-0.683-0.017-0.977,0.125c-1.234-2.035-5.455-4.615-6.688-4.535C1.44,15.8,1.102,15.954,0.893,16.226 c-0.357,0.465-0.22,1.152-0.175,1.379c0.039,0.194,0.149,0.357,0.318,0.47c0.315,0.21,0.782,0.21,1.114,0.141 c0.474-0.099,0.752-0.282,0.677-0.889c-0.024-0.194-0.127-0.35-0.296-0.446c-0.261-0.15-0.645-0.129-0.872-0.033l0.132,0.31 c0.132-0.058,0.402-0.083,0.573,0.015c0.077,0.045,0.119,0.107,0.13,0.198c0.045,0.354-0.021,0.438-0.412,0.519 c-0.254,0.055-0.631,0.062-0.861-0.092c-0.096-0.062-0.153-0.146-0.174-0.256c-0.038-0.188-0.153-0.766,0.111-1.11 c0.147-0.191,0.403-0.301,0.76-0.324c1.117-0.072,5.246,2.51,6.383,4.379c-0.024,0.02-0.048,0.037-0.07,0.057 c-2.023-0.827-6.75-1.674-7.749-0.727c-0.333,0.314-0.494,0.647-0.481,0.991c0.021,0.524,0.438,0.92,0.748,1.173 c0.093,0.074,0.197,0.125,0.309,0.146c0.076,0.016,0.155,0.021,0.236,0.011c0.377-0.042,0.736-0.34,0.946-0.604 c0.302-0.378,0.398-0.698-0.048-1.115c-0.143-0.135-0.321-0.188-0.512-0.154c-0.298,0.052-0.579,0.313-0.692,0.531l0.298,0.153 c0.065-0.127,0.26-0.322,0.451-0.355c0.088-0.016,0.159,0.007,0.227,0.069c0.261,0.244,0.263,0.35,0.015,0.664 c-0.161,0.201-0.446,0.449-0.721,0.479c-0.114,0.013-0.212-0.017-0.298-0.086c-0.15-0.122-0.606-0.49-0.623-0.925 c-0.01-0.242,0.116-0.489,0.375-0.735c0.787-0.745,5.18-0.07,7.277,0.747c-0.119,0.168-0.208,0.362-0.252,0.578 c-0.173,0.836,0.364,1.652,1.199,1.825c0.393,0.081,0.778,0.001,1.098-0.188l-0.009,0.009c0,0,1.367,1.853,2.875,3.896 c1.508,2.043,6.853,3.807,7.505,3.221c0.116-0.105-0.423-1.052-2.069-2.299c0.249,0.084,0.497,0.167,0.746,0.254 c0.803,0.256,1.604,0.516,2.415,0.758c0.817,0.221,1.616,0.477,2.457,0.668c0.836,0.181,1.694,0.42,2.519,0.517l0.623,0.095 l0.312,0.043l0.155,0.021l0.04,0.006l0.02,0.002l0.055,0.005l0.091,0.003c0.479,0.022,0.976-0.046,1.455-0.188 c0.479-0.148,0.95-0.382,1.343-0.716c0.396-0.33,0.714-0.743,0.941-1.189C31.964,27.222,32.074,26.22,31.957,25.278z M25.659,19.292c0.271,0.011,0.56,0.05,0.854,0.109c0.295,0.056,0.599,0.136,0.9,0.241l0.205,0.069l0.24,0.103l0.171,0.087 l0.186,0.112c0.439,0.287,0.807,0.701,1.096,1.152c-0.187-0.116-0.379-0.227-0.582-0.323c-0.391-0.188-0.863-0.362-1.332-0.446 c-0.468-0.104-0.934-0.117-1.393-0.121c-0.915,0.021-1.795,0.181-2.645,0.403c-0.47,0.125-0.929,0.272-1.383,0.434 c0.054-0.047,0.108-0.095,0.162-0.142c0.449-0.406,0.895-0.82,1.32-1.262c0.164-0.157,0.317-0.329,0.473-0.501 c0.081,0.018,0.169,0.038,0.257,0.06c-0.104-0.021-0.24-0.051,0.378,0.092c0.103-0.036,0.213-0.052,0.33-0.059 C25.132,19.284,25.388,19.273,25.659,19.292z M9.73,11.96c-0.144-0.755-0.285-1.515-0.347-2.275 C9.314,8.929,9.278,8.171,9.319,7.429c0.048-0.749,0.163-1.44,0.412-2.132c0.238-0.67,0.577-1.29,1.046-1.707 c0.459-0.426,1.024-0.584,1.618-0.479c0.598,0.107,1.191,0.479,1.702,0.953c0.515,0.479,0.948,1.076,1.317,1.71 c0.368,0.639,0.671,1.324,0.916,2.033c0.482,1.424,0.74,2.933,0.839,4.454l0.077,1.205l0.989-0.707l0.706-0.503l0.721-0.473 c0.487-0.294,0.98-0.58,1.488-0.803c0.504-0.237,1.023-0.411,1.527-0.5c0.503-0.087,0.99-0.07,1.373,0.092 c0.374,0.171,0.671,0.475,0.856,0.913c0.192,0.429,0.278,0.949,0.285,1.479c0.017,1.063-0.239,2.175-0.691,3.155 c-0.027,0.063-0.062,0.121-0.09,0.182l-0.046,0.09l-0.022,0.045l-0.013,0.023l-0.003,0.008l-0.227,0.357 c-0.08,0.123-0.157,0.258-0.238,0.371l-0.249,0.314l-0.244,0.316l-0.285,0.317c-0.191,0.212-0.374,0.429-0.585,0.629 c-0.4,0.413-0.825,0.809-1.256,1.2c-0.439,0.384-0.876,0.771-1.334,1.137c-0.905,0.743-1.843,1.455-2.798,2.143 c-0.541,0.39-1.089,0.771-1.642,1.146c-0.351,0.224-0.701,0.457-1.051,0.696c-0.003-0.004-0.012-0.011-0.012-0.011 s-1.134-0.854-1.115-0.874c0,0-0.147-0.103-0.337-0.232c-0.226-0.841-0.452-1.739-0.681-2.238 c-0.086-0.184-0.163-0.371-0.254-0.55l-0.045-0.139c-0.472-1.501-0.906-3.011-1.292-4.525c-0.195-0.757-0.364-1.52-0.524-2.281 L9.73,11.96z M10.569,22.486c0.087-0.146,0.157-0.305,0.193-0.479c0.017-0.077,0.019-0.154,0.021-0.229 c0.019,0.029,0.036,0.061,0.056,0.09c0.15,0.185,0.331,0.348,0.495,0.521c0.226,0.23,0.454,0.595,0.686,0.997 c-0.7-0.477-1.436-0.914-1.436-0.914L10.569,22.486z M30.313,27.508c-0.306,0.604-0.823,1.051-1.477,1.225 c-0.325,0.087-0.671,0.128-1.031,0.113l-1.211-0.068c-0.854-0.02-1.634-0.169-2.453-0.264c-0.812-0.104-1.638-0.281-2.459-0.42 c-0.819-0.163-1.637-0.343-2.456-0.519l-1.926-0.459c-0.337-0.232-1.066-0.735-1.712-1.188c0.202-0.134,0.406-0.268,0.606-0.402 c0.273-0.175,0.549-0.348,0.825-0.516c0.707-0.426,1.427-0.831,2.157-1.209c1.461-0.754,2.974-1.414,4.524-1.828 c0.772-0.203,1.558-0.343,2.32-0.359c0.378,0.007,0.758,0.017,1.111,0.097c0.358,0.064,0.68,0.182,1.045,0.355 c0.625,0.302,1.228,0.789,1.646,1.377c0.433,0.586,0.701,1.29,0.803,2.007C30.718,26.167,30.623,26.905,30.313,27.508z"></path>{" "}
      <path d="M19.98,17.135c-1.317-2.419-3.707,0.408-3.707,0.408s-0.446-4.466-2.828-3.796c-2.383,0.67,1.19,9.864,1.19,9.864 S21.3,19.553,19.98,17.135z"></path>{" "}
      <path d="M23.141,23.798c-2.438-0.671-6.159,2.121-6.159,2.121s4.058,1.675,5.808,1.415C24.538,27.074,25.58,24.467,23.141,23.798z "></path>{" "}
    </svg>
  );
};