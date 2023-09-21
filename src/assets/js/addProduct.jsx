import React from 'react';
import { Mentions, Space } from 'antd';
const onChange = (value) => {
  console.log('Change:', value);
};
const onSelect = (option) => {
  console.log('select', option);
};
export const addProductForm = () => {
  const options = [
    {
      value: 'afc163',
      label: 'afc163',
    },
    {
      value: 'zombieJ',
      label: 'zombieJ',
    },
    {
      value: 'yesmeck',
      label: 'yesmeck',
    },
  ];
  return (
    <Space direction="horizontal">
      <Mentions
        placeholder='Ürün İsmi'
        onChange={onChange}
        onSelect={onSelect}
        defaultValue=""
        status="error"
        options={options}
      />
      <Mentions
        placeholder='Ürün Stoğu'
        onChange={onChange}
        onSelect={onSelect}
        defaultValue=""
        status="warning"
        options={options}
      />
      <Mentions
        placeholder='Ürün Fiyatı'
        onChange={onChange}
        onSelect={onSelect}
        defaultValue=""
        status="warning"
        options={options}
      />
    </Space>
  );
};