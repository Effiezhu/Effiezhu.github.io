import js
p5 = js.window
# question 1
random_size = int(p5.random(25, 125))
random_size2 = int(p5.random(25, 125))
random_size3 = int(p5.random(25, 125))
random_size4 = int(p5.random(25, 125))
# question 8
alpha = 0

# question 3
def random_square(size):
    # question 2
    p5.line(10, 10, 10 + size, 10)
    p5.line(10 + size, 10, 10 + size, 10 + size)
    p5.line(10, 10, 10, 10 + size)
    p5.line(10, 10 + size, 10 + size, 10 + size)


# question 11
def moveto(x, y):
    p5.push()
    p5.translate(x, y)


def lineto(x, y):
    p5.line(0, 0, x, y)
    p5.pop()

 
def random_square_new(size):
    moveto(10, 10)
    lineto(size, 0)
    moveto(10 + size, 10)
    lineto(0, size)
    moveto(10, 10)
    lineto(0, size)
    moveto(10, 10 + size)
    lineto(size, 0)


# question 5
def random_square_at(x, y, size):
    # question 4
    p5.push()
    p5.translate(x, y)
    #random_square(size)
    random_square_new(size)
    p5.pop()
    

# question 10
def inside_square():
    if (p5.mouseX > 10) and (p5.mouseX < 10 + random_size) and (p5.mouseY > 10) and (p5.mouseY < 10 + random_size):
        return True
    else:
        return False


# question 12
def random_square_loop(x, y, size):
    for i in range(3):
        p5.stroke(p5.random(0,227), p5.random(0, 100), p5.random(100, 255))
        random_square_at(x + 40 - 5 * i, y + 40 - 5 * i, 20 + 1/3 * i * size)
        

def setup():
    p5.createCanvas(300, 300)    # 300 x 300 pixel canvas 
    print('finished setup')


def draw():
    global random_size
    global alpha
    p5.background(255)  # white background
    #p5.text(str(p5.mouseX) + ", " + str(p5.mouseY), 10, 15)
    p5.strokeWeight(2)  # set stroke thickness
    #p5.text(random_size, 10, 30)
    #random_square(random_size)
    # question 6
    # question 9
    if inside_square():
        p5.stroke(127, 0, 255)
    else:
        p5.stroke(127, 230, 255)
    random_square_at(0, 0, random_size)
    if (alpha < 255):
        alpha += 1
    else:
        alpha = 0
    p5.stroke(255, 127, 54, alpha)
    random_square_at(150, 0, random_size2)
    # question 7
    if (p5.mouseIsPressed == True):
        p5.stroke(127, 200, 0)
        random_square_at(0, 150, random_size3)
    p5.stroke(255, 0, 127)
    #random_square_at(150, 150, random_size4)
    random_square_loop(150, 150, random_size4)

