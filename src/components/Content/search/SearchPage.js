// import  getPokemon ก่อน เดี่ยวรูปมันไม่ขึ้น
import getPokemon from './getPokemon';

const SearchPage = () => {

    return <>

        <div className="app-searchpage">
            <p>SearchPage</p>
            <div class="searchBox">
                <input id="pokemonName" type="Pokemon name" placeholder="Pokemon name"></input>
                    <button id="search">🔎</button>
            </div>
            <div class="pokemonBox"></div>
            <getPokemon />
        </div>
    </>
};
export default SearchPage;