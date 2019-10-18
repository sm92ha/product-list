import React, { useState, useEffect, useRef } from "react";
import { data } from "./data";
import ProductCard from "./components/ProductCard";
import { Main, SearchBox, RangeHolder } from "./AppStyle";

function App() {
  const [list, setList] = useState([]);
  const [fromPrice, setFromPrice] = useState(0);
  const [toPrice, setToPrice] = useState(100000);
  const textSearchRef = useRef();
  const checkAvailabilityRef = useRef();
  const fromPriceRef = useRef();
  const toPriceRef = useRef();

  useEffect(() => {
    //fetch all data at first
    setList(data);
  }, []);

  async function handleChangeSearchBox() {
    let newList = [];

    //get the value from name search input
    const searchedValue = textSearchRef.current.value.toLowerCase();

    //name search function
    newList = await data.filter(
      data => data.name.toLowerCase().search(searchedValue) >= 0
    );

    //filter available items if need
    if (checkAvailabilityRef.current.checked) {
      newList = await newList.filter(data => data.availability === true);
    }

    //filter form price if changed
    if (fromPriceRef.current.value !== 0) {
      newList = await newList.filter(
        data => data.price >= fromPriceRef.current.value
      );
    }

    //filter to ptice if change
    if (toPriceRef.current.value !== 100000) {
      newList = await newList.filter(
        data => data.price <= toPriceRef.current.value
      );
    }
    setList(newList);
  }

  return (
    <>
      <SearchBox>
        <div>
          <span>Search in Names:</span>
          <input
            onChange={handleChangeSearchBox}
            placeholder="Search Title"
            ref={textSearchRef}
          />
        </div>
        <div>
          <span>Only availabile :</span>
          <input
            onChange={handleChangeSearchBox}
            type="checkbox"
            ref={checkAvailabilityRef}
          />
        </div>
        <RangeHolder>
          <span>Price Between :</span>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>
              <section className="range-slider">
                <span className="rangeValues"></span>
                <input
                  min="0"
                  max="100000"
                  step="100"
                  type="range"
                  ref={fromPriceRef}
                  defaultValue="0"
                  onMouseUp={handleChangeSearchBox}
                  onChange={() => setFromPrice(fromPriceRef.current.value)}
                />
                <input
                  min={0}
                  max="100000"
                  step="100"
                  type="range"
                  defaultValue="100000"
                  ref={toPriceRef}
                  onMouseUp={handleChangeSearchBox}
                  onChange={() => setToPrice(toPriceRef.current.value)}
                />
              </section>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <span>{fromPrice}$</span>
              <span>{toPrice}$</span>
            </div>
          </div>
        </RangeHolder>
      </SearchBox>
      <Main>
        {list.map((data, index) => (
          <ProductCard
            key={index}
            name={data.name}
            desc={data.desc}
            img={data.img}
            price={data.price}
            availability={data.availability}
          />
        ))}
      </Main>
    </>
  );
}

export default App;
