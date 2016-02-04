    #pragma strict
  public var target : Transform ;
  public var keepInBounds = true;
  public var LockScale = false;
  public var LockRotation = false;
  public var map : Minimap ;
  public var BlipCtrl : BlipCtrl;
  private var myRectTransform : RectTransform ;


 
 function Start () {
     map = GetComponentInParent(Minimap);
     myRectTransform = GetComponent("RectTransform");
 }
 
 function Update () {
 
 }
 
 function LateUpdate() {
      var newPosition : Vector3 = map.TransformPosition(target.position);
      
      if(keepInBounds) {
      newPosition = map.MoveInside(newPosition);
      }
      
      if(!LockScale) {
      myRectTransform.localScale = new Vector3(map.zoomLevel, map.zoomLevel, 1);             
      }
      if(!LockRotation) {
      myRectTransform.localEulerAngles = map.TransformRotation(target.eulerAngles);
      }
      
      myRectTransform.localPosition = newPosition;
          
 }