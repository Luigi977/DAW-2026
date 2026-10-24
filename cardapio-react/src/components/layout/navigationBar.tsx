import type { category } from "../../data/categories";

type NavigationBarProps = {
  categories: category[];
  activeCategory: string;
  onSelectCategory: (alias: string) => void;
};
export function NavigationBar({ categories, activeCategory, onSelectCategory }: NavigationBarProps) {
  return (
    <nav>
      <div className="container">
        <ul>
          {categories.map((category) => (
            <li>
              <button className={category.alias == activeCategory ? "active" : ""} type="button" onClick={() => onSelectCategory(category.alias)}>
                {category.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
