#pragma strict

var speed : UnityEngine.UI.Text;
var  kph : float;
var car : Rigidbody;

function Start () {

}

function Update () {
	kph = car.velocity.magnitude *3.6;
		speed.text = kph.ToString("F0");

} 