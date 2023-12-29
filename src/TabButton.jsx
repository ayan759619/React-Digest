export default function TabButton({ children,isSelected, ...props }) {
  return (

    <li>
    <button className={isSelected ? "active":null} {...props}>
      {children}
    </button>
    </li>
  );
}