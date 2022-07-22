import React, { useEffect, useState } from "react";
import { Card, Button, Form, Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    const [ownerInfo, setOwnerInfo] = useState("");

    const [filterCheck500, setfilterCheck500] = useState(false);
    const [filterCheck1000, setfilterCheck1000] = useState(false);
    const [filterCheck1500, setfilterCheck1500] = useState(false);
    const [filterCheck2000, setfilterCheck2000] = useState(false);

    const [filterCatMobiles, setFilterCatMobiles] = useState(false);
    const [filterCatLaptops, setFilterCatLaptops] = useState(false);
    const [filterCatHeadphones, setFilterCatHeadphones] = useState(false);
    const [filterCatMonitors, setFilterCatMonitors] = useState(false);
    const [filterCatTv, setFilterCatTv] = useState(false);

    const [filterCompApple, setFilterCompApple] = useState(false);
    const [filterCompSamsung, setFilterCompSamsung] = useState(false);
    const [filterCompAsus, setFilterCompAsus] = useState(false);
    const [filterCompOneplus, setFilterCompOneplus] = useState(false);


    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = async () => {
        let result = await fetch('https://e-commbychris.herokuapp.com/products')
        result = await result.json();
        setProducts(result);
    }

    const deleteProduct = async (id, uId) => {
        const localUserId = JSON.parse(localStorage.getItem('user'))._id;
        const userId = uId;

        if (localUserId === userId) {
            let result = await fetch(`https://e-commbychris.herokuapp.com/product/${id}`, {
                method: "Delete"
            });
            result = await result.json()
            if (result) {
                getProducts()
                alert("Record is deleted");
            }
        } else {
            alert("Sorry! You don't have access to this product")
        }
    }

    const updateProduct = (id, uId) => {
        const localUserId = JSON.parse(localStorage.getItem('user'))._id;
        const userId = uId;

        if (userId === localUserId) {
            const pId = id;
            navigate('/updateproduct/' + pId)
        } else {
            alert("Sorry! You don't have access to this product")
            return false;
        }
    }

    const searchHandle = async (event) => {
        console.warn(event.target.value)
        let key = event.target.value;
        if (key) {
            let result = await fetch(`https://e-commbychris.herokuapp.com/search/${key}`);
            result = await result.json();
            if (result) {
                setProducts(result)
            }
        } else {
            getProducts();
        }
    }




    const filter500 = (filter) => {
        if (filterCheck500 === false) {
            const filteredProducts500 = products.filter((curData) => {
                return curData.price <= filter
            });
            setProducts(filteredProducts500);
            setfilterCheck500(true);
        } else {
            getProducts()
            setfilterCheck500(false);
        }
    }
    const filter1000 = (filter) => {
        if (filterCheck1000 === false) {
            const filteredProducts = products.filter((curData) => {
                return curData.price <= filter
            });
            setProducts(filteredProducts);
            setfilterCheck1000(true);
        } else {
            getProducts()
            setfilterCheck1000(false);
        }
    }
    const filter1500 = (filter) => {
        if (filterCheck1500 === false) {
            const filteredProducts = products.filter((curData) => {
                return curData.price <= filter
            });
            setProducts(filteredProducts);
            setfilterCheck1500(true);
        } else {
            getProducts()
            setfilterCheck1500(false);
        }
    }
    const filter2000 = (filter) => {
        if (filterCheck2000 === false) {
            const filteredProducts = products.filter((curData) => {
                return curData.price <= filter
            });
            setProducts(filteredProducts);
            setfilterCheck2000(true);
        } else {
            getProducts()
            setfilterCheck2000(false);
        }
    }



    const filterCategoryMobiles = (catFilter) => {
        if (filterCatMobiles === false) {
            const filteredCatProducts = products.filter((curData) => {
                return curData.category === catFilter
            });
            setProducts(filteredCatProducts);
            setFilterCatMobiles(true)
        } else {
            getProducts();
            setFilterCatMobiles(false);
        }
    }
    const filterCategoryLaptops = (catFilter) => {
        if (filterCatLaptops === false) {
            const filteredCatProducts = products.filter((curData) => {
                return curData.category === catFilter
            });
            setProducts(filteredCatProducts);
            setFilterCatLaptops(true)
        } else {
            getProducts();
            setFilterCatLaptops(false);
        }
    }
    const filterCategoryHeadphones = (catFilter) => {
        if (filterCatHeadphones === false) {
            const filteredCatProducts = products.filter((curData) => {
                return curData.category === catFilter
            });
            setProducts(filteredCatProducts);
            setFilterCatHeadphones(true)
        } else {
            getProducts();
            setFilterCatHeadphones(false);
        }
    }
    const filterCategoryMonitor = (catFilter) => {
        if (filterCatMonitors === false) {
            const filteredCatProducts = products.filter((curData) => {
                return curData.category === catFilter
            });
            setProducts(filteredCatProducts);
            setFilterCatMonitors(true)
        } else {
            getProducts();
            setFilterCatMonitors(false);
        }
    }
    const filterCategoryTV = (catFilter) => {
        if (filterCatTv === false) {
            const filteredCatProducts = products.filter((curData) => {
                return curData.category === catFilter
            });
            setProducts(filteredCatProducts);
            setFilterCatTv(true)
        } else {
            getProducts();
            setFilterCatTv(false);
        }
    }



    const filterCompanyApple = (compFilter) => {
        if (filterCompApple === false) {
            const filteredCompProducts = products.filter((currData) => {
                return currData.company === compFilter
            })
            setProducts(filteredCompProducts);
            setFilterCompApple(true);
        } else {
            getProducts();
            setFilterCompApple(false);
        }
    }
    const filterCompanySamsung = (compFilter) => {
        if (filterCompSamsung === false) {
            const filteredCompProducts = products.filter((currData) => {
                return currData.company === compFilter
            })
            setProducts(filteredCompProducts);
            setFilterCompSamsung(true);
        } else {
            getProducts();
            setFilterCompSamsung(false);
        }
    }
    const filterCompanyAsus = (compFilter) => {
        if (filterCompAsus === false) {
            const filteredCompProducts = products.filter((currData) => {
                return currData.company === compFilter
            })
            setProducts(filteredCompProducts);
            setFilterCompAsus(true);
        } else {
            getProducts();
            setFilterCompAsus(false);
        }
    }
    const filterCompanyOneplus = (compFilter) => {
        if (filterCompOneplus === false) {
            const filteredCompProducts = products.filter((currData) => {
                return currData.company === compFilter
            })
            setProducts(filteredCompProducts);
            setFilterCompOneplus(true);
        } else {
            getProducts();
            setFilterCompOneplus(false);
        }
    }



    return (
        <div className="product-list">


            <input className="search-input" type="text" placeholder="Search Product" onChange={searchHandle}></input>

            <div className="main">

                <div className="left-col">

                    <h5 className="sort-by">Apply Filters</h5>

                    <Dropdown>
                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                            Sort by price
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <div class="form-check">
                                <input onClick={() => filter500(500)} type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    Below 500$
                                </label>
                            </div>

                            <div class="form-check">
                                <input onClick={() => filter1000(1000)} type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    Below 1000$
                                </label>
                            </div>

                            <div class="form-check">
                                <input onClick={() => filter1500(1500)} type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    Below 1500$
                                </label>
                            </div>

                            <div class="form-check">
                                <input onClick={() => filter2000(2000)} type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    Below 2000$
                                </label>
                            </div>
                        </Dropdown.Menu>
                    </Dropdown>

                    <br></br>


                    <Dropdown>
                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                            Sort by Category
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <div class="form-check">
                                <input onClick={() => filterCategoryMobiles("Mobile")} type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    Mobile
                                </label>
                            </div>
                            <div class="form-check">
                                <input onClick={() => filterCategoryLaptops("Laptop")} type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    Laptop
                                </label>
                            </div>
                            <div class="form-check">
                                <input onClick={() => filterCategoryHeadphones("Headphones")} type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    Headphones
                                </label>
                            </div>
                            <div class="form-check">
                                <input onClick={() => filterCategoryMonitor("Monitor")} type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    Monitors
                                </label>
                            </div>
                            <div class="form-check">
                                <input onClick={() => filterCategoryTV("Television (TV)")} type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    Television(TV)
                                </label>
                            </div>
                        </Dropdown.Menu>
                    </Dropdown>

                    <br></br>

                    <Dropdown>
                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                            Sort by Company
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <div class="form-check">
                                <input onClick={() => filterCompanyApple("Apple")} type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    Apple
                                </label>
                            </div>
                            <div class="form-check">
                                <input onClick={() => filterCompanySamsung("Samsung")} type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    Samsung
                                </label>
                            </div>
                            <div class="form-check">
                                <input onClick={() => filterCompanyAsus("Asus")} type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    Asus
                                </label>
                            </div>
                            <div class="form-check">
                                <input onClick={() => filterCompanyOneplus("Oneplus")} type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    Oneplus
                                </label>
                            </div>
                        </Dropdown.Menu>
                    </Dropdown>


                    {/* <>
                        <div class="form-check">
                            <input onClick={() => filterCompanyApple("Apple")} type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                                Apple
                            </label>
                        </div>
                        <div class="form-check">
                            <input onClick={() => filterCompanySamsung("Samsung")} type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                                Samsung
                            </label>
                        </div>
                        <div class="form-check">
                            <input onClick={() => filterCompanyAsus("ASUS")} type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                                Asus
                            </label>
                        </div>
                        <div class="form-check">
                            <input onClick={() => filterCompanyOneplus("Oneplus")} type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                                Oneplus
                            </label>
                        </div>
                    </> */}




                    {/* <h5 className="sort-by">Sort by</h5>

                    <div className="d-grid gap-2 filter-component">
                        <h5>Price</h5>
                        <div class="form-check">
                            <input onClick={() => filter500(500)} type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                                Below 500$
                            </label>
                        </div>

                        <div class="form-check">
                            <input onClick={() => filter1000(1000)} type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                                Below 1000$
                            </label>
                        </div>

                        <div class="form-check">
                            <input onClick={() => filter1500(1500)} type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                                Below 1500$
                            </label>
                        </div>

                        <div class="form-check">
                            <input onClick={() => filter2000(2000)} type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                                Below 2000$
                            </label>
                        </div>
                    </div> */}


                    {/* <div className="d-grid gap-2 filter-component">
                        <h5>Category</h5>
                        <div class="form-check">
                            <input onClick={() => filterCategoryMobiles("mobile")} type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                                Mobile
                            </label>
                        </div>
                        <div class="form-check">
                            <input onClick={() => filterCategoryLaptops("laptop")} type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                                Laptop
                            </label>
                        </div>
                        <div class="form-check">
                            <input onClick={() => filterCategoryHeadphones("headphones")} type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                                Headphones
                            </label>
                        </div>
                        <div class="form-check">
                            <input onClick={() => filterCategoryMonitor("monitor")} type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                                Monitors
                            </label>
                        </div>
                        <div class="form-check">
                            <input onClick={() => filterCategoryTV("Television (TV)")} type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                                Television(T.V.)
                            </label>
                        </div>
                    </div> */}
                </div>
                <div className="right-col">
                    {
                        products.length > 0 ? products.map((item, index) =>
                            <div className="component">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Body>
                                        <h4>{item.name}</h4>
                                        <h6>Company: {item.company}</h6>
                                        <p>Price: {item.price}$</p>
                                        <Card.Subtitle className="mb-2 text-muted">Category: {item.category}</Card.Subtitle>
                                        <br></br>
                                        <Card.Subtitle className="mb-2 text-muted">Added by: {item.owner}</Card.Subtitle>
                                        <Button className="product-list-buttons" onClick={() => updateProduct(item._id, item.userId)} variant="secondary">Update</Button>
                                        <Button className="product-list-buttons" onClick={() => deleteProduct(item._id, item.userId)} variant="danger">Delete</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        )
                            :
                            <h5>No Products found</h5>
                    }
                </div>
            </div>


            {/* <div className="component">
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <h4>Name</h4>
                        <h6>Company: Samsung</h6>
                        <p>Price: 1500$</p>
                        <Card.Subtitle className="mb-2 text-muted">Category: Mobile</Card.Subtitle>
                        <br></br>
                        <Button variant="secondary">Update</Button>
                        <Button variant="danger">Delete</Button>
                    </Card.Body>
                </Card>
            </div> */}



            {/* <ul>
                <li>Sr.no</li>
                <li>Name</li>
                <li>Price</li>
                <li>Category</li>
                <li>Company</li>
                <li>Operation</li>
            </ul>
            {
                products.length > 0 ? products.map((item, index) =>
                    <ul key={item._id}>
                        <li>{index + 1}</li>
                        <li>{item.name}</li>
                        <li>{item.price}</li>
                        <li>{item.category}</li>
                        <li>{item.company}</li>
                        <li><button onClick={() => deleteProduct(item._id)}>Delete</button>
                        <button onClick={() => updateProduct(item._id)}>Update</button>
                            <Link to={"/updateproduct/" + item._id}>Update</Link>
                        </li>
                    </ul>
                )
                    :
                    <h5>No Products found</h5>
            } */}
        </div>
    )
}

export default ProductList;