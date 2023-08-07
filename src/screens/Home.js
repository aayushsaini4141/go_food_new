import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Navbar from '../components/Navbar';
// import Crousel from '../components/Crousel';


export default function Home() {

  const [search,setSearch] = useState(''); 
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }
    });

    response = await response.json();
    setFoodItem(response[0]);
    setFoodCat(response[1]);

    // console.log(response[0],response[1])

  }

  useEffect(() => {
    loadData()

  }, []);
  let result = foodItem.filter((item) => item.CategoryName === foodCat[0].CategoryName)
  console.log(result[0]?.options[0]?.half);

  return (
    <div>
      <div><Navbar /></div>
      <div>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>

<div className="carousel-inner" id='carousel'>
<div className="carousel-caption" style={{zIndex:"10"}}>
<div className="d-flex justify-content-center">
<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value = {search} onChange={(e) => {setSearch(e.target.value)}}/>
{/* <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button> */}
</div>

</div>
    <div className="carousel-item active">
        <img src="https://source.unsplash.com/random/900×700/?burger" className="d-block w-100" style={{ filter:"brightness(30%)",objectFit:"contain !important"}} alt="..." />
    </div>
    <div className="carousel-item">
        <img src="https://source.unsplash.com/random/900×700/?pastry" className="d-block w-100" style={{ filter:"brightness(30%)",objectFit:"contain !important"}} alt="..." />
    </div>
    <div className="carousel-item">
        <img src="https://source.unsplash.com/random/900×700/?barbeque" className="d-block w-100" style={{ filter:"brightness(30%)",objectFit:"contain !important"}} alt="..." />
    </div>
</div>
<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
</button>
</div>
      
      </div>

      <div className='container'>
        {
          foodCat.length !== 0 &&
          foodCat.map((data) => ( data &&
            <div key={data._id} className='row mb-3'>
              <div className='fs-3 m-3'>
                {data.CategoryName}
              </div>
              <hr />

              {
                foodItem.length !== 0
                  ? foodItem
                    .filter((item) => (item.CategoryName === data.CategoryName)&& (item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))) 
                    .map((filterItems) => (filterItems &&
                      <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
                        <Card
                            foodName={filterItems.name}
                            options={filterItems.options && filterItems.options[0]}
                            imgSrc={filterItems.img}
                          />
                        {/* <p>{filterItems.name}</p>
                        <p>{filterItems?.options?.map(opt => <span>{opt.half ?? "abcd"}</span>)}
                        </p> */}
                      </div>
                    ))
                  : <div>No such Data Found</div>
              }
            </div>
          ))
        }
      </div>

      <div><Footer /></div>
    </div>
  )
}
