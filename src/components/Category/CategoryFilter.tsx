import React from "react";
import './style.css';
import { CategoryType } from "../../type/CategoryType";

interface Props {
  categories: CategoryType[];
  selectedCategory: CategoryType;
  onChange: (cat: CategoryType) => void;
  t: (key: string) => string; // pass translation function
}

const CategoryFilter: React.FC<Props> = ({
  categories,
  selectedCategory,
  onChange,
  t,
}) => {
  return (
    <div
      className="project__category"
      role="tablist"
      aria-label="Project categories"
    >
      {categories.map((cat) => (
        <button
          key={cat}
          className={`project__category-btn ${
            selectedCategory === cat ? "active" : ""
          }`}
          onClick={() => onChange(cat)}
          aria-pressed={selectedCategory === cat}
        >
          {t(cat.toLowerCase())}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
