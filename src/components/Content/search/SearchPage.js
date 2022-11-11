
// import  getPokemon ก่อน เดี่ยวรูปมันไม่ขึ้น
import SearchPokemon from "./SearchPokemon";


const SearchPage = () => {

    return <>

        <div className="app-searchpage">
            <p>SearchPage</p>
            <div class="searchBox">
                <input id="pokemonName" type="Pokemon name" placeholder="Pokemon name"></input>
                    <button id="search">🔎</button>
                        <div class="pokemonBox" >
                            <SearchPokemon />


                </div>
            </div>
        </div>
    </>
};
export default SearchPage;