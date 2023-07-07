function Joke({ number, setup, punchline }) {
  return (
    <div className="joke-container">
      <p className="joke-count"> Joke {number}: </p>
      <div className="joke">
        {setup && <p className="setup"> {setup} </p>}
        {punchline && <p className="punchline"> {punchline} </p>}
      </div>
      <hr />
    </div>
  );
}

export default Joke;

/* Challenge:

    - Each Joke should receive a "setup" prop and a "punchline" prop
      and render those however you'd like
- Use your favorite 2-part jokes (setup & punchline), or check
  jokes.md file for some examples.



EXTRA CREDIT:
Some jokes are only a punchline with no setup:

E.g.: "It’s hard to explain puns to kleptomaniacs because 
they always take things literally."

If you don't pass in a "question" prop, how might you make it only 
show the punchline?
*/
