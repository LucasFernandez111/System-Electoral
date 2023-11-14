export default function Voted({ text }) {
  return (
    <div className="justify-center flex mt-5">
      <div
        class="bg-red-100 border border-red-400 text-red-700 px-4 py-3  rounded absolute"
        role="alert"
      >
        <strong class="font-bold">{text}</strong>
      </div>
    </div>
  );
}
