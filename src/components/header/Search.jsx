import React, { useState } from "react";
import { Form, Button, FormControl } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { mealSearch, randomMeal } from "../../actions/mealsActions";

const Search = () => {
const [search,setSearch] = useState('')
const history = useHistory()
const dispatch = useDispatch()
  const handleChange = (e)=>{
    setSearch(e.target.value)
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    if(search.trim()!==''){
      dispatch(mealSearch(search.trim())) 
      dispatch(randomMeal())

      history.push('/search')
    }
  }
  return (
    <Form inline onSubmit={handleSubmit}>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={handleChange} value={search} />
      <Button variant="dark" type='submit'>Search</Button>
    </Form>
  );
};

export default Search;
