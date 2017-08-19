#pragma strict

function OnTriggerEnter(other: Collider){

	print("collide");
	if(other.CompareTag("car")){
		GameController.Instance().increaseLaps();
	}
}
