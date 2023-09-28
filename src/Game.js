const Game = () => {
        //Display characters
        const Player1 = 'X';
        const Player2 = 'O';
        
        //Score count
        var XWins = 0;
        var OWins = 0;
        
        //Game variables
        var player1Turn = true;
        var gameWon = false;
        var takenSpots = [];
        var SpotTakenList = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        var canPlay = true;
        var indexToChoose = 0;

        function MiniMax(list, depth, player){
            var check = CheckTerminal(list);
            if(check === -1){
                return 10 - depth;
            }
            if(check === 1){
                return depth - 10;
            }
            if(CheckDraw(list)){
                return 0;
            }
            depth += 1;
            var scores = [];
            var moves = [];
            var i;
            var listCpy;
            for(i = 0; i < 9; ++i){
                if(list[i] === 0){
                    moves.push(i);
                    listCpy = [...list];
                    if(player === 1){
                        listCpy[i] = -1;
                        scores.push(MiniMax(listCpy, depth, 0));
                    }
                    else{
                        listCpy[i] = 1;
                        scores.push(MiniMax(listCpy, depth, 1));
                        
                    }
                }
            }
            if(player === 1){
                var max = -1000;
                for(i = 0; i < scores.length; ++i){
                    if(scores[i] > max){
                        max = scores[i];
                        indexToChoose = moves[i];
                        
                    }
                }
                return max;
            }
            else{
                var min = 1000;
                for(i = 0; i < scores.length; ++i){
                    if(scores[i] < min){
                        min = scores[i];
                    }
                }
                return min;
            }
        }
        
        //#region Game functions
        function clickedHere(spotChoice){
            if(canPlay){
                PlaySpot(parseInt(spotChoice));
            }
        }
        function PlaySpot(spotChoice){
            if(!(takenSpots.includes(spotChoice))){
                takenSpots.push(spotChoice);
                if(player1Turn){
                    SpotTakenList[spotChoice - 1] = 1;
                }
                else{
                    SpotTakenList[spotChoice - 1] = -1;
                }
                MarkBoard(spotChoice);
                GameWinCheck();
                if(!gameWon){
                    SwitchPlayer();
                    if(!player1Turn){
                        canPlay = false;
                        MiniMax(SpotTakenList, 0, 1);
                        delay(300).then(() => PlaySpot(indexToChoose + 1));
                    }
                    else{
                        canPlay = true;
                    }
                }
                
                
                
            }
        }
        
        function MarkBoard(spot){
            if(player1Turn){
                document.getElementById(spot).style.color = 'rgb(0, 100, 205)';
                document.getElementById(spot).innerText = Player1;
            }
            else{
                document.getElementById(spot).style.color = '#18AA00';
                document.getElementById(spot).innerText = Player2;
            }
        }

        function ClearDisplay(){
            for(let i = 1; i < 10; ++i){
                if(document.getElementById(i) != null){document.getElementById(i).innerText = String.fromCharCode(160);}
            }
        }

        function DrawDisplay(){
            ClearDisplay();
            document.getElementById(1).style.color = 'rgb(0, 100, 205)';
            document.getElementById(1).innerText = 'D'
            document.getElementById(2).style.color = '#18AA00';
            document.getElementById(2).innerText = 'R'
            document.getElementById(5).style.color = '#18AA00';
            document.getElementById(5).innerText = 'A'
            document.getElementById(6).style.color = 'rgb(0, 100, 205)';
            document.getElementById(6).innerText = 'W'
        }

        function Laugh(){
            ClearDisplay();
            for(let i = 1; i < 11; ++i){
                delay(100 * i).then(() => LaughKey(getRandomInt(9) + 1))
            }
        }

        function LaughKey(id){
            var element = document.getElementById(id);
            if(element !== null && element !== 'undefined'){
                console.log(element);
                document.getElementById(id).style.color = '#18AA00';
                document.getElementById(id).innerText = "ha";
                delay(200).then(() => ClearSpot(id));
            }
        }

        function ClearSpot(id){
            var element = document.getElementById(id);
            if(element !== null && element !== 'undefined'){
                document.getElementById(id).innerText = String.fromCharCode(160);
            }
        }
        
        function SwitchPlayer(){
            player1Turn = !player1Turn;
        }

        function Reset(){
            ClearDisplay();
            if(document.getElementById('robot') != null){document.getElementById('robot').innerText = `Robot: ${OWins}`;}
            if(document.getElementById('human') != null){document.getElementById('human').innerText = `Human: ${XWins}`;}
            takenSpots = [];
            SpotTakenList = [0, 0, 0, 0, 0, 0, 0, 0, 0];
            player1Turn = true;
            canPlay = true;
            gameWon = false;
        }
        //#endregion
        
        //#region Utility functions
        
        function delay(time) {
            return new Promise(resolve => setTimeout(resolve, time));
          }

        function getRandomInt(max) {
        return Math.floor(Math.random() * max);
        }
        //#endregion
        
        //#region Board Checking
        function CheckDraw(list){
            for(let i = 0 ; i < list.length; ++i){
                if(list[i] === 0){
                    return false;
                }
            }
            return true;
        }
        
        function GameWinCheck(){
            let check = CheckTerminal(SpotTakenList);
            if(check === 1){
                gameWon = true;
                canPlay = false;
                ++XWins;
                delay(210).then(() => Reset());
            }
            else if(check === -1){
                gameWon = true;
                canPlay = false;
                ++OWins;
                delay(210).then(() => Laugh());
                delay(1800).then(() => Reset());
            }
            else if(takenSpots.length === 9){
                gameWon = true;
                canPlay = false;
                delay(210).then(() => DrawDisplay());
                delay(1210).then(() => Reset());
            }
        }
          
        function CheckTerminal(list){
            var xCount;
            var oCount;
            for(let i = 0; i < 9; i+=3){
                xCount = 0;
                oCount = 0;
                for(let j = 0; j < 3; ++j){
                    if(list[i+j] === 0){
                        break;
                    }
                    else if(list[i+j] === 1){
                        ++xCount;
                    }
                    else{
                        ++oCount;
                    }
                }
                if(xCount === 3){
                    return 1;
                }
                if(oCount === 3){
                    return -1;
                }
            }
            for(let i = 0; i < 3; i++){
                oCount = 0;
                xCount = 0;
                for(let j = 0; j < 9; j+=3){
                    if(list[i+j] === 0){
                        break;
                    }
                    else if(list[i+j] === 1){
                        ++xCount;
                    }
                    else{
                        ++oCount;
                    }
                }
                if(xCount === 3){
                    return 1;
                }
                if(oCount === 3){
                    return -1;
                }
            }
            if(list[4] === 1){
                if(list[0] === 1 && list[8] === 1){
                    return 1;
                }
                if(list[2] === 1 && list[6] === 1){
                    return 1;
                }
            }
            else if(list[4] === -1){
                if(list[0] === -1 && list[8] === -1){
                    return -1;
                }
                if(list[2] === -1 && list[6] === -1){
                    return -1;
                }
            }
        
            return 0;
        }
        //#endregion
   
    return ( 
<div className="padAndBoard">
    <div className="game">
        <button id="1" onClick={(e) => clickedHere(1)}>&nbsp;</button>
        <button id="2" onClick={(e) => clickedHere(2)}>&nbsp;</button>
        <button id="3" onClick={(e) => clickedHere(3)}>&nbsp;</button> <br />
        <button id="4" onClick={(e) => clickedHere(4)}>&nbsp;</button>
        <button id="5" onClick={(e) => clickedHere(5)}>&nbsp;</button>
        <button id="6" onClick={(e) => clickedHere(6)}>&nbsp;</button> <br />
        <button id="7" onClick={(e) => clickedHere(7)}>&nbsp;</button>
        <button id="8" onClick={(e) => clickedHere(8)}>&nbsp;</button>
        <button id="9" onClick={(e) => clickedHere(9)}>&nbsp;</button>

    </div>
    <div className='scoreBoard'>
    <span className='green' id="robot">Robot: {OWins}</span><br />
    <span className='blue' id="human">Human: {XWins}</span>
    </div>
</div>
    
     );
}
 
export default Game;