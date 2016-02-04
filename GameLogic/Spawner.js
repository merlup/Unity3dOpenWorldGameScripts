#pragma strict

public var lightEnemy : Rigidbody ;
public var mediumEnemy : Rigidbody ;
public var heavyEnemy : Rigidbody ;
public var EnemyType : String = "";
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


function SetEnemyType(num) {

	if(num == 1 ) {

		EnemyType = "Light";

	} else if(num == 2) {

		EnemyType = "Medium";

	} else if (num == 3) {

		EnemyType = "Heavy";

	}


}


 function SpawnWaves() {
     for(var i = 0; i < enemycount; i++) {

     	//Set Random Spawn Position and Rotation
         var spawnPosition : Vector3 = new Vector3(Random.Range(-50, 50), spawnValues.y ,Random.Range (-50, 50));
         var spawnRotation : Quaternion = Quaternion.identity;


    	//Set Random EnemyType
         SetEnemyType(Random.Range(0,4));

         //Check EnemyType and Instatiate Prefab for that Type
         if(EnemyType == "Light") {
         	Debug.Log(EnemyType);
	        var newEnemy = Instantiate(lightEnemy, spawnPosition, spawnRotation);
	        newEnemy.name = "Enemy" + enemyId++ + "(Clone)";
	   		newEnemy.gameObject.tag = "Enemy";	
	        enemiesarray.Push(this.lightEnemy);

	         // Create Blip for this Enemy
	         blipcontroller.CreateEnemyLightBlip(newEnemy, spawnPosition, spawnRotation);

	         yield WaitForSeconds(spawnWait);

	      } else if (EnemyType == "Medium") {
	        Debug.Log(EnemyType);
	        newEnemy = Instantiate(mediumEnemy, spawnPosition, spawnRotation);
	        newEnemy.name = "Enemy" + enemyId++ + "(Clone)";
	   		newEnemy.gameObject.tag = "Enemy";	
	        enemiesarray.Push(this.mediumEnemy);

	        // Create Blip for this Enemy
	        blipcontroller.CreateEnemyMediumBlip(newEnemy, spawnPosition, spawnRotation);

	        yield WaitForSeconds(spawnWait);
	      } else if (EnemyType == "Heavy") {
	        Debug.Log(EnemyType);
	       	newEnemy = Instantiate(heavyEnemy, spawnPosition, spawnRotation);
	        newEnemy.name = "Enemy" + enemyId++ + "(Clone)";
	   		newEnemy.gameObject.tag = "Enemy";	
	        enemiesarray.Push(this.heavyEnemy);

	        // Create Blip for this Enemy
	         blipcontroller.CreateEnemyHeavyBlip(newEnemy, spawnPosition, spawnRotation);

	         yield WaitForSeconds(spawnWait);
	      }

	  
     }

    
 }



