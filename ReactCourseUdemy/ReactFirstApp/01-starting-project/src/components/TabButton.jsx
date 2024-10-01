export default function TabButton({children, isSelected,}){
    return (
      <li>
        <button className={isSelected ? 'active' : undefined} {...props}>{children}</button>
      </li>
    );
} 