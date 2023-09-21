import React, { useRef, useState } from 'react';
import { Mentions, Space , Button ,InputNumber } from 'antd';
const onChange = (value) => {
  console.log('Change:', value);
};
const onSelect = (option) => {
  console.log('select', option);
};

export const AddProductForm = ({products,setProducts}) => {
  let productName = useRef("")
  let ProductPrice = useRef("")
  let ProductCategory = useRef("")
  let ProductStock = useRef("")

  

  const adminAddProduct = () => {
    console.log(productName.current.textarea);
    const newProduct = {id:products.length + 1,title:productName.current.textarea.value,price:ProductPrice.current.value,category:ProductCategory.current.textarea.value,stock:ProductStock.current.value}
    setProducts([...products,newProduct])
  }
  
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
    <Space direction="vertical">
      <Mentions
        placeholder='Ürün İsmi'
        ref={productName}
        onSelect={onSelect}
        defaultValue=""
        status="error"
        options={options}
      />
      <InputNumber
        prefix="Adet"
        ref={ProductStock}
        style={{
          width: '100%',
        }}
      />
      <Mentions
        placeholder='Ürün Kategorisi'
        ref={ProductCategory}
        onSelect={onSelect}
        defaultValue=""
        status="warning"
        options={options}
      />
      <InputNumber
        prefix="TL"
        ref={ProductPrice}
        style={{
          width: '100%',
        }}
      />
       <Button style={{color:"green"}} onClick={adminAddProduct}>Ürün Ekle</Button>
    </Space>
    
  );
};
