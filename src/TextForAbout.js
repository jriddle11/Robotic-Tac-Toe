const TextForAbout = () => {
    return ( 
        <div className="aboutText">
            <h1>The Minimax Algorithim:</h1>
            <br />
            <p className="textMinMax">
            The <span className="bold">Minimax algorithm</span> is a strategy used by a computer program (AI) when playing games like Tic-Tac-Toe.
            It's a way for the AI to make decisions to maximize its chances of winning and minimize its chances of losing 
            i.e., min and max, which is why it is called the Minimax algorithim. Let's break it down step by step:
            <br />
            <br />
            <span className="bold blue underline">Game Tree:</span>
            <br /> 
            &emsp;&emsp;Imagine that every possible move in Tic-Tac-Toe is like a branch on a tree. Each move leads to more branches,
            and the tree represents all the possible ways the game can unfold. The end of each branch is the state of the game at its conclusion, either a win, loss or draw.
            <br />
            <br />
            <span className="bold green underline">Recursive Evaluation:</span> 
            <br /> 
            &emsp;&emsp;The AI doesn't just look one move ahead; it looks several moves into the future, considering all possible moves for both players. 
            It does this by recursively exploring the game tree. It assumes that both players are playing optimally, which means they're also using the Minimax strategy.
            <br />
            <br />
            <span className="bold blue underline">Depth:</span> 
            <br /> 
            &emsp;&emsp;The AI assigns a score to each possible game state (or end position) in the tree.
            The score represents how good that state is for the AI. A positive score means it's a favorable position for the AI, while a negative score means it's unfavorable. 
            The score for each branch is determined by how "deep" it is in the tree. A winning game deeper in the tree receives a lesser score than the win that is closer, as we want the AI to win as fast as possible.
            Conversely, a loss that is deeper in the tree is scored higher than a loss that is close, thus stalling the game until the opponent makes a mistake.
            <br />
            <br />
            <span className="bold green underline">Minimize and Maximize:</span>
            <br /> 
            &emsp;&emsp;The AI alternates between two roles: "maximizing" and "minimizing." When it's the AI's turn, it wants to maximize its chances of winning, 
            so it picks the move that leads to the highest score. When it's the opponent's turn, the AI assumes the opponent wants to minimize the AI's chances of winning, 
            so it picks the move that leads to the lowest score. It does this at every level of the tree for every possible move until it finds the move with the highest score to play.
            </p> 
            <br />
            <br />
            <h1>About Me:</h1>
            <br />
            <p className="textMinMax">
            My name is <span className="bold blue">Josh Riddle</span>, I am a freelance developer and current university Junior studying computer science. This was the first ever website I created as I was learning
            React and Javascript, I hope you liked it as much as I enjoyed making it. If you would like to hire me or just want to report an issue please contact me at: <a href = "mailto: riddlejosh11@gmail.com" className="green bold">riddlejosh11@gmail.com</a>
            </p>
            <br />
            <br />
            <br />
        </div>);
}
 
export default TextForAbout;
