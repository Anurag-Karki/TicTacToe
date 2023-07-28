import React, {useState} from 'react'
import Square from './Square'
import "./styles.css";

function Board() {
    const [xNext,setXNext]=useState(true);
    const [squares,setSqa]=useState(Array(9).fill(null));
    //Closure Function in Javascript alowing inner function to have access to variables and function defined in a outer function.
    
    function handleChange(i){
        if(squares[i] || checkWinner(squares))
        {
            return;// inroder to manage the overwritten of the symbol
        }
        const nextSquares=squares.slice(); //Inorder to maintain immutability -> creating a copy
        if(xNext)
        {
            nextSquares[i]="X"
        }
        else{
            nextSquares[i]="O"
        }
        setSqa(nextSquares);
        setXNext(!xNext);
    }

    function checkWinner(squares)
    {
        const lines=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];
        for(let i=0;i<lines.length;i++)
        {
            const [a,b,c]=lines[i];
            if(squares[a] && squares[a]===squares[b] && squares[a]===squares[c])
            {
                return squares[a];
            }
        }
        return null;
    }

    function checkDraw(squares)
    {
        var cnt=1;
        for(let i=0;i<squares.length;i++)
        {
            if(squares[i]==null)
            {
                cnt=0;  
            }
        }
        if(cnt===1)
        {
            return cnt;

        }

    }

    const dr=checkDraw(squares);
    const winner=checkWinner(squares);
    let status;
   
    if(winner)
    {
        status="Winner: "+ winner;
    }
    else if(dr)
    {
        status="Draw";

    }
    else{
            status="Next player: "+ (xNext?'X':'O')    
    }

  return (
    <>
        
        <div className='board-row'>
            {/* We can pass the function as prop but not call it */}
            <Square value={squares[0]} handleClick={()=>handleChange(0)}/>
            <Square value={squares[1]} handleClick={()=>handleChange(1)}/>
            <Square value={squares[2]} handleClick={()=>handleChange(2)}/>
        </div>
        <div className='board-row'>
            <Square value={squares[3]} handleClick={()=>handleChange(3)}/>
            <Square value={squares[4]} handleClick={()=>handleChange(4)}/>
            <Square value={squares[5]} handleClick={()=>handleChange(5)}/>
        </div>
        <div className='board-row'>
            <Square value={squares[6]} handleClick={()=>handleChange(6)}/>
            <Square value={squares[7]} handleClick={()=>handleChange(7)}/>
            <Square value={squares[8]} handleClick={()=>handleChange(8)}/>
        </div>
        <div className='status'>{status}</div>
    </>
    
  )
}

export default Board
