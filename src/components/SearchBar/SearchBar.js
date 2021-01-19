import React, {useState} from 'react'
import './SearchBar.css'
import Yelp from '../../util/Yelp'



const sortByOptions = {
    'Best Match': 'best_match',
    'Higest Rated': 'rating',
    'Most Reviewed': 'review_count'
};

function searchYelp(term, location, sortBy){
    const businesses = Yelp.search(term, location, sortBy);
    return businesses;
}

function SearchBar({getArr}) {

   let [term, setTerm] = useState("");
   let [location, setLocation] = useState("");
   let [sortBy, setsortBy] = useState("best_match");

   function getSortByClass(sortByOption){
       if(sortBy === sortByOption){
           return "active";
       }else{
           return "";
       }
   }

   function handleSortByChange(sortByOption){
       setsortBy( () => sortByOption);
   }

   function handleTermChange(event){
       setTerm(()=> event.target.value);
   }

   function handleLocationChange(event){
       setLocation(() => event.target.value);
   }

   function handleSearch(event){
        getArr(term, location, sortBy);
        event.preventDefault()
    }


    function renderSortByOptions(){
        return Object.keys(sortByOptions).map((sortByOption) => {
            let sortByOptionValue = sortByOptions[sortByOption];
            return <li  key={sortByOptionValue} className={getSortByClass(sortByOptionValue)} onClick={() => handleSortByChange(sortByOptionValue)} >{sortByOption}</li>
        })
    }


    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>{renderSortByOptions()}</ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" onChange= {handleTermChange}/>
          <input placeholder="Where?" onChange={handleLocationChange}/>
        </div>
        <div className="SearchBar-submit">
          <a onClick={handleSearch}>Let's Go</a>
        </div>
      </div>
    );
}

export {SearchBar, searchYelp};