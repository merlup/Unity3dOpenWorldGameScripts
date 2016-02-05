#pragma strict
public var target : Transform;
public var agent : NavMeshAgent;
public var hit : RaycastHit;
public var enemySight : Transform;
public var patrolPoints : Transform[];
public var currentPoint: float;
public var sightRay : Ray;
private var movespeed = 60;
public var chase = false;

public var character : UnityStandardAssets.Characters.ThirdPerson.ThirdPersonCharacter ; //Character we are controlling

function Start () {

target = GameObject.Find("Player").transform;
enemySight = transform.GetChild(3).transform;
agent = GetComponent(NavMeshAgent);
character = GetComponent(UnityStandardAssets.Characters.ThirdPerson.ThirdPersonCharacter);
agent.updateRotation = false;
agent.updatePosition = true;
currentPoint = Random.Range(0,4);
Patrol();



}

function Update () {


	var sightRay : Ray = new Ray(transform.position, transform.forward);
	Physics.Raycast(sightRay, hit, 10);
	if(Physics.Raycast(sightRay, hit, 10) ){
		if(hit.collider.gameObject.tag == "Player") {
			Debug.Log("Hit Player");
			chase = true;
			ChasePlayer();
				Debug.Log(chase);
		} 
	} 

	Patrol();
	 

	Debug.DrawRay(transform.position, transform.forward , Color.blue);
	Debug.DrawRay(enemySight.position, enemySight.forward * 10 , Color.red );

}

function Patrol() {
	chase = false;
	while(chase == false) {
		agent.SetDestination(Vector3.MoveTowards(transform.position, patrolPoints[currentPoint].position, movespeed * Time.deltaTime));
		character.Move(agent.desiredVelocity, false, false);
		Debug.Log(chase);
		break;
	}
	if(transform.position.x == patrolPoints[currentPoint].position.x && transform.position.z == patrolPoints[currentPoint].position.z ) {
		currentPoint++;
	} 
	if(currentPoint >= patrolPoints.Length) {
		currentPoint = 0;
	} 
	
		
}

function ChasePlayer () {
	chase = false;
	chase = true;
	agent.SetDestination(target.position);
	character.Move(agent.desiredVelocity, false, false);
}


