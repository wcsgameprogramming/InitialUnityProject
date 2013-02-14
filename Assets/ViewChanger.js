#pragma strict

function TurnOff () {
	GameObject.Find("First Person Camera").camera.enabled = false;
	GameObject.Find("Security 1").camera.enabled = false;
	GameObject.Find("Security 2").camera.enabled = false;
	GameObject.Find("Security 3").camera.enabled = false;
	GameObject.Find("Security 4").camera.enabled = false;
}

function Update () {
	
	if (Input.GetKeyDown(KeyCode.Alpha6)){
		TurnOff();
		GameObject.Find("First Person Camera").camera.enabled = true;
		GameObject.Find("First Person Camera").camera.rect = Rect(0,0.25,0.65,0.75);
		GameObject.Find("Security 1").camera.enabled = true;
		GameObject.Find("Security 1").camera.rect = Rect(0,0,0.25,0.25);
		GameObject.Find("Security 2").camera.enabled = true;
		GameObject.Find("Security 2").camera.rect = Rect(0.25,0,0.25,0.25);
		GameObject.Find("Security 3").camera.enabled = true;
		GameObject.Find("Security 3").camera.rect = Rect(0.5,0,0.25,0.25);
		GameObject.Find("Security 4").camera.enabled = true;
		GameObject.Find("Security 4").camera.rect = Rect(0.75,0,0.25,0.25);
	}if (Input.GetKeyDown(KeyCode.Alpha5)){
		TurnOff();
		GameObject.Find("First Person Camera").camera.enabled = true;
		GameObject.Find("First Person Camera").camera.rect = Rect(0,0,1,1);
	}if (Input.GetKeyDown(KeyCode.Alpha1)){
		TurnOff();
		GameObject.Find("Security 1").camera.enabled = true;
		GameObject.Find("Security 1").camera.rect = Rect(0,0,1,1);
	}if (Input.GetKeyDown(KeyCode.Alpha2)){
		TurnOff();
		GameObject.Find("Security 2").camera.enabled = true;
		GameObject.Find("Security 2").camera.rect = Rect(0,0,1,1);
	}if (Input.GetKeyDown(KeyCode.Alpha3)){
		TurnOff();
		GameObject.Find("Security 3").camera.enabled = true;
		GameObject.Find("Security 3").camera.rect = Rect(0,0,1,1);
	}if (Input.GetKeyDown(KeyCode.Alpha4)){
		TurnOff();
		GameObject.Find("Security 4").camera.enabled = true;
		GameObject.Find("Security 4").camera.rect = Rect(0,0,1,1);
	}
}

