#pragma strict

public var distanceAway : float = 0;
public var distanceUp : float = 0;
public var smooth : float = 0;
public var follow : Transform;
private var targetPosition : Vector3 =  Vector3.zero;
public var CurrentCam : float;
public var Cameras : Vector2[];
public var Camera1 : Vector2 = new Vector2(2, 2);
public var Camera2 : Vector2 = new Vector2(4, 4);
//public var Camera3 : Vector2 = new Vector2 ( distanceAway, distanceUp);
//public var Camera4 : Vector2 = new Vector2 ( distanceAway, distanceUp);
//public var Camera5 : Vector2 = new Vector2 ( distanceAway, distanceUp);


function Start () {
	CurrentCam = 0;
	transform.LookAt(follow);
	follow = GameObject.Find("CameraTarget").transform;
	Cameras[0] = Camera1;
	Cameras[1] = Camera2;
	Debug.Log(Cameras[0]);
	Debug.Log(Cameras[1]);
	var distanceAway = Cameras[CurrentCam].x;
	var distanceUp = Cameras[CurrentCam].y;
	Debug.Log(Cameras);

}

function Update () {
	if(Input.GetButton("CameraSwitch")) {


	CurrentCam++;


		if(CurrentCam >= 2) {
			Debug.Log("Last Cam");
			CurrentCam = 0; 
		}

	Debug.Log("Camera Switch");
	}
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