import { Col } from "antd";
function Time({text}) {

    function getWordCount(str) {
       
       var count= str.split(' ')
          .filter(function(n) { return n !== '' })
          .length;

        return count;
   }


    function estTime(st) {
        var timeEst = (getWordCount(st))/ (4)
        if (getWordCount(text)==0){
            return;
        }
        else if(timeEst<60) {
            return parseInt(timeEst) + " seconds";
        }
        else if(timeEst%60==0){
            return timeEst + " minutes"
        }
        else if(timeEst>60 && timeEst %60 !=0)
         {
            var mins= parseInt(timeEst/60);
            var sec= parseInt(timeEst%60);
            return mins + " minutes" +  " " + sec + " seconds"  
         }
        
   }

   return (
    <div>
        <Col span={2}><p>Reading Time:<hr/> {getWordCount(text)===0 ? "0 seconds": estTime(text)} </p> 
        </Col>
        <Col span={2}><hr/></Col>
        <Col span={2}><p>Total Word: <hr/> {getWordCount(text)}</p> 
        </Col>
            
        
    </div>
   )
}

export default Time;