 #pragma strict
public var target : Transform ;
public var zoomLevel : float = 10f;

public var xRotation : Vector2 = Vector2.right;
public var yRotation : Vector2 = Vector2.up;

function LateUpdate () {

	xRotation = new Vector2(target.right.x, -target.right.z);
	yRotation = new Vector2(-target.forward.x, target.forward.z);


}


public function TransformPosition(position : Vector3) {

	var offset : Vector3 = position - target.position;
	var newPosition : Vector2 = offset.x * xRotation;
	newPosition += offset.z * yRotation;
	newPosition *= zoomLevel;
	return newPosition;

}

function MoveInside(point : Vector2) {
	var mapRect : Rect = GetComponent(RectTransform).rect;
	point = Vector2.Max(point, mapRect.min);
	point = Vector2.Min(point, mapRect.max);
	return point;

}

function TransformRotation(rotation : Vector3) {

return new Vector3(0, 0, target.eulerAngles.y - rotation.y);

}
function Start () {

}

function Update () {

}

