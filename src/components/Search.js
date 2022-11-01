import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Search = () => {
return(
    <form action="/recipes/results" method="POST" class="form-inline">
        <label for="q">Search</label>
        <input name="q" id="q"class="form-control mr-sm-2" type="search" placeholder="Podcast" aria-label="Search"/>
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
)

}
export default Search;