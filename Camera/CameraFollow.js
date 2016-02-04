#pragma strict

public var distanceAway : float = 0;
public var distanceUp : float = 0;
public var smooth : float = 0;
public var follow : Transform;
private var targetPosition : Vector3 =  Vector3.zero;

function Start () {
	transform.LookAt(follow);
	follow = GameObject.FindWithTag("Player").transform;

}

function Update () {
	
//	if(Input.GetButton("Sprint")) {
//	
//		distanceAway = 4;
//		distanceUp = 6;
//		
//	} else if(Input.GetButton("ZoomAim")) {
//	
//		distanceAway = 3;
//		distanceUp = 3;
//		
//	} else {
//	
//		distanceAway = 7;
//		distanceUp = 4;
//		
//	}
	

}

function LateUpdate () {


	targetPosition = follow.position + follow.up * distanceUp - follow.forward * distanceAway;
	Debug.DrawRay(follow.position, Vector3.up * distanceUp, Color.red);
	Debug.DrawRay(follow.position, follow.forward * distanceUp, Color.red);
	Debug.DrawLine(follow.position, targetPosition, Color.magenta);

	transform.position = Vector3.Lerp(transform.position, targetPosition, Time.deltaTime * smooth);
	
	transform.LookAt(follow);

}