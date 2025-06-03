// components/SearchFilterBar/SearchFilterBar.tsx
import React from "react";
import styles from "./SearchFilterBar.module.scss";
import { Search } from "lucide-react";

type Filter = {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
};

type SearchFilterBarProps = {
  onSearch: (query: string) => void;
  filters?: Filter[];
};

const SearchFilterBar: React.FC<SearchFilterBarProps> = ({
  onSearch,
  filters,
}) => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearchTerm(val);
    onSearch(val);
  };

  return (
    <div className={styles.container}>
      <div className={styles.searchSection}>
        <Search />
        <input
          type="search"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
          className={styles.searchInput}
        />
      </div>

      {filters?.map(({ label, options, value, onChange }) => (
        <label key={label} className={styles.filterLabel}>
          <span className={styles.labelText}>{label}</span>
          <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={styles.selectInput}
          >
            <option value="">All</option>
            {options.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </label>
      ))}
    </div>
  );
};

export default SearchFilterBar;
