function canvasPainter(items) { 

    const canvas = document.querySelector('#canvas'); 
    let ctx = canvas.getContext('2d');  
    canvas.height = "250"

    
    const caloryNorm = +sessionStorage.getItem('caloriesNorm')

    let itemSum = items.map((item)=>{
        let sumEating = 0
        for (let eatingItem of item.eating){
            sumEating += +eatingItem.kal
        }
        return sumEating
    })

    itemSum.reverse()

    let maxItemSum = Math.max.apply(null, itemSum) 

    const canvasHeight = canvas.height
    const canvasWidth = canvas.width
    const columnWidth = 20
    const heightCaloryNorm = caloryNorm/(maxItemSum/(canvasHeight-30))
    const columnStep = 50
    let lastColumn = columnStep * itemSum.length
    let startPositionX = 0

    draw()

    function draw(){
        let nextColumn = 0

        if (lastColumn > canvasWidth) startPositionX = -(lastColumn - canvasWidth)

        ctx.clearRect(0, 0, canvasWidth, canvasHeight);   

        ctx.translate(startPositionX, canvasHeight)
        ctx.rotate(-Math.PI/2)
        

        ctx.fillStyle = "rgb(231, 80, 80)"
        ctx.fillRect(heightCaloryNorm + 20, 0, 2, lastColumn > canvasWidth ? lastColumn : canvasWidth)

        if (maxItemSum !== 0){
            let i = 0
            for (let item of itemSum){

                item <= caloryNorm ? ctx.fillStyle = "rgb(120, 212, 120)" : ctx.fillStyle = "rgb(231, 80, 80)"
                ctx.font = "16px Tahoma";
                let columnHeight = item/(maxItemSum/(canvasHeight-30))
                ctx.fillRect(20, nextColumn+(1/2)*columnWidth, columnHeight < 2 ? 2 : columnHeight, columnWidth)
            
                ctx.rotate(Math.PI/2)
                ctx.fillStyle = "#000000"
                ctx.fillText(`${items[(itemSum.length-1-i)].date.slice(4,9)}`, nextColumn, 0)

                ctx.rotate(-Math.PI/2) 

                ctx.fillStyle = "#000000"
                ctx.fillText(`${item}`, columnHeight < 45 ? columnHeight+25 : columnHeight-20, nextColumn+25)
            
                nextColumn += columnStep

                i++
            }
        }
        else {
            ctx.rotate(Math.PI/2)
            ctx.font = "16px Tahoma";
            ctx.fillStyle = "#000000"

            ctx.fillText(canvasWidth < 390 ? "Место для графика" : "Здесь появится график, как только вы введёте значения", 0, -canvasHeight/2)

            ctx.rotate(-Math.PI/2)
        }

        ctx.rotate(Math.PI/2)   
        ctx.translate(-startPositionX, -canvasHeight)
    }
}

export default canvasPainter
