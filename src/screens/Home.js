import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import FoodData from '../components/FoodData';
import FoodCategory from '../components/FoodCategory';
import Carousel  from '../components/Carousel';


export default function Home() {
  const [FoodItems] = useState(FoodData);
  const [FoodCat] = useState(FoodCategory);
  const [search, setSearch] = useState('');

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Carousel/>
      </div>
      <div className='container'>
        {FoodCat.map((data) => (
          <div className='row mb-3'>
            <div key={data.id} className='fs-3 m-3'>
              {data.CategoryName}
            </div>
            <hr id="hr-success" style={{ height: "4px", backgroundImage: "-webkit-linear-gradient(left,rgb(0, 255, 137),rgb(0, 0, 0))" }} />
            {FoodItems.filter(
              (items) => (items.CategoryName === data.CategoryName) && (items.name.toLowerCase().includes(search.toLowerCase()))
            ).map((filterItems) => (
              <div key={filterItems.id} className='col-12 col-md-6 col-lg-3'>
                {console.log(filterItems.url)}
                <Card foodName={filterItems.name} item={filterItems} options={filterItems.options[0]} ImgSrc={filterItems.img} />
              </div>
            ))}
          </div>
        ))}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
