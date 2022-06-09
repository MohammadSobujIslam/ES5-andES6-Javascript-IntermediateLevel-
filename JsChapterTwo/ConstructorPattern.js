// Constructor pattern

var rectangle_create = function(height,width){
    this.height = height
    this.width = width
    this.Draw  = function(){
        console.log('I am a rectangle')
        this.PrintProperties()
        
        
    }
    this.PrintProperties = function(){
        console.log("My rectangle height is ", this.Height)
        console.log("My rectangle width is ", this.width)
        console.log(this)
    }

}

var rect_one = new rectangle_create(4,23)

rect_one.Draw()
rect_one.PrintProperties()