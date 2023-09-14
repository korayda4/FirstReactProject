import { useState } from "react"
import "./App.css"

export const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchProduct, setSearchProduct] = useState("");

  const productList = [
    {
      id:1,
      title:"Iphone 15 Pro",
      category:"Elektronik",
      price:100000,   
      stock:5
    },
    {
      id:2,
      title:"Iphone 14 Pro",
      category:"Elektronik",
      price:70000,   
      stock:10
    },
    {
      id:3,
      title:"Tişört",
      category:"Tekstil",
      price:400,   
      stock:25
    },
    {
      id:4,
      title:"Çöpcalibur Laptop",
      category:"Elektronik",
      price:1,   
      stock:25
    },
    {
      id:5,
      title:"Futbol Topu",
      category:"Spor",
      price:450,   
      stock:50
    },
    {
      id:6,
      title:"Demir dişli krampon",
      category:"Spor",
      price:6100,   
      stock:10
    },
    {
      id:7,
      title:"Ronaldo Figürü",
      category:"Oyuncak",
      price:700000,   
      stock:2
    },
    {
      id:8,
      title:"Taotronics Kulaklık",
      category:"Elektronik",
      price:890,   
      stock:10
    },
    {
      id:9,
      title:"4 Odalı Çadır",
      category:"Kamp",
      price:14300,
      stock:40
    },
    {
      id:10,
      title:"2 Odalı Çadır",
      category:"Kamp",
      price:7300,
      stock:25
    },
    {
      id:11,
      title:"Coca-Cola",
      category:"Icecek",
      price:30,
      stock:20
    },
    {
      id:12,
      title:"Mont",
      category:"Tekstil",
      price:2000,   
      stock:3
    }
  ]

  const productRender = productList.map((x) => {
    if (
      (selectedCategory === null || selectedCategory === "All" || x.category === selectedCategory) &&
      (searchProduct === "" || x.title.toLowerCase() === searchProduct.toLowerCase())
    ) {
      return (
        <div className="listItem" key={x.id}>
          <h2 className="title">{x.title}</h2>
          <div className="info">
            <h4 className="price">Fiyat: {x.price}TL </h4>
            <h4 className="category">Kategori: {x.category} </h4>
            <h4 className="stock">Stok: {x.stock} Adet </h4>
          </div>
        </div>
      );
    }
    return null;
  });
  


  const clickedVar = (e) => {
    const clickedCategory = e.target.textContent;
    setSelectedCategory(clickedCategory);
  }
  
  const categories = ["All","Elektronik","Tekstil","Icecek","Kamp","Spor","Oyuncak"];
  const renderCategory = categories.map(x => {
    return(
      <a onClick={clickedVar} className="categoryLink" href="#" key={x}>{x}</a>
    )
  })

  return (
    <div className="container">
      <div className="pageTitle">
        <h1>PRODUCT</h1>
        <div className="input-select">
          <input onChange={(e) => {setSearchProduct(e.target.value)}} value={searchProduct} className="searchInput" type="text" placeholder="Search Product"/>
          <select name="" id="selectItem">
            <option value="all" disabled>Listeleme Ölçeği</option>
            <option value="2" >2 Ürün</option>
            <option value="4" >4 Ürün</option>
            <option value="6" >6 Ürün</option>
            <option value="8" >8 Ürün</option>
          </select>
        </div>
        </div>
      <div className="listContainer">
          {productRender}
      </div>
      <div className="lower">
        <div style={{display:"flex",gap:"4.8em",margin:"8px",borderRadius:"4px"}}>
          {renderCategory}
        </div>
      </div>
    </div>
  )
}