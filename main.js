var canvas=new fabric.Canvas ('myCanvas');
hero_image_width=25;
hero_image_height=25;





    function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
	hero_image_object = Img;

	hero_image_object.scaleToWidth(hero_image_width);
	hero_image_object.scaleToHeight(hero_image_height);
	hero_image_object.set({
	top:player_y,
	left:player_x
	});
	canvas.add(hero_image_object);

	});

}
window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
keyPressed=e.keyCode;
console.log(keyPressed);
if (e.shiftKey==true && keyPressed=='80')
{console.log("p and shift together");
hero_image_width=hero_image_width+10;
hero_image_height=hero_image_height+10
document.getElementById("current_width").innerHTML=hero_image_width;
document.getElementById("height").innerHTML=hero_image_height;

} 
if (e.shiftKey==true && keyPressed=='77')
{console.log("m and shift together");
hero_image_width=hero_image_width-10;
hero_image_height=hero_image_height-10
document.getElementById("current_width").innerHTML=hero_image_width;
document.getElementById("height").innerHTML=hero_image_height;
} 
if (keyPressed=='38') {
up();
console.log("up");}
if (keyPressed=='40') {
	down();
	console.log("down");
}
if (keyPressed=='37') {
	
left();
		console.log("left");
		}
if (keyPressed=='39') {
right();
console.log("right");
			}
if (keyPressed=='87') {	new_image('');
console.log("w");
				}
	if (keyPressed=='71') {
			new_image('');
	console.log("g");
					}
					if (keyPressed=='76') {
						new_image('');
						console.log("d");
						}
						if (keyPressed=='84') {
							new_image('');
							console.log("t");
							}
							if (keyPressed=='82') {
								new_image('');
								console.log("r");
								}
								if (keyPressed=='89') {
									new_image('');
									console.log("y");
									}
									if (keyPressed=='68') {
										new_image('');
										console.log("d");
										}
										if (keyPressed=='85') {
											new_image('');
											console.log("u");
											}
											if (keyPressed=='67') {
												new_image('stone.png'
							
												);
												console.log("c");
												}					
}
