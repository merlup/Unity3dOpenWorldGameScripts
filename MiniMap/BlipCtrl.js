public var EnemyLightBlipImage : Rigidbody;
public var EnemyMediumBlipImage : Rigidbody;
public var EnemyHeavyBlipImage : Rigidbody;
public var map : Minimap;
private var trackObject : GameObject;
private var newBlip : GameObject;
private var target : Transform;
public var trackObjects = new Array();
public var blipCount : int = 0;

function Start () {
var Blip = GetComponent("Blip");
var map = GetComponent('Minimap');

}

function CreateEnemyLightBlip(enemy, position , rotation) {
 var newBlip = Instantiate(EnemyLightBlipImage, position, rotation);
 newBlip.name = "Enemy" + blipCount++;
 newBlip.transform.SetParent(map.transform);
 newBlip.gameObject.tag = "EnemyBlip" ;
 var trackObject = enemy;
 trackObjects.Push(trackObject.transform);
}

function CreateEnemyMediumBlip(enemy, position , rotation) {
 var newBlip = Instantiate(EnemyMediumBlipImage, position, rotation);
 newBlip.name = "Enemy" + blipCount++;
 newBlip.transform.SetParent(map.transform);
 newBlip.gameObject.tag = "EnemyBlip" ;
 var trackObject = enemy;
 trackObjects.Push(trackObject.transform);
}

function CreateEnemyHeavyBlip(enemy, position , rotation) {
 var newBlip = Instantiate(EnemyHeavyBlipImage, position, rotation);
 newBlip.name = "Enemy" + blipCount++;
 newBlip.transform.SetParent(map.transform);
 newBlip.gameObject.tag = "EnemyBlip" ;
 var trackObject = enemy;
 trackObjects.Push(trackObject.transform);
}

