var rect = {
    Height : 20,
    width : 89,
    Area : function(){
        console.log('My area is ', this.Height * this.width)
    },
    Draw : function(){
        console.log('I am a rectangle')
        this.PrintProperties()
        
        
    },
    PrintProperties : function(){
        console.log("My rectangle height is ", this.Height)
        console.log("My rectangle width is ", this.width)
        console.log(this)
    }
}

//*************_____  Factory Pattern in JavaScript_____******? 
var CreateRect = function(height,width){
    return {
        Height : height,
        width : width,
      
        Draw : function(){
            console.log('I am a rectangle')
            this.PrintProperties()
            
            
        },
        PrintProperties : function(){
            console.log("My rectangle height is ", this.Height)
            console.log("My rectangle width is ", this.width)
            console.log(this)
        }
    }
    
}

var rect1 = new CreateRect(4,6)

rect1.Draw()
rect1.PrintProperties()

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

var reat_one = new rectangle_create(4,23)

reat_one.Draw()