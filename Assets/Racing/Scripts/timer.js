#pragma strict
private var startTime : float;
private var textTime : String;
 
private var guiTime: float;

private var minutes : int;
private var seconds : int;
private var fraction : int;

private var textField : UI.Text;


function Start() {
startTime = Time.time;
textField = GetComponent(UI.Text);
}
function Update () {
guiTime = Time.time - startTime;

minutes = guiTime / 60; 
seconds = guiTime % 60;
fraction = (guiTime * 100) % 100;
 
 textTime = String.Format ("{0:00}:{1:00}:{2:00}", minutes, seconds, fraction);

textField.text = textTime;
}