class Mard {

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 10;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ]
    }

    getNewDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ]
    }

    chooseCell(character) {
        this.getNewDirections()
        var found = []
        for (var i in this.directions) {
            var x = this.directions[i][0]
            var y = this.directions[i][1]
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i])
                }
            }

        }
        return found;

    }

    mult() {
        var empty = random(this.chooseCell(0))
        if (empty && this.energy > 20) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 4
            var md = new Mard(newX, newY)
            mardArr.push(md)
        }
    }

    move() {
        var empty = random(this.chooseCell(0))
        this.energy-=3;
        if (empty) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 4
            matrix[this.y][this.x] = 0

            this.x = newX
            this.y = newY
        }
    }

    eat() {
        var food = random(this.chooseCell(1))

        if (food) {
            var newX = food[0]
            var newY = food[1]
            matrix[newY][newX] = 4
            matrix[this.y][this.x] = 0

            for (var i in grassArr) {
                if (grassArr[i].x == newX && grassArr[i].y == newY) {
                    grassArr.splice(i, 1)
                }
            }

                    this.x = newX
                    this.y = newY
                    this.energy += 2
                }
            }

            eat1() {
                var food = random(this.chooseCell(2))
        
                if (food) {
                    var newX = food[0]
                    var newY = food[1]
                    matrix[newY][newX] = 4
                    matrix[this.y][this.x] = 0
        
                    for (var i in grassArr) {
                        if (grassArr[i].x == newX && grassArr[i].y == newY) {
                            grassArr.splice(i, 1)
                        }
                    }
        
                            this.x = newX
                            this.y = newY
                            this.energy += 2
                        }
                    }

                    eat2() {
                        var food = random(this.chooseCell(3))
                
                        if (food) {
                            var newX = food[0]
                            var newY = food[1]
                            matrix[newY][newX] = 4
                            matrix[this.y][this.x] = 0
                
                            for (var i in grassArr) {
                                if (grassArr[i].x == newX && grassArr[i].y == newY) {
                                    grassArr.splice(i, 1)
                                }
                            }
                
                                    this.x = newX
                                    this.y = newY
                                    this.energy += 2
                                }
                            }

            die(){
                if (this.energy <= 0) {
                    matrix[this.y][this.x] = 0
                    for (var i in mardArr) {
                        if (mardArr[i].x == this.x && mardArr[i].y == this.y) {
                            mardArr.splice(i, 1)
                        }
                    }
                }
            }
        }



