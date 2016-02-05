#pragma strict
var platform : GameObject;

function Start () {

var platform = GetComponent("Platform");

}

function OnTriggerEnter (obj : Collider) {
platform.transform.position.y *= 20;

}