#pragma strict
var barTexture: Texture2D; // select some white or gray texture var barWidth: float = 5; var barHeight: float = 40; var barSpace: float = 7;

function OnGUI(){ // set the speedometer top-left corner var pos = Vector2(Screen.width - 90, Screen.height - 50); // get the speed in mph: var mph = rigidbody.velocity.magnitude * 2.237; // draw the bars: each bar means 5 mph, no bar if speed < 1: for (var v: float = 1;
    }