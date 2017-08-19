using UnityEngine;
using System.Collections;
using UnityEngine.UI;

public class Speedometer : MonoBehaviour {

	public Text speed;
	public Rigidbody car;
	public float kph;
	public int kphd;

	void Start () {



	}

	void Update (){
		kph = car.velocity.magnitude *3.6f;
		kphd = (int)kph;

		speed.text = kphd.ToString();

	}

}