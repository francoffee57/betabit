
class Slider {
    /**
     * Para moverlo usa el metodo move() y un +1 o -1.
     *     +1: lo mueve a la derecha.
     *     -1: Lo mueve a la izquierda.
     * @param {object} element  El elemento que se va a mover
     * @param {number} initialPosition La posición inicial, por defecto es 0
     * @param {number} maxPosition La cantidad de elementos del slider, partiendo por el 0
     * @param {number} cantMove Cuantos px se va a mover
     *  
     */
    constructor(element, initialPosition = 0, maxPosition, cantMove){
        // para que this no cambie
        this.move = this.move.bind(this)
        this.slider = element
        this.interval = null
        this.initialPosition = initialPosition
        this.maxPosition = maxPosition
        this.cantMove = cantMove
    }

    /**
     * Metodo para mover el slider.
     * @param {number} oldPosision Valores: 1(derecha) o -1 (izquierda).
     */
    move(oldPosision){
        this.initialPosition += oldPosision

        if(this.initialPosition > this.maxPosition) this.initialPosition = this.maxPosition
        else if(this.initialPosition < 0) this.initialPosition = 0

        const moveValue = this.cantMove * this.initialPosition
        
        this.moveTo(moveValue)
    }
    
    moveTo(index){
        this.slider.style.left = `-${index}%`
    }
}

export { Slider }