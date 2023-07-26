import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchHome } from "../Redux/HomeSlice";
import { Link, useNavigate } from "react-router-dom";

const Search = () => {
  const { commondata } = useSelector((state) => state?.homeData);
  const [select, setSelect] = useState("");
  const [subcategory, setSubCategory] = useState([]);
  const [search, setSearch] = useState("");
  const [searchFilter, setSearchFilter] = useState(
    commondata?.result?.categories
  );
  const [selectSubCategory, setSelecetedSubCategory] = useState([]);
  const{Logouttoggle} = useSelector(state=>state?.AuthData)

  const dispatch = useDispatch();
  const navigate = useNavigate()

  // ----------- Search Function ---------------------
  const filterdata = (search, alldata) => {
    const filteredProducts = alldata?.result?.categories?.map((category) => {
      return category?.sub_categories.filter((subitem) => {
        return (
          subitem?.name &&
          subitem?.name.toLowerCase().includes(search.toLowerCase())
        );
      });
    });

    const flattenedFilteredProducts = filteredProducts.flat();

    return flattenedFilteredProducts;
  };

  const handleSearch = () => {
    const data = filterdata(search, commondata);
    setSearchFilter(data);
    console.log({ searchFilter });
  };
  useEffect(() => {
    setSearchFilter(commondata?.result?.categories);
  }, [commondata?.result?.categories]);

  // ---------- Filter Subcategory --------

  const subcat = async (select, data) => {
    if (select === "Select Category") {
      setSubCategory([]);
      return;
    } else {
      let categories = await data?.result?.categories?.filter((item) =>
        item?.name === select ? item?.sub_categories : null
      );
      console.log("Categories", categories);
      const singleObject = await Object.assign({}, ...categories);

      console.log("Single Obj", singleObject);
      let subcategory = await singleObject?.sub_categories.map(
        (item) => item && item?.name
      );
      console.log("Subcategory", subcategory);
      setSubCategory(subcategory);
    }
  };

  const handlechange = async (e) => {
    e.preventDefault();
    setSelect(e.target.value);
  }

  useEffect(() => {
    dispatch(FetchHome());
  }, [dispatch]);

  // ------------ Handle CheckBox -------------
  const handleCheckboxChange = (item) => {
    const isSelected = selectSubCategory.includes(item);

    if (isSelected) {
      setSelecetedSubCategory((prevSelected) =>
        prevSelected.filter((sub) => sub !== item)
      );
    } else {
      setSelecetedSubCategory((prevSelected) => [...prevSelected, item]);
    }
  };
  const handleChangeProducts = async () => {
    let categories = await commondata?.result?.categories?.filter((item) =>
      item?.name === select ? item?.sub_categories : null
    );
    const singleObject = await Object.assign({}, ...categories);

    if (selectSubCategory.length !== 0) {
      let subcategory = await singleObject?.sub_categories.map((item) => {
        const nameOfProducts = selectSubCategory.find(
          (cat) => cat === item.name
        );
        return nameOfProducts ? nameOfProducts : null;
      });
      const filteredCat = subcategory.filter((item) => item !== null);
      console.log(filteredCat);
      setSearchFilter(filteredCat);
    } else setSearchFilter(commondata?.result?.categories);
  };
  useEffect(() => { 
    if (!Logouttoggle) navigate("/login"); 
  }, [navigate, Logouttoggle]);

  useEffect(() => {
    if (select !== "") subcat(select, commondata);
    if (search === "") setSearchFilter(commondata?.result?.categories);
    if (selectSubCategory.length === 0)
      setSearchFilter(commondata?.result?.categories);
  }, [selectSubCategory, search,select]);
  

  return (
    <>
      <div className="search_main_section">
        <div className="container">
          <div className="row res_padd">
            <div className="bread_crumb">
              <Link href="#">Home</Link>
              <span>
                <i className="fa fa-angle-right" aria-hidden="true" />
              </span>
              <Link href="#">Vegetables</Link>
            </div>
            <div className="mobile_filter">
              <i className="fa fa-filter" aria-hidden="true" />
              <p>Show Filter</p>
            </div>
            <div className="laft_search_panel">
              <h3>Filter Options</h3>
              <div className="form_group" style={{ position: "relative" }}>
                <input
                  type="text"
                  placeholder="Keyword"
                  onChange={(e) => setSearch(e.target.value)}
                  className="search-input"
                />
                <img
                  onClick={handleSearch}
                  src="images/icon36.png"
                  className="search_icon"
                  alt=""
                />
              </div>
              <div className="form_group">
                <label className="search_label">Category</label>
                <select
                  className="slectt"
                  value={select}
                  onChange={handlechange}
                >
                  <option>Select Category</option>
                  {commondata?.result?.categories?.map((item, index) => {
                    return <option key={index + 1}>{item.name}</option>;
                  })}
                </select>
              </div>
              <div className="form_group">
                <label className="search_label">Sub Category</label>
                <ul className="c_ul">
                  {subcategory?.map((item, index) => {
                    return (
                      <li key={index + 1}>
                        <label className="contect_container_checkBox">
                          {item}
                          <input
                            type="checkbox"
                            name="text"
                            onChange={() => handleCheckboxChange(item)}
                          />
                          <span className="contect_checkmark" />
                        </label>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="form_group">
                <label className="search_label">Price Range</label>
                <div className="slider_range">
                  <div
                    id="slider-range"
                    className="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"
                  >
                    <div
                      className="ui-slider-range ui-widget-header ui-corner-all"
                      style={{ left: "0%", width: "100%" }}
                    />
                    <span
                      tabIndex={0}
                      className="ui-slider-handle ui-state-default ui-corner-all"
                      style={{ left: "0%" }}
                    />
                    <span
                      tabIndex={0}
                      className="ui-slider-handle ui-state-default ui-corner-all"
                      style={{ left: "100%" }}
                    />
                  </div>
                  <span className="range-text">
                    <input
                      type="text"
                      className="price_numb"
                      readOnly
                      id="amount"
                    />
                  </span>
                </div>
              </div>
              <button
                type="submit"
                className="search-submit1"
                onClick={handleChangeProducts}
                disabled={subcategory.length === 0}
              >
                Filter
              </button>
            </div>
            {/*right*/}
            <div className="right_search_panel">
              <div className="evnt_shot_by_main">
                <label className="event-sort">
                  Showing 1-20 out of 100 product for Vegetable
                </label>
                <div className="sort-filter">
                  <p>Sort by :</p>
                  <select className="sort-select">
                    <option>Select</option>
                    <option>Price - Low to High</option>
                    <option>Price - High to Low </option>
                  </select>
                </div>
              </div>
              {searchFilter?.map((item, ind) => {
                return (
                  <div key={ind} className="search_proo">
                    <div className="srch_pic_box">
                      <img src={`images/search03.jpg`} alt="" />
                      <span>
                        <Link href="#">Call For Enquiry</Link>
                      </span>
                    </div>
                    <div className="srch_dtls_box">
                      <Link style={{ fontSize: "10px" }}>
                        {item?.name ? item?.name : item}
                      </Link>
                      <p>Rs.{Math.floor(Math.random() * 100) + 40}.00</p>
                    </div>
                  </div>
                );
              })}
              <div className="w-100" />
              <div className="pagination_area">
                <ul>
                  <li>
                    <Link to={""}>
                      <i className="fa fa-angle-left" aria-hidden="true" />{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to={""}>1</Link>
                  </li>
                  <li>
                    <Link to={""}>2</Link>
                  </li>
                  <li className="active">
                    <Link to={""}>3</Link>
                  </li>
                  <li>
                    <Link to={""}>4</Link>
                  </li>
                  <li>
                    <Link to={""}>...</Link>
                  </li>
                  <li>
                    <Link to={""}>25</Link>
                  </li>
                  <li>
                    <Link to={""}>
                      {" "}
                      <i className="fa fa-angle-right" aria-hidden="true" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
