
// import  getPokemon ก่อน เดี่ยวรูปมันไม่ขึ้น

const SearchPage = (getPokemon) => {

    return <>

        <div className="app-searchpage">
            <p>SearchPage</p>
            <div className="searchBox">
                <input id="pokemonName" type="Pokemon name" placeholder="Pokemon name"></input>
                    <button id="search">🔎</button>
                        <div className="pokemonBox" >
                </div>
                
            </div>
        </div>
    </>
};
export default SearchPage;