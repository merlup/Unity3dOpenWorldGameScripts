#pragma strict

public var enemy : Rigidbody ;
private var spawnValues : Vector3 = Vector3(50, 1, 50);
public var enemycount : int ;
public var enemyId : int;
static var enemiesarray = new Array();
public var blipcontroller : BlipCtrl; 
public var spawnWait : float = 5;
public var startWait : float = 2;
public var waveWait : float = 4;
public var tagId : float = 0;

var spawnPosition : Vector3;
var spawnRotation : Quaternion;


function Start () {
var blipcontroller = GetComponent("BlipCtrl");
	while(true) {
		yield WaitForSeconds(startWait);
		SpawnWaves();
		yield WaitForSeconds(waveWait);
	}
	
}

function SetName () {
	enemy.name = "Enemy#" + enemyId++;
}


 function SpawnWaves() {
     for(var i = 0; i < enemycount; i++) {
         var spawnPosition : Vector3 = new Vector3(Random.Range(-50, 50), spawnValues.y ,Random.Range (-50, 50));
         var spawnRotation : Quaternion = Quaternion.identity;
         SetName();
         var newEnemy = Instantiate(enemy, spawnPosition, spawnRotation);
   		newEnemy.gameObject.tag = "Enemy";	
         enemiesarray.Push(this.enemy);
         blipcontroller.CreateEnemyBlip(enemy, spawnPosition, spawnRotation);
         yield WaitForSeconds(spawnWait);

     }
 }



