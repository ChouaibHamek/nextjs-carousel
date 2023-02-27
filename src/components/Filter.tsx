import React from "react";
import { SelectInput, Flex, Block } from "vcc-ui";
import styles from "../styles/Filter.module.css";

interface Props {
  currentFilter: string;
  setFilter: (filter: string) => void;
  filterOptions: string[];
}

const Filter: React.FC<Props> = ({
  currentFilter,
  setFilter,
  filterOptions,
}) => {
  return (
    <Flex className={styles.container}>
      <Block className={styles.inputWrapper}>
        <SelectInput
          value={currentFilter}
          onChange={(event) => setFilter(event.target.value)}
          label="Filter cars"
        >
          {filterOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </SelectInput>
      </Block>
    </Flex>
  );
};

export default Filter;
