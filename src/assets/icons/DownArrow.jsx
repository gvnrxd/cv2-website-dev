export default function DownArrow({ color, size, ...props }) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height={size}
        width={size}
        viewBox="0 -960 960 960"
        fill={color}
      >
        <path d="M480-80 200-360l56-56 184 183v-647h80v647l184-184 56 57L480-80Z" />
      </svg>
    </>
  );
}
