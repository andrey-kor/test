import React from 'react'

function CanvasBlock(){

    return(
        <div className="canvasBlock">
            <div className="canvas-wrapper" >
                <canvas id="canvas">
                    Невозможно построить график, браузер не поддерживает Canvas
                </canvas>
            </div>
        </div>
    )
}

export default CanvasBlock