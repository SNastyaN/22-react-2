import superheroes from "../data/super.json";
function SuperheroList(){
    console.log();
    return (
        <div>
            <h1>Superherolist</h1>
            <div className="superlist">
                {
                    superheroes.map((superhero)=> (
                    <div className="super">
                        <h2>{superhero.name} </h2>
                        <p>{superhero.universe}</p>
                        <p>{superhero.alterego} </p>
                        <p>{superhero.occupation}</p>
                        <p>{superhero.friends}</p> 
                        <p>{superhero.superpowers}</p>
                    </div>))
                }
            </div>
        </div>
    )
}
export default SuperheroList;
