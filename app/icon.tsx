import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const size = {
  width: 35,
  height: 35,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <svg width="35" height="35">
        <path
          fill="#ffffff"
          d="M 37.5 273.164062 L 114.636719 64.320312 L 187.5 91.230469 L 110.367188 300.074219 Z M 37.5 273.164062 "
        />

        <path
          fill="#ffffff"
          d="M 264.585938 300.082031 L 187.5 91.222656 L 260.410156 64.3125 L 337.5 273.171875 Z M 264.585938 300.082031 "
        />
      </svg>
    ),
    {
      ...size,
    }
  );
}
