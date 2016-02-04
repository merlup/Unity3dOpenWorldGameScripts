public var EnemyBlipImage : Rigidbody;
public var bliparray = new Array();
public var map : Minimap;
public var EnemyBlip : EnemyBlip;
public var trackObject : GameObject;
public var newBlip : GameObject;
private var target : Transform;
public var trackObjects = new Array();

function Start () {
var Blip = GetComponent("Blip");
var map = GetComponent('Minimap');

}

function CreateEnemyBlip(enemy, position , rotation) {
 var newBlip = Instantiate(EnemyBlipImage, position, rotation);
 newBlip.name = enemy.name;
 newBlip.transform.SetParent(map.transform);
 newBlip.gameObject.tag = "EnemyBlip" ;
 var trackObject = enemy;
 trackObjects.Push(trackObject.transform);




}


