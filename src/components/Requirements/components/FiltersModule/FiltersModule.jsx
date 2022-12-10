import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import Filters from "components/Filters/Filters";

const FiltersModule = ({ applyFilters }) => {
  const [searchType, setSearchType] = useState();

  const resetFilters = () => {
    setSearchType(null);
    applyFilters(null);
  };

  const onApplyFilters = (values) => {
    console.log(values);
    applyFilters({ [searchType]: values });
  };

  return (
    <div>
      {!searchType && (
        <>
          <Button
            onClick={() => {
              setSearchType("address");
            }}
          >
            Поиск по адресу
          </Button>
          <Button
            style={{ marginLeft: "20px" }}
            onClick={() => {
              setSearchType("district");
            }}
          >
            Поиск по району
          </Button>
        </>
      )}

      {searchType === "address" && (
        <Filters resetFilters={resetFilters} applyFilters={onApplyFilters}>
          <Form.Item label="city" name="city">
            <Input />
          </Form.Item>
          <Form.Item label="street" name="street">
            <Input />
          </Form.Item>
          <Form.Item label="house" name="house">
            <Input />
          </Form.Item>
          <Form.Item label="number" name="number">
            <Input />
          </Form.Item>
        </Filters>
      )}
      {searchType === "district" && (
        <Filters resetFilters={resetFilters} applyFilters={onApplyFilters}>
          <Form.Item label="district" name="district">
            <Input />
          </Form.Item>
        </Filters>
      )}
    </div>
  );
};

export default FiltersModule;
