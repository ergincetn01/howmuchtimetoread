import "../Styles/Time.css"

function Time({text}) {

    function getWordCount(str) {
       
       var count= str.split(/\s+/).filter(function(n) { return n !== '' })
          .length;
        return count;
   }

    function estTime(st) {
        var timeEst = (getWordCount(st))/ (3)
        if (getWordCount(text)===0){
            return;
        }
        else if(timeEst<60) {
            return parseInt(timeEst) + " seconds";
        }
        else if(timeEst%60===0){
            return timeEst + " minutes"
        }
        else if(timeEst>60 && timeEst %60 !==0)
         {
            var mins= parseInt(timeEst/60);
            var sec= parseInt(timeEst%60);
            return mins + " minutes "  + sec + " seconds";
         }
        
   }

   return (
    <div className="timerContainer">
        <p className="white">Reading Time<hr/> {getWordCount(text)===0 ? "0 seconds": estTime(text)} </p> 
       
        <hr/>
       <p className="white">Total Words<hr/> {getWordCount(text)}</p> 
 
    </div>
   )
}

export default Time;