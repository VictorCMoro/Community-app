export default function LabelInput({ htmlFor, type, id, placeholder, label, value, onChange }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="flex place-content-start mb-2 m-2 px-2">
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-72 px-2 py-2 border-none rounded bg-stone-950 mb-3"
      />
    </div>
  );
}
