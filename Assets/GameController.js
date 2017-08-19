#pragma strict
public class GameController extends MonoBehaviour {
	static var instance : GameController;

function Awake(){
	instance = this ;
}
static function Instance(){
		return instance;
	}


private var laps : int = 0;
public var lapstxt : UnityEngine.UI.Text;

function increaseLaps(){
	laps++;
	updatelapsTxt();
}
function updatelapsTxt(){
	lapstxt.text = "Laps done: "+ laps.ToString();
}
}